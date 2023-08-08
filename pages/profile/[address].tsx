import { Container, Heading, Text, Box, Button } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { useEffect, useState } from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";
import firebase from "firebase/app";
import { auth } from '../firebase'
import { useDisconnect } from "@thirdweb-dev/react";
import { ethers } from "ethers";

// Function to get the user's wallet balance from the blockchain
const getWalletBalance = async (walletAddress) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const balance = await provider.getBalance(walletAddress);
  return ethers.utils.formatEther(balance);
};

export default function ProfilePage() {
  const router = useRouter();
  const disconnect = useDisconnect();
  const currencyName = "MATIC";
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");
  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );

  const [walletBalance, setWalletBalance] = useState("");

  useEffect(() => {
    // Fetch the user's wallet balance on component mount
    const fetchWalletBalance = async () => {
      const address = router.query.address as string;
      const balance = await getWalletBalance(address);
      setWalletBalance(balance);
    };
    fetchWalletBalance();
  }, [router.query.address]);

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        disconnect();
        // Redirect to the homepage after successful sign-out
        router.push("/");
      })
      .catch((error) => {
        console.log("Error signing out:", error);
      });
  };

  return (
    <Container maxW={"1200px"} p={5}>
      <Box
        p={5}
        borderRadius="md"
        boxShadow="md"
        bgGradient="linear(to-t, gray.400, gray.200)"
      >
        <Heading>{"Profile Information"}</Heading>
        <Text mt={2}>
          <strong>Email:</strong> {auth.currentUser?.email}
        </Text>
        <Text>
          <strong>Username:</strong> {auth.currentUser?.email.split("@")[0]}
        </Text>
        <Text>
          <strong>Wallet Address:</strong> {router.query.address}
        </Text>
        <Text>
          <strong>Wallet Balance:</strong> {walletBalance} {currencyName}
        </Text>
        {/* Add other profile information here as needed */}
        <Button onClick={handleSignOut} mt={4}>Sign Out</Button>
      </Box>
      <Box mt={5}>
        <Heading>{"Owned NFT(s)"}</Heading>
        <Text mt={2}>Browse and manage your NFTs from this collection.</Text>
        <NFTGrid
          data={ownedNfts}
          isLoading={loadingOwnedNfts}
          emptyText={"You don't own any NFTs yet from this collection."}
        />
      </Box>
    </Container>
  );
}
