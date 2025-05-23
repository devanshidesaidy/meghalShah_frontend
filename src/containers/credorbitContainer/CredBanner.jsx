import { Grid, Typography, Box, useTheme } from "@mui/material";
import React from "react";
import { color } from "../../constant";
import { colors } from "../../components/Theme";

export default function   CredBanner() {
  const theme = useTheme();
  
  return (
    <Grid
      container
      sx={{
        background: `
          linear-gradient(135deg, ${color.bgblack}100 0%, #ffff 100%)
          no-repeat center / cover`,
        backgroundBlendMode: "multiply",
        height: { xs: "60vh", md: "85vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${color.greenFont}`,
        boxShadow: `0 10px 30px -10px ${color.greenFont}20`,
      }}
    >
      {/* Subtle grid overlay for tech aesthetic */}
      <Box sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `linear-gradient(rgba(66, 77, 71, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(66, 77, 71, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        opacity: 0.3,
      }} />

      {/* Main content with professional typography */}
      <Grid item xs={10} md={8} sx={{ 
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
      }}>
        <Typography
          variant="h1"
          sx={{
            color: 'transparent',
            background: `linear-gradient(120deg, #D4AF37)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            fontSize: { xs: "2.8rem", sm: "4rem", md: "5rem", lg: "6rem" },
            fontWeight: 800,
            letterSpacing: { xs: "1px", md: "2px" },
            lineHeight: 1.2,
            mb: 2,
            textTransform: 'uppercase',
            fontFamily: '"Helvetica Neue", sans-serif',
          }}
        >
          CREDORBIT
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.grey[300],
            fontSize: { xs: "1rem", md: "1.4rem" },
            fontWeight: 300,
            letterSpacing: "1px",
            maxWidth: "700px",
            mx: "auto",
            mb: 4,
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          Transforming ideas into scalable digital solutions
        </Typography>

        <Box sx={{
          height: '4px',
          width: '100px',
          background: `linear-gradient(90deg, ${color.greenFont}, transparent)`,
          mx: 'auto',
          mb: 4,
        }} />
      </Grid>

      {/* Scrolling tech elements (optional) */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 2,
        background: `linear-gradient(90deg, ${color.greenFont}20, ${color.greenFont}40, ${color.greenFont}20)`,
        display: 'flex',
        justifyContent: 'center',
        gap: { xs: 2, md: 4 },
        overflow: 'hidden',
      }}>
        
      </Box>
    </Grid>
  );
}