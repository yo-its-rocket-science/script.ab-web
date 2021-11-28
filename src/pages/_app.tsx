import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import "tailwindcss/tailwind.css";
import { QueryClientProvider, QueryClient } from "react-query";
import "../pages/navbarstyle.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
