import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#3399CC',
    },
    secondary: {
      main: '#F4A460',
    },
    error: {
      main: red.A400,
    },
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default muiTheme;
