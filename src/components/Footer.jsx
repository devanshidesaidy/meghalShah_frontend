import { Container, Divider, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { color } from "../constant";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
  return (
    <Grid sx={{ backgroundColor: color.mateblack, color: color.white, pb: 3 }}>
      <Grid
        sx={{
          color: color.white,
          height: "150px",
          display: "flex",
          justifyContent: "center",
          pt: { xs: 3, md: 8 },
        }}
      >
        <Grid sx={{ width: { xs: "100%", lg: "87%" }, px: 5 }}>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "1rem", md: "none" },
            }}
          >
            <Grid
              sx={{
                fontFamily: "MiriamLibre-Regular",
                letterSpacing: "0.1rem",
                display: "flex",
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "center",
                textAlign: "center",
                width: { xs: "100%", md: "30%" },
              }}
            >
              <LocationOnIcon sx={{ mr: { xs: 0, md: 1 } }} />
              A-5 Fifth Floor, Safal Profitire, Prahladnagar
            </Grid>
            <Grid
              sx={{
                fontFamily: "MiriamLibre-Regular",
                letterSpacing: "0.1rem",
              }}
            >
              +91 1234567890
            </Grid>
            <Grid
              sx={{
                fontFamily: "MiriamLibre-Regular",
                letterSpacing: "0.1rem",
              }}
            >
              meghlshah@gmail.com
            </Grid>
            <Grid container spacing={2}>
              <Grid item>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon sx={{ fontSize: 28, color: "white" }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.instagram.com/meghalshahofficial?igsh=MTd1MXI5ZWVlYmYw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon sx={{ fontSize: 28, color: "white" }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <YouTubeIcon sx={{ fontSize: 28, color: "white" }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon sx={{ fontSize: 28, color: "white" }} />
                </a>
              </Grid>
              <Grid item>
                <a
                  href="https://www.linkedin.com/in/ca-meghal-shah-finance-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon sx={{ fontSize: 28, color: "white" }} />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            sx={{
              bgcolor: color.white,
              mt: 3,
              display: { xs: "none", md: "block" },
            }}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "MiriamLibre-Regular",
          letterSpacing: "0.1rem",
          pt: { xs: 8, md: 3 },
        }}
      >
        &#169; 2025 Meghal Shah.
      </Typography>
    </Grid>
  );
}
