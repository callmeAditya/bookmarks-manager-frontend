
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#87d0c0',
      main: '#0c5519ff',
      dark: '#0c5519ff',
      contrastText: '#fff',
    },
   
    mode: 'light'
  },
});


export const GlobalStyle = {
    theme,

};