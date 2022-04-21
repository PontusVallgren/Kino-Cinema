import { createTheme } from "@mui/material/styles";
import { blue, red, green, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: green.A700,
    },
    error: {
      main: red[600],
    },
    info: {
      main: blueGrey[800],
    },
  },
});
