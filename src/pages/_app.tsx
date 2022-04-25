import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import NavbarKino from "../components/NavbarKino";
import { theme } from "../../styles/theme";
import "../../styles/globals.css";
import FooterKino from "../components/FooterKino";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarKino />
        <Component {...pageProps} />
        <FooterKino />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
