import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Heading, Flex } from "@chakra-ui/react";
import { auth } from "../pages/firebase"; // Import the auth object from your firebase.js file
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Signin = () => {
  // State variable to track if the user wants to sign in or sign up
  const [isSigningUp, setIsSigningUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignin = async () => {
    try {
      setError(null); // Clear any previous error
      await auth.signInWithEmailAndPassword(email, password);
      // User is now signed in
    } catch (error) {
      console.error("Error signing in:", error.message);
      setError(error.message); // Set the error message in the state
    }
  };

  const handleSignup = async () => {
    try {
      setError(null); // Clear any previous error
      await auth.createUserWithEmailAndPassword(email, password);
      // New user is now signed up
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message); // Set the error message in the state
    }
  };

  const handleGoogleSignin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      // Handle successful Google sign-in here
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(error.message); // Set the error message in the state
    }
  };

  const handleFacebookSignin = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      // Handle successful Facebook sign-in here
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
      setError(error.message); // Set the error message in the state
    }
  };

  // const handleTwitterSignin = async () => {
  //   const provider = new firebase.auth.TwitterAuthProvider();
  //   try {
  //     await auth.signInWithPopup(provider);
  //     // Handle successful Twitter sign-in here
  //   } catch (error) {
  //     console.error("Error signing in with Twitter:", error);
  //     setError(error.message); // Set the error message in the state
  //   }
  // };

  return (
    <Box p={4} width="400px" borderWidth={1} borderRadius={8} borderColor="gray.200">
      <VStack spacing={4} align="stretch">
        {isSigningUp ? <Heading textAlign="center" mb={6} >Sign Up</Heading> : <Heading textAlign="center" mb={6} >Sign In</Heading>}
        <FormControl id="email">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </FormControl>
        {isSigningUp ? (
          <>
            <Button colorScheme="green" size="lg" onClick={handleSignup} borderRadius="full">
              Sign Up
            </Button>
            <Text onClick={() => setIsSigningUp(false)} cursor="pointer" textAlign="center" mt={2} fontSize="sm" fontWeight="500">
              Already have an account? Sign in
            </Text>
          </>
        ) : (
          <>
            <Button colorScheme="blue" size="lg" onClick={handleSignin} borderRadius="full">
              Sign In
            </Button>
            <Text onClick={() => setIsSigningUp(true)} cursor="pointer" textAlign="center" mt={2} fontSize="sm" fontWeight="500">
              Don`&apos`t have an account? Sign up
            </Text>
          </>
        )}
        <Text textAlign="center" mt={2} fontSize="sm" fontWeight="bold">
          - OR -
        </Text>
        <Flex justify="center">
          <Button
            colorScheme="red"
            size="md"
            onClick={handleGoogleSignin}
            leftIcon={<FaGoogle size={20} />}
            borderRadius="full"
          >
            Google
          </Button>
          <Button
            colorScheme="blue"
            size="md"
            onClick={handleFacebookSignin}
            leftIcon={<FaFacebook size={20} />}
            borderRadius="full"
            ml={2}
          >
            Facebook
          </Button>
        
        </Flex>
        {error && <Box color="red">{error}</Box>} {/* Display the error message */}
      </VStack>
    </Box>

  );
};

export default Signin;
