import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5bba47',
    },
    secondary: {
      main: '#00c0f3',
    },
    error: {
      main: '#DB3A34',
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    body1: {},
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiTextFieldBase: {},
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 14,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
