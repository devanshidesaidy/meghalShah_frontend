import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import advisor from "../../assets/svg/advisor.svg";
import funding from "../../assets/svg/funding.svg";
import loan from "../../assets/svg/loan.svg";
import tax from "../../assets/svg/tax.svg";
import servicebg from "../../assets/images/service.png";
export default function Service() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid
        // className="servicebg"
        sx={{
          py: { xs: 5, md: 5 },
          background: {
            xs: color.pureblack,
            lg: ` url(${servicebg})`,
          },
          // backgroundColor:color.pureblack,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          width: "100%",
        }}
      >
        <Grid container m={"5%"}>
          <Grid
            container
            size={{ xs: 12, md: 7 }}
            sx={{
              mx: "2%",
              gap: { md: "2rem", lg: "3rem" },
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem", lg: "4rem" },
                color: color.greenFont,
                py: "5%",
                px: 3,
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "JosefinSans",
                ml: { xs: 0, md: "15%", lg: "25%" },
              }}
            >
              Services I Offer
            </Grid>
            <Grid size={{ xs: 12, lg: 5.5 }}>
              <Grid
                sx={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <Grid
                  sx={{
                    height: "100px",
                    width: { xs: "120px", sm: "80px", md: "90px", lg: "150px" },
                  }}
                >
                  <img
                    src={advisor}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      color: color.white,
                      fontWeight: 600,
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      fontFamily: "MiriamLibre-Regular",
                    }}
                  >
                    Corporate Finance & Advisory
                  </Typography>
                  <Typography
                    sx={{
                      color: color.white,
                      fontSize: "1.2rem",
                      mt: 1,
                      fontFamily: "Palanquin",
                    }}
                  >
                    Strategic finance planning and project financing to ensure
                    sustainable growth.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  gap: "1rem",
                  mt: { xs: "1rem", md: "2rem", lg: "5rem" },
                }}
              >
                <Grid
                  sx={{
                    height: "80px",
                    width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
                  }}
                >
                  <img src={loan} style={{ height: "100%", width: "100%" }} />
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      color: color.white,
                      fontWeight: 600,
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      fontFamily: "MiriamLibre-Regular",
                    }}
                  >
                    MSME Loans
                  </Typography>
                  <Typography
                    sx={{
                      color: color.white,
                      fontSize: "1.2rem",
                      mt: 1,
                      fontFamily: "Palanquin",
                    }}
                  >
                    Access to loans with minimal hassle, tailored to your needs.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, lg: 5.5 }}>
              <Grid
                sx={{
                  display: "flex",
                  gap: "1rem",
                  mt: { xs: "1rem", lg: "none" },
                }}
              >
                <Grid
                  sx={{
                    height: "100px",
                    width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
                  }}
                >
                  <img
                    src={funding}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      color: color.white,
                      fontWeight: 600,
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      lineHeight: "1.7rem",
                      fontFamily: "MiriamLibre-Regular",
                    }}
                  >
                    Startup Funding & Angel Investment
                  </Typography>
                  <Typography
                    sx={{
                      color: color.white,
                      fontSize: "1.2rem",
                      mt: 2,
                      fontFamily: "Palanquin",
                    }}
                  >
                    Helping startups secure funding and scale effectively.
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  mt: { xs: "1rem", md: "2rem", lg: "5rem" },
                  gap: "1rem",
                  // alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    height: "100px",
                    width: { xs: "100px", sm: "80px", md: "90px", lg: "120px" },
                  }}
                >
                  <img src={tax} style={{ height: "100%", width: "100%" }} />
                </Grid>
                <Grid>
                  <Typography
                    sx={{
                      color: color.white,
                      fontWeight: 600,
                      fontSize: { xs: "1.3rem", md: "1.6rem" },
                      lineHeight: "1.8rem",
                      fontFamily: "MiriamLibre-Regular",
                    }}
                  >
                    Tax Advisory & Financial Structuring
                  </Typography>
                  <Typography
                    sx={{
                      color: color.white,
                      fontSize: "1.2rem",
                      mt: 2,
                      fontFamily: "Palanquin",
                    }}
                  >
                    Optimize your taxes and financial setup for efficiency.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 4.5 }} sx={{ mt: { xs: 5, md: 0 } }}>
            <Grid>
              {/* <img
                src={servicebg}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
