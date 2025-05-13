import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { color } from "../../constant";
import contactimg from "../../assets/images/contact.jpg";
import { useAddContact } from "../../utils/ApiHelper";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const ContactForm = () => {
  const { mutate, isLoading } = useAddContact();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";

    if (!form.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(form.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (!form.subject) newErrors.subject = "Subject is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    mutate(form, {
      onSuccess: () => {
        toast.success("Your message sent Successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });
  };
  return (
    <>
      <ToastContainer />
      <Grid
        size={{ xs: 12, md: 6 }}
        // className="contactBackground"
        sx={{
          py: { xs: "3%", md: "8%" },
          // backgroundColor: color.bgblack,
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          zIndex: -1,
          width: "100%",
        }}
      >
        <Container
          sx={{
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Grid container justifyContent={"space-between"}>
            <Grid size={{ xs: 12, md: 5.8 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.0983526103512!2d72.50646223784848!3d23.00932307663021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b278e0476f7%3A0x96e3d49fa6c53c37!2sSafal%20Profitaire!5e0!3m2!1sen!2sin!4v1746523785055!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Grid>
            <Grid
              size={{ xs: 12, md: 5.8 }}
              item
              xs={12}
              md={6}
              sx={{
                // padding: 2,
                borderRadius: 2,
                mt: { xs: 5, md: 0 },
              }}
            >
              <Grid container>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="filled"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    InputProps={{
                      style: { backgroundColor: "#333", color: color.white },
                    }}
                    InputLabelProps={{ style: { color: color.white } }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="filled"
                    sx={{ mt: 3 }}
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    InputProps={{
                      style: { backgroundColor: "#333", color: color.white },
                    }}
                    InputLabelProps={{ style: { color: color.white } }}
                  />

                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    variant="filled"
                    sx={{ mt: 3 }}
                    value={form.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    InputProps={{
                      style: { backgroundColor: "#333", color: color.white },
                    }}
                    InputLabelProps={{ style: { color: color.white } }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="filled"
                    sx={{ mt: 3 }}
                    multiline
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    InputProps={{
                      style: { backgroundColor: "#333", color: color.white },
                    }}
                    InputLabelProps={{ style: { color: "#fff" } }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: color.greenFont,
                      color: color.white,
                      marginTop: "3%",
                      border: `1px solid ${color.greenFont}`,
                      fontFamily: "JosefinSans",
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    Contact me
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ContactForm;
