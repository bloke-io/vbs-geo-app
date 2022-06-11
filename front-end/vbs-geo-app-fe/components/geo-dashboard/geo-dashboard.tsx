import React, { ChangeEvent, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  VStack,
  Text,
  Divider
} from "@chakra-ui/react";

const GeoDashboard = () => {
  const [searchType, setSearchType] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");

  return (
    <Box
      minH={`calc(100vh - 50px - 25px)`}
      bgColor="gray.50"
      justifyContent="center"
      pt={10}
    >
      <HStack w="full" justifyContent="center" mb={5}>
        <Heading textAlign="center" color="green.300">
          Select state, country or continent and search for it
        </Heading>
      </HStack>
      <Box display="flex" justifyContent="center">
        <VStack
          w="80%"
          h="full"
          p={10}
          justifyContent="center"
          alignContent="center"
          borderWidth="1px"
          borderRadius="lg"
          borderColor="gray.400"
          overflow="hidden"
        >
          <HStack w="full">
            <FormControl>
              <FormLabel>Enter search type</FormLabel>
              <Select
                borderColor="gray.400"
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  setSearchType(e.target.value);
                }}
              >
                <option value="continent">Continent</option>
                <option value="country">Country</option>
                <option value="city">City</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Enter search word</FormLabel>
              <Input borderColor="gray.400" type="text" />
            </FormControl>
          </HStack>
          <VStack w="80%">
              <HStack mt={5}>
                  <Heading size="md">Results based on your search</Heading>
              </HStack>
              <HStack w="50%" p={2} borderWidth="1px" borderColor="green.400" borderRadius="lg" justifyContent="space-between">
                  <Text>Country: </Text>
                  <Text>Macedonia</Text>
              </HStack>
              <HStack w="50%" p={2} borderWidth="1px" borderColor="green.400" borderRadius="lg" justifyContent="space-between">
                  <Text>Continent: </Text>
                  <Text>Europe</Text>
              </HStack>
              <HStack w="50%" p={2} borderWidth="1px" borderColor="green.400" borderRadius="lg" justifyContent="space-between">
                  <Text>Capital:  </Text>
                  <Text>Skopje</Text>
              </HStack>
              <HStack w="50%" p={2} borderWidth="1px" borderColor="green.400" borderRadius="lg" justifyContent="space-between">
                  <Text>Currency: </Text>
                  <Text>MKD</Text>
              </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default GeoDashboard;
