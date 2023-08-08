import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { auth } from "../pages/firebase"; // Import the auth object from your firebase.js file

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // New user is now signed up
    } catch (error) {
      alert(error.message);
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button colorScheme="green" onClick={handleSignup}>
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;
