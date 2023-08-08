import { Box, Button, Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import NextLink from 'next/link';

const Homepage = () => {
  return (
    <Box position="relative" h="calc(100vh - 64px)" bg="#f8f8f8" overflow="hidden">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')"
        backgroundSize="cover"
        backgroundPosition="center"
        opacity={0.8}
        filter="blur(10px)"
        
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)" // Black transparent filter
      />
      <Flex
        position="relative"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        height="100%"
        zIndex={1} // Ensure the content is above the background
      >
        <Box width="50%">
          <Heading
            fontSize="46px"
            fontWeight="semibold"
            color="white"
            className="relative"
          >
            Discover, collect, and sell extraordinary NFTs
          </Heading>
          <Text
            fontSize="2xl"
            color="#8a939b"
            maxWidth="400px"
            mt="0.8rem"
            mb="2.5rem"
          >
            OpenSea is the world`&apos`s first and largest NFT marketplace
          </Text>
          <Flex>
            <Link as={NextLink} href="/buy">
              <Button
                color="white"
                fontSize="lg"
                fontWeight="semibold"
                px="12"
                py="7"
                bg="#2181e2"
                rounded="lg"
                mr="5"
                _hover={{ bg: "#42a0ff" }}
                className="relative"
              >
                Explore
              </Button>
            </Link>
            <Link as={NextLink} href="/sell">
              <Button
                color="#e4e8ea"
                fontSize="lg"
                fontWeight="semibold"
                px="12"
                py="7"
                bg="#363840"
                rounded="lg"
                mr="5"
                _hover={{ bg: "#4c505c" }}
                className="relative"
              >
                Create
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box overflow="hidden" className="relative">
          <Image
            className="rounded-t-lg"
            src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
            alt=""
          />
          <Flex
            height="20"
            bg="#313338"
            p="4"
            alignItems="center"
            color="white"
          >
            <Image
              className="h-[2.25rem] rounded-full"
              src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
              alt=""
            />
            <Flex flexDir="column" ml="4">
              <Box fontWeight="semibold">Jolly</Box>
              <a
                className="text-[#1868b7]"
                href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
              >
                hola-kanola
              </a>
            </Flex>
            <Flex flex="1" justifyContent="flex-end" alignItems="center">
              <Box fontSize="3xl" fontWeight="bold" color="#8a939b">
                ➞
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Homepage;
