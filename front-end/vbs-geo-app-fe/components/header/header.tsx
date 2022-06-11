import React from 'react';
import { Button, HStack, Heading } from '@chakra-ui/react';

const Header= () => {
    return (
            <HStack w="full" height="50px" justifyContent="center" bgColor="green.200">
                <Button variant="unstyled">
                    <Heading color="white" size="xl">VBS Geo App</Heading>
                </Button>
            </HStack>
    );
}

export default Header;