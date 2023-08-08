import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { auth } from "./firebase"; // Import the auth object from your firebase.js file

const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Set up a Firebase auth state listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Here you can handle user authentication state changes, e.g., redirect to different pages
    });

    // Unsubscribe from the auth state listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
      <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
