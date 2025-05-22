// import { Container, Grid, Typography } from "@mui/material";
// import React from "react";
// import { color } from "../../constant";
// import LanguageIcon from "@mui/icons-material/Language";

// export default function Tagline() {
//   return (
//     <Grid sx={{ backgroundColor: color.greenFont }}>
//       <Container sx={{ py: "5%" }}>
//         <Typography
//           sx={{
//             color: color.white,
//             fontSize: { xs: "1.4rem", md: "2.5rem" },
//             // fontWeight: "bold",
//             fontFamily: "MiriamLibre-Regular",
//             textAlign:{xs:"center",md:"left"}
//           }}
//         >
//           " Together, We Transform Financial Visions into Reality. "
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: { xs: "1.2rem", md: "2rem" },
//             color: color.white,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "1rem",

//           }}
//         >
//           Visit :
//           <a
//             style={{
//               fontSize: "25px",
//               display: "flex",
//               alignItems: "center",
//               gap: "0.4rem",
//               color:color.white,
//                cursor:"pointer"
//             }}
//             href="https://www.msaca.co.in"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <LanguageIcon /> www.msaca.co.in
//           </a>
//         </Typography>
//       </Container>
//     </Grid>
//   );
// }
import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";
import { Globe } from "lucide-react";
import { color } from "../../constant";

const Tagline = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 16,
        position: "relative",
        overflow: "hidden",
        bgcolor: color.white,
        color: color.black,
      }}
    >
      {/* Abstract background elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          color: color.black,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: 256,
            height: 256,
            color: color.black,
            borderRadius: "50%",
            filter: "blur(48px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: "25%",
            width: 256,
            height: 256,
            bgcolor: "#fff",
            borderRadius: "50%",
            filter: "blur(48px)",
          }}
        />
      </Box>

      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Box maxWidth="md" mx="auto" textAlign="center">
          <Typography
            variant="h4"
            component="blockquote"
            color="common.white"
            fontStyle="italic"
            fontWeight={300}
            sx={{
              mb: 6,
              lineHeight: 1.6,
               color:color.greenFont
            }}
          >
            "Together, We Transform Financial Visions into Reality."
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={2}
            color="common.white"
          >
            <Typography variant="h6" color="black">Visit:</Typography>
            <Link
              href="https://www.msaca.co.in"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              
              color="black"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                transition: "color 0.3s",
                "&:hover": {
                  color: color.greenFont,
                },
              }}
            >
              <Globe size={20} />
              www.msaca.co.in
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Tagline;
