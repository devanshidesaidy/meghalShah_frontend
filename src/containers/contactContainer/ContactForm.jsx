// import { Button, Container, Grid, TextField, Typography } from "@mui/material";
// import React from "react";
// import { useState } from "react";
// import { color } from "../../constant";
// import contactimg from "../../assets/images/contact.jpg";
// import { useAddContact } from "../../utils/ApiHelper";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";
// const ContactForm = () => {
//   const { mutate, isLoading } = useAddContact();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.name) newErrors.name = "Name is required";

//     if (!form.email) {
//       newErrors.email = "Email is required";
//     } else {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(form.email)) {
//         newErrors.email = "Enter a valid email address";
//       }
//     }

//     if (!form.subject) newErrors.subject = "Subject is required";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     mutate(form, {
//       onSuccess: () => {
//         toast.success("Your message sent Successfully!");
//         setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
//       },
//       onError: (error) => {
//         toast.error(error?.response?.data?.message);
//       },
//     });
//   };
//   return (
//     <>
//       <ToastContainer />
//       <Grid
//         size={{ xs: 12, md: 6 }}
//         // className="contactBackground"
//         sx={{
//           py: { xs: "3%", md: "8%" },
//           // backgroundColor: color.bgblack,
//           background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactimg})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "bottom",
//           zIndex: -1,
//           width: "100%",
//         }}
//       >
//         <Container
//           sx={{
//             padding: 2,
//             borderRadius: 2,
//           }}
//         >
//           <Grid container justifyContent={"space-between"}>
//             <Grid size={{ xs: 12, md: 5.8 }} sx={{ height: "500px" }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.0983526103512!2d72.50646223784848!3d23.00932307663021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e0476f7%3A0x96e3d49fa6c53c37!2sSafal%20Profitaire!5e0!3m2!1sen!2sin!4v1746523785055!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               />
//             </Grid>
//             <Grid
//               size={{ xs: 12, md: 5.8 }}
//               item
//               xs={12}
//               md={6}
//               sx={{
//                 // padding: 2,
//                 borderRadius: 2,
//                 mt: { xs: 5, md: 0 },
//               }}
//             >
//               {/* <Grid container>
//                 <form onSubmit={handleSubmit}>
//                   <TextField
//                     fullWidth
//                     label="Name"
//                     name="name"
//                     variant="filled"
//                     value={form.name}
//                     onChange={handleChange}
//                     error={!!errors.name}
//                     helperText={errors.name}
//                     InputProps={{
//                       style: { backgroundColor: "#333", color: color.white },
//                     }}
//                     InputLabelProps={{ style: { color: color.white } }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Email"
//                     name="email"
//                     variant="filled"
//                     sx={{ mt: 3 }}
//                     value={form.email}
//                     onChange={handleChange}
//                     error={!!errors.email}
//                     helperText={errors.email}
//                     InputProps={{
//                       style: { backgroundColor: "#333", color: color.white },
//                     }}
//                     InputLabelProps={{ style: { color: color.white } }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Subject"
//                     name="subject"
//                     variant="filled"
//                     sx={{ mt: 3 }}
//                     value={form.subject}
//                     onChange={handleChange}
//                     error={!!errors.subject}
//                     helperText={errors.subject}
//                     InputProps={{
//                       style: { backgroundColor: "#333", color: color.white },
//                     }}
//                     InputLabelProps={{ style: { color: color.white } }}
//                   />

//                   <TextField
//                     fullWidth
//                     label="Message"
//                     name="message"
//                     variant="filled"
//                     sx={{ mt: 3 }}
//                     multiline
//                     rows={4}
//                     value={form.message}
//                     onChange={handleChange}
//                     InputProps={{
//                       style: { backgroundColor: "#333", color: color.white },
//                     }}
//                     InputLabelProps={{ style: { color: "#fff" } }}
//                   />

//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       backgroundColor: color.greenFont,
//                       color: color.white,
//                       marginTop: "3%",
//                       border: `1px solid ${color.greenFont}`,
//                       fontFamily: "JosefinSans",
//                       "&:hover": { backgroundColor: "transparent" },
//                     }}
//                   >
//                     Contact me
//                   </Button>
//                 </form>
//               </Grid> */}
//             </Grid>
//           </Grid>
//         </Container>
//       </Grid>
//     </>
//   );
// };

// export default ContactForm;



import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { colors } from '../../components/Theme';


const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setOpen(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: colors.background.default,
      }}
      className="section-padding"
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }} className="fade-in">
          <Typography
            variant="h6"
            sx={{
              color: colors.primary.main,
              fontWeight: 600,
              mb: 2,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: colors.text.primary,
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3rem' },
            }}
          >
            Contact Me
          </Typography>

          <Box
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: colors.primary.main,
              margin: '0 auto',
              mb: 3,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              color: colors.text.secondary,
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}
          >
            Have questions or ready to discuss your financial needs? Reach out today.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Box className="slide-up">
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  color: colors.text.primary,
                }}
              >
                Contact Information
              </Typography>

              <Box sx={{ mb: 5 }}>
                {/* Phone */}
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.primary.main,
                      p: 1.5,
                      borderRadius: '50%',
                      mr: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Phone size={24} color={colors.text.light} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Phone
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.text.secondary }}>
                      +91 98765 43210
                    </Typography>
                  </Box>
                </Paper>
 {/* Email */}
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    mb: 3,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.primary.main,
                      p: 1.5,
                      borderRadius: '50%',
                      mr: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Mail size={24} color={colors.text.light} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.text.secondary }}>
                      contact@meghalshah.com
                    </Typography>
                  </Box>
                </Paper>

                {/* Office */}
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: colors.primary.main,
                      p: 1.5,
                      borderRadius: '50%',
                      mr: 3,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <MapPin size={24} color={colors.text.light} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Office
                    </Typography>
                    <Typography variant="body1" sx={{ color: colors.text.secondary }}>
                      123 Financial District, Mumbai, Maharashtra, India
                    </Typography>
                  </Box>
                </Paper>
              </Box>

              {/* Office Hours */}
              <Box sx={{ mt: 6, display: { xs: 'none', md: 'block' } }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Office Hours
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Monday - Friday:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">9:30 AM - 6:30 PM</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Saturday:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">10:00 AM - 4:00 PM</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Sunday:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">Closed</Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          {/* Message Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
              }}
              className="scale-in"
            >
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 4, color: colors.text.primary }}>
                Send a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: colors.primary.light },
                          '&.Mui-focused fieldset': { borderColor: colors.primary.main },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      type="email"
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: colors.primary.light },
                          '&.Mui-focused fieldset': { borderColor: colors.primary.main },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: colors.primary.light },
                          '&.Mui-focused fieldset': { borderColor: colors.primary.main },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': { borderColor: colors.primary.light },
                          '&.Mui-focused fieldset': { borderColor: colors.primary.main },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      startIcon={<Send size={20} />}
                      sx={{
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
