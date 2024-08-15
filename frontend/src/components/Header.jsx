import React from 'react';
import { useColorMode, IconButton, Flex, HStack, Box, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function Header () {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box bg="teal.400" p = {4}>
            <Flex justifyContent="center">
                <HStack spacing="24px">
                    <Heading>VRC Avater Library</Heading>
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