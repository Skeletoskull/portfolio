import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D8FF', // Bright cyan
      light: '#5EEAFF',
      dark: '#00A6CC',
    },
    secondary: {
      main: '#FF3366', // Hot pink
      light: '#FF6B93',
      dark: '#CC0033',
    },
    background: {
      default: '#0A192F', // Dark navy
      paper: '#112240', // Lighter navy
    },
    text: {
      primary: '#E6F1FF',
      secondary: '#8892B0',
    },
    success: {
      main: '#64FFDA', // Mint
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '4rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #00D8FF, #FF3366)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#E6F1FF',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#8892B0',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
      color: '#8892B0',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0A192F',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#112240',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#233554',
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#364872',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '10px 25px',
          fontSize: '1rem',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #00D8FF, #FF3366)',
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out',
          },
          '&:hover': {
            transform: 'translateY(-2px)',
            '&::before': {
              opacity: 1,
            },
          },
        },
        outlined: {
          borderColor: '#00D8FF',
          color: '#00D8FF',
          '&:hover': {
            borderColor: '#00D8FF',
            background: 'rgba(0, 216, 255, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            borderColor: '#00D8FF',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 216, 255, 0.1)',
          color: '#00D8FF',
          border: '1px solid rgba(0, 216, 255, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(0, 216, 255, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 25, 47, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
      },
    },
  },
}); 