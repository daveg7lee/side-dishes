import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
