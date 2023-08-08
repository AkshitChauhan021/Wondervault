import { Input, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
  return (
    <Flex
      className="searchBar"
      bg="#161616" /* Dark grey background color */
      rounded="full" /* Rounded corners to create a pill shape */
      borderRadius="10px"
      h="50px"
      w="350px" /* Adjust the width as needed */
      _hover={{ bg: "#191919" }} /* Grey background color on hover */
      alignItems="center" /* Vertically align items */
      px={2} /* Horizontal padding */
    >
      <Icon as={AiOutlineSearch} color="#8a939b" fontSize="lg" fontWeight="600" />
      <Input
        h="2.6rem"
        flex="1" /* Fill remaining width of the container */
        border="0"
        bg="transparent"
        focusBorderColor="transparent" /* Remove the outline on focus */
        pl={2} /* Left padding for input text */
        color="#e6e8eb"
        _placeholder={{ color: "#8a939b" }}
        placeholder="Search items, collections, and accounts"
      />
    </Flex>
  );
};

export default SearchBar;
