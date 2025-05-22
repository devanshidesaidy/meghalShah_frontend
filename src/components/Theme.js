import { createTheme } from "@mui/material";

const colors = {
  primary: {
    main: '#1E5631', // Deep green
    light: '#2A7D45',
    dark: '#0F3A1C',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#D4AF37', // Gold
    light: '#E6C65C',
    dark: '#B39020',
    contrastText: '#000000',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F9F9F9',
    dark: '#121212',
    darkPaper: '#1E1E1E',
  },
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#FFFFFF',
  },
  success: {
    main: '#2E7D32',
  },
  error: {
    main: '#D32F2F',
  },
  warning: {
    main: '#ED6C02',
  },
  info: {
    main: '#0288D1',
  },
};

const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    success: {
      main: colors.success.main,
    },
    error: {
      main: colors.error.main,
    },
    warning: {
      main: colors.warning.main,
    },
    info: {
      main: colors.info.main,
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontWeight: 600,
        },
        containedPrimary: {
          boxShadow: '0px 4px 12px rgba(30, 86, 49, 0.2)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(30, 86, 49, 0.3)',
          },
        },
        containedSecondary: {
          boxShadow: '0px 4px 12px rgba(212, 175, 55, 0.2)',
          '&:hover': {
            boxShadow: '0px 6px 16px rgba(212, 175, 55, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

export default theme;

// Export colors for use in components
export { colors };