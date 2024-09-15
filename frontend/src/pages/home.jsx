import React from 'react';
import { Button, Center, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function App() {

    return (
        <>
            <Header />
                    <MainContent />
                <Box>
                    <Link to="/setup_process">
                        <Center>
                            <Button 
                            colorScheme="teal"
                            >処理を開始する
                            </Button> 
                        </Center> 
                    </Link>
                </Box>
        </>
    );
}

export default App
