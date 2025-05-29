import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  Paper,
} from "@mui/material";
import {
  ArrowRight,
  Award,
  GraduationCap,
  PhoneCall,
  TrendingUp,
  Users,
} from "lucide-react";
import { colors } from "../../components/Theme";
import backgroundphoto from "../../assets/images/servicebg.png";
import { color } from "../../constant";
import img from "../../assets/images/04.png";
const Banner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const aboutInfo = {
    experience: "20+ years",
    clientsServed: "250+",
    successRate: "98%",
    certifications: "CA, CFA, MBA Finance",
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
       background: `linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.5)),url(${backgroundphoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 10, md: 0 },
      }}
      className="hero-background"
    >
      <Container maxWidth="xl" className="hero-content">
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{xs:12, md:7 }} className="slide-up">
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 2,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: "1px solid rgba(255, 255, 255, 0.1)",
                animation: 'fadeIn 1s ease-in',
              }}
            >
              <Typography
               
               
                sx={{
                  color: colors.text.light,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2,
                  fontFamily:"unset"
                }}
              >
                Meghal Shah
              </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    color: colors.secondary.main,
                    fontWeight: 600,
                    mb: 3,
                    lineHeight: 1.4,
                    fontFamily: "MiriamLibre-Regular",
                  }}
                >
                  Expert Financial Strategist
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {[
                    "Strategic Financial Solutions",
                    "Sustainable Business Growth",
                    "Tax Advisory & Financial Planning",
                  ].map((text, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        color: colors.text.light,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        mb: 1,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          display: "inline-block",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: colors.secondary.main,
                          mr: 2,
                        }}
                      />
                      {text}
                    </Typography>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    mt: 4,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    href="#contact"
                    sx={{
                      borderColor: colors.secondary.main,
                      color: colors.secondary.main,
                      fontSize: "1rem",
                      fontWeight: 600,
                      fontFamily: "Palanquin-Regular",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.secondary.light,
                        color: colors.secondary.light,
                        transform: "translateY(-3px)",
                        backgroundColor: "rgba(212, 175, 55, 0.05)",
                      },
                    }}
                    startIcon={<PhoneCall size={20} />}
                  >
                    Book Consultation
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Image Section */}
            <Grid item size={{ xs: 12, md: 6 }}>
              <img
                src={img}
                alt=""
                style={{
                  width: "100%",
                  height: "70%",
                  borderBottom: "2px solid white",
                  // borderRight: "1px solid white",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* White Section - 30vh */}
      <Box sx={{ backgroundColor: "#fff", minHeight: "30vh" }}>
        <Container>
          <Grid container justifyContent="center" sx={{ pt: 5 }}>
            <Grid
              item
              size={{ xs: 12 }}
              sx={{
                backgroundColor: color.greenFont,

                p: 2,
                borderRadius: 3,
                marginTop: "-150px",
              }}
            >
              <Grid container spacing={2} sx={{ mt: 2 }}>
                {[
                  {
                    icon: <Award size={32} color={colors.black} />,
                    label: "Experience",
                    value: aboutInfo.experience,
                  },
                  {
                    icon: <Users size={32} color={colors.black} />,
                    label: "Clients",
                    value: aboutInfo.clientsServed,
                  },
                  {
                    icon: <TrendingUp size={32} color={colors.black} />,
                    label: "Success Rate",
                    value: aboutInfo.successRate,
                  },
                  {
                    icon: <GraduationCap size={32} color={colors.black} />,
                    label: "Certifications",
                    value: aboutInfo.certifications,
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    size={{ xs: 6, md: 3 }}
                    sx={{
                      border: "1px solid black",
                      borderRadius: 5,
                    }}
                    key={index}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        height: "125px",
                        backgroundColor: "transparent",
                        border: `1px solid ${colors.dark}`,
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.07)",
                          borderColor: colors.black,
                        },
                      }}
                    >
                      {item.icon}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontFamily: "Palanquin-Regular",
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontFamily: "Palanquin-Regular" }}
                      >
                        {item.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
