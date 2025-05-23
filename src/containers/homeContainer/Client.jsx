import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../../components/Theme';
import { testimonials } from '../../constant';

const Client = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.down('md'));
  const isMd = useMediaQuery(theme.breakpoints.down('lg'));

  // Responsive items per slide
  const itemsPerPage = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ py: 10, backgroundColor: colors.background.paper }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 'bold',
            color: colors.primary.main,
          }}
        >
          Client Testimonials
        </Typography>

        {/* Slider Wrapper */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          {/* Navigation */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: colors.background.default,
              '&:hover': {
                backgroundColor: colors.primary.main,
                color: '#fff',
              },
            }}
          >
            <ChevronLeft />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: colors.background.default,
              '&:hover': {
                backgroundColor: colors.primary.main,
                color: '#fff',
              },
            }}
          >
            <ChevronRight />
          </IconButton>

          {/* Sliding Content */}
          <Box
            sx={{
              display: 'flex',
              width: `${100 * totalSlides}%`,
              transform: `translateX(-${(100 / totalSlides) * currentSlide}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <Box
                key={slideIndex}
                sx={{
                  display: 'flex',
                  flex: `0 0 ${100 / totalSlides}%`,
                  gap: 2,
                  px: 1,
                }}
              >
                {testimonials
                  .slice(
                    slideIndex * itemsPerPage,
                    slideIndex * itemsPerPage + itemsPerPage
                  )
                  .map((testimonial, idx) => (
                    <Paper
                      key={idx}
                      elevation={3}
                      sx={{
                        flex: 1,
                        p: 3,
                        borderRadius: 3,
                        textAlign: 'center',
                        minWidth: 0,
                      }}
                    >
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 70,
                          height: 70,
                          mx: 'auto',
                          mb: 2,
                          border: `2px solid ${colors.primary.main}`,
                        }}
                      />
                      <Typography variant="h6" fontWeight={600}>
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 1, color: colors.text.secondary }}
                      >
                        {testimonial.company}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontStyle: 'italic', color: colors.text.primary }}
                      >
                        “{testimonial.quote}”
                      </Typography>
                    </Paper>
                  ))}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Dots */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor:
                  index === currentSlide
                    ? colors.primary.main
                    : colors.primary.light,
                opacity: index === currentSlide ? 1 : 0.5,
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Client;
