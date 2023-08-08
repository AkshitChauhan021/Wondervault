import React, { useEffect, useState } from "react";
import Homepage from "../components/Homepage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { auth } from "./firebase";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Box bg="#f8f8f8">
        <Flex justifyContent="center" alignItems="center" h="calc(100vh - 64px)">
          {isAuthenticated ? <Homepage /> : <SignIn />}
        </Flex>
      </Box>
    </>
  );
};

export default Home;
