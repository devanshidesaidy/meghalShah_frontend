import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
const ContactForm = () => {
  return (
    <Grid
      size={{ xs: 12, md: 6 }}
      // className="contactBackground"
      sx={{
        py: 5,
        backgroundColor: color.bgblack,
        borderTop: "1px solid rgba(255, 255, 255, 0.45)",
      }}
    >
      <Container
        sx={{
          display: { sm: "flex" },
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Grid sx={{ width: "90%" }}>
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
          size={{ xs: 12, md: 6 }}
          item
          xs={12}
          md={6}
          sx={{
            padding: 2,
            borderRadius: 2,
            mt: { xs: 5, md: 0 },
          }}
        >
          <Grid container spacing={2}>
            <Grid>
              <TextField
                fullWidth
                label="Name"
                variant="filled"
                required
                InputProps={{
                  style: {
                    backgroundColor: "#333",
                    color: color.white,
                    marginTop: "2%",
                  },
                }}
                InputLabelProps={{
                  style: { color: color.white },
                }}
              />

              <TextField
                fullWidth
                label="Email"
                variant="filled"
                required
                InputProps={{
                  style: {
                    backgroundColor: "#333",
                    color: color.white,
                    marginTop: "2%",
                  },
                }}
                InputLabelProps={{
                  style: { color: color.white },
                }}
              />

              <TextField
                fullWidth
                label="Subject "
                required
                variant="filled"
                InputProps={{
                  style: {
                    backgroundColor: "#333",
                    color: color.white,
                    marginTop: "2%",
                  },
                }}
                InputLabelProps={{
                  style: { color: color.white },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                variant="filled"
                required
                multiline
                rows={4}
                InputProps={{
                  style: {
                    backgroundColor: "#333",
                    color: color.white,
                    marginTop: "2%",
                  },
                }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: color.greenFont,
                  color: color.white,
                  marginTop: "2%",
                  border: "2px solid transparent",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: color.greenFont,
                    border: `2px solid ${color.greenFont}`,
                  },
                }}
              >
                Contact me
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContactForm;
