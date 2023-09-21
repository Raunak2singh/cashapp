import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#00D54B', 
    },
    secondary: {
      main: '#00D54B', 
    },
  },
  typography: {
    fontFamily: ['Agrandir', 'Mulish', 'sans-serif'],
    button :{
      fontFamily:'Agrandir'
    }
  },
  spacing: 8, 
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },


});

export default theme;
