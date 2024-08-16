import React from 'react';
import { Button, Center} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Link to="/setup_process">
                <Center mt={10}>
                    <Button colorScheme="teal">処理を開始する</Button> 
                </Center> 
            </Link>      
        </>
    );
}

export default App
