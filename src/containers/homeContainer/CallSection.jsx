import { Button, Container, Divider, Grid, Stack } from "@mui/material";
import React from "react";
import { color, path } from "../../constant";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import { useNavigate } from "react-router-dom";
export default function CallSection() {
  const navigate = useNavigate()
  return (
    <Grid
      sx={{
        backgroundColor: color.pureblack,
        color: color.white,
        pt: "10%",
        pb: "5%",
      }}
    >
      <Container>
        <Grid
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid
            sx={{
              fontSize: { xs: "0.9rem", md: "1.5rem", lg: "1.7rem" },
              fontWeight: "bold",
              my: { xs: 3, md: 0 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            " Get Started with Expert Financial Advisory "
          </Grid>
          <Divider
            sx={{
              bgcolor: color.greenFont,
              borderWidth: "2px",
              borderRadius: "10px",
              mx: "2%",
            }}
          />
          <Grid
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem", lg: "1.4rem" },
              my: { xs: 3, md: 0 },
              textAlign: "center",
            }}
          >
            Schedule a consultation with{" "}
            <Stack
              sx={{
                color: color.greenFont,
                fontWeight: "bold",
                display: "inline",
              }}
            >
              CA Meghal Shah{" "}
            </Stack>{" "}
            today and take your business to the next level.
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }}>
            <Button
            onClick={()=>navigate(path.contact)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: { xs: "none", md: "50%" },
                backgroundColor: color.greenFont,
                color: color.white,
                fontWeight: "bold",
                width: { xs: "30%", md: "auto" },
                transition:"0.7s",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid #ffffff",
                },
                ml:{xs:0,md:3}
              }}
            >
              <PermPhoneMsgIcon sx={{ fontSize: 40 }} />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
