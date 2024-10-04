import React, { useState } from 'react';
import { Button, Center, Box, Flex, Select } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MainContent from '../components/MainContent';

function App() {
    const [selectedValue, setselectedValue] = useState("")
    const changeValue = (e) => {
        setselectedValue(e.target.value);
    }

    const handleClick = () => {
        SetBrowser(selectedValue)
        .then(() => {
            console.log("Login Successful");
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            <Header />
                <Box>
                    <Flex justifyContent="flex-end">
                        <Select 
                            placeholder="お好みの検索方法を選んでください"
                            w={335}
                            mt={3}
                            mr={5}
                            border="1px solid"
                            onChange={changeValue}
                        >
                            <option value="Chrome">Google</option>
                            <option value="Edge">DuckDuckGo(非推奨)</option>
                        </Select>
                    </Flex>
                </Box>
                    <MainContent />
                <Box>
                    <Link to="/setup_process">
                        <Center>
                            <Button 
                            colorScheme="teal"
                            onClick={handleClick}
                            >処理を開始する
                            </Button> 
                        </Center> 
                    </Link>
                </Box>
        </>
    );
}

export default App
