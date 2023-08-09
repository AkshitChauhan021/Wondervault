// This is NavBar
import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
import Image from "next/image";
import logo from "../assets/logo.png"
import SearchBar from "../components/SearchBar"

export function Navbar() {
    const address = useAddress();

    return (
        <Box bg="black" py={4}>
            <Box maxW="1200px" m="auto">
                <Flex justifyContent="space-between" alignItems="center">
                    <Link as={NextLink} href="/">
                        <Flex alignItems="center">
                            <Image src={logo} alt="WonderVault" height={150} width={150} />
                        </Flex>
                    </Link>
                    <Flex direction="row" justifyContent="space-between" alignItems="center" ml="auto" mr="4">
                        <Box mr={2}>
                            <SearchBar />
                        </Box>
                        <Link as={NextLink} href="/buy" mx={2.5} color="white" _hover={{ color: "gray.300" }} fontWeight="500">
                            Collections
                        </Link>
                        <Link as={NextLink} href="/buy" mx={2.5} color="white" _hover={{ color: "gray.300" }} fontWeight="500">
                            Buy
                        </Link>
                        <Link as={NextLink} href="/sell" mx={2.5} color="white" _hover={{ color: "gray.300" }} fontWeight="500">
                            Sell
                        </Link>
                    </Flex>
                    <Flex dir="row" alignItems="center">
                        <ConnectWallet />
                        {address && (
                            <Link as={NextLink} href={`/profile/${address}`}>
                                <Avatar src="https://bit.ly/broken-link" ml={4} />
                            </Link>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
};
