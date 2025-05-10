import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import contactimg from "../../assets/images/contact.jpg";
const ContactForm = () => {
  return (
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
                  sx={{ mt: 3 }}
                  InputProps={{
                    style: {
                      backgroundColor: "#333",
                      color: color.white,
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
                  sx={{ mt: 3 }}
                  variant="filled"
                  InputProps={{
                    style: {
                      backgroundColor: "#333",
                      color: color.white,
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
                  sx={{ mt: 3 }}
                  multiline
                  rows={4}
                  InputProps={{
                    style: {
                      backgroundColor: "#333",
                      color: color.white,
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
                    marginTop: "3%",
                    border: `1px solid ${color.greenFont}`,
                    fontFamily: "JosefinSans",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContactForm;
