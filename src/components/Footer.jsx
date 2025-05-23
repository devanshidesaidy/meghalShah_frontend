import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
  Button,
  useTheme,
} from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ 
      bgcolor: 'black', 
      color: 'white', 
      pt: 8, 
      pb: 4,
      borderTop: `1px solid ${theme.palette.grey[800]}`
    }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography 
              variant="h5" 
              fontWeight="bold" 
              gutterBottom 
              sx={{ 
                color: 'white', 
                fontFamily: 'Playfair Display',
                '& span': {
                  color: 'white'
                }
              }}
            >
              <Box component="span" sx={{ color: 'white' }}>CA</Box> Meghal Shah
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: 'grey.300' }}>
              Providing expert financial advisory services to help businesses achieve sustainable growth and success.
            </Typography>
            <Box mt={2} display="flex" gap={1}>
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <IconButton 
                  key={index} 
                  sx={{ 
                    color: 'grey.400', 
                    '&:hover': { 
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    } 
                  }}
                >
                  <Icon size={20} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'white' }} gutterBottom>
              Quick Links
            </Typography>
            {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((text, index) => (
              <Box key={index} mb={1}>
                <Link 
                  href={`#${text.toLowerCase()}`} 
                  underline="hover" 
                  color="grey.300"
                  sx={{ 
                    '&:hover': { 
                      color: 'white',
                      textDecoration: 'none'
                    } 
                  }}
                >
                  {text}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'white' }} gutterBottom>
              Services
            </Typography>
            {['Tax Planning', 'Financial Reporting', 'Business Advisory', 'Investment Planning', 'Audit & Assurance'].map((text, index) => (
              <Box key={index} mb={1}>
                <Link 
                  href="#services" 
                  underline="hover" 
                  color="grey.300"
                  sx={{ 
                    '&:hover': { 
                      color: 'white',
                      textDecoration: 'none'
                    } 
                  }}
                >
                  {text}
                </Link>
              </Box>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: 'white' }} gutterBottom>
              Contact Us
            </Typography>
            <Box display="flex" alignItems="flex-start" mb={2}>
              <Phone size={16} style={{ marginRight: 8, color: 'white' }} />
              <Typography variant="body2" sx={{ color: 'grey.300' }}>+91 98765 43210</Typography>
            </Box>
            <Box display="flex" alignItems="flex-start" mb={2}>
              <Mail size={16} style={{ marginRight: 8, color: 'white' }} />
              <Typography variant="body2" sx={{ color: 'grey.300' }}>info@meghalshah.com</Typography>
            </Box>
            <Button
              href="#contact"
              variant="contained"
              sx={{ 
                backgroundColor: 'white',
                color: 'black',
                mt: 1, 
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'grey.200'
                }
              }}
            >
              Contact Now
            </Button>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 6, 
          borderColor: 'grey.800',
          borderWidth: '1px'
        }} />

        <Typography variant="body2" align="center" sx={{ color: 'grey.400' }}>
          &copy; {currentYear} CA Meghal Shah. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;