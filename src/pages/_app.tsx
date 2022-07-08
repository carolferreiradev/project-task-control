import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global";
import { ThemeProvider } from "@/context/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
