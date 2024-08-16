import React from 'react';
import { useColorMode, IconButton, Flex, HStack, Box, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

function Header () {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box bg="teal.400" p={6}>
            <Flex justifyContent="center">
                <HStack spacing="24px">
                    <Link to="/">
                        <Heading>VRC Avater Library</Heading>
                    </Link>
                    <IconButton 
                    aria-label='Toggle theme'
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    />
                </HStack>
            </Flex> 
        </Box>
    )
}

export default Header