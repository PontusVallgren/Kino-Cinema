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
        <div>
          <NavbarKino />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
        <div>
          <FooterKino />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
