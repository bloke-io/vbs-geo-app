import React from 'react';
import { HStack, Text } from "@chakra-ui/react";

const Footer = () => {
    return (
        <HStack w="full" h="25px" bgColor="green.100" justifyContent="center">
            <Text>Made by Vlado Dimovski and Miroslav Radic</Text>
        </HStack>
    );
}

export default Footer;