import { createTheme } from "@mui/material/styles";
import { blue, red, green } from "@mui/material/colors";

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
  },
});
