import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../../constant';

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box sx={{ 
      py: 5,
      px: 2.5,
      backgroundColor: 'background.default',
      borderRadius: 2,
      my: 2.5
    }}>
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          mb: 5,
          color: 'text.primary',
          fontWeight: 'bold'
        }}
      >
        Trusted By Industry Leaders
      </Typography>
      
      <Slider {...settings}>
        {testimonials.map((client) => (
          <Box key={client.id} sx={{ px: 1 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2.5,
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Avatar
                src={client.avatar}
                alt={client.name}
                sx={{ 
                  width: 56, 
                  height: 56,
                  mb: 2.5
                }}
              />
              <Typography variant="subtitle1" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                {client.name}
              </Typography>
              <Typography variant="body2" sx={{ 
                color: 'text.secondary', 
                fontStyle: 'italic',
                mt: 1
              }}>
                "{client.quote}"
              </Typography>
            </Paper>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Client;