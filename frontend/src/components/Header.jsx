import React from 'react';
import { Icon, useColorMode, IconButton, Flex, HStack, Box, Heading } from '@chakra-ui/react';
import { MoonIcon, SunIcon, SettingsIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

function Header () {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Flex alignItems="center" justifyContent="center" bg="teal.400" p={6} position="relative">
            <Box textAlign="center">
                <Link to="/">
                    <Heading>VRC Avater Library</Heading>
                </Link>
            </Box>
            
            <HStack spacing="25px" position="absolute" right={7}>
                {/* 
                <IconButton 
                aria-label='Toggle theme'
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                />
                */}
                <Link to="/manual">
                    <Icon as={InfoIcon} boxSize={6}/>
                </Link>
                <Link to="/setting">
                    <Icon as={SettingsIcon} boxSize={6}/>
                </Link>
            </HStack>
        </Flex>
    )
}

export default Header