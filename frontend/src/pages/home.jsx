import React, { useState } from 'react';
import { Button, Center, Select, Flex, Box, useToast } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import { SetBrowser } from '../../wailsjs/go/main/App';

function App() {
    const toast = useToast()
    const [selectedValue, setselectedValue] = useState("")

    const changeValue = (e) => {
        setselectedValue(e.target.value);
    }

    const errorIcon = () => {
        toast({
            title: `お使いのブラウザが選択されていません`,
            description: '右上の選択肢からお選びください',
            position: 'top',
            status: 'error',
            isClosable: true,
        })
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
                            placeholder="お使いのブラウザを選択してください"
                            w={335}
                            mt={3}
                            mr={5}
                            border="1px solid"
                            onChange={changeValue}
                        >
                            <option value="Chrome">Chrome</option>
                            <option value="Edge">Edge</option>
                        </Select>
                    </Flex>
                </Box>
                    <MainContent />
                <Box>
                    <Link to={selectedValue === "" ? "#" : "/setup_process"}>
                        <Center>
                            <Button 
                            colorScheme="teal"
                            onClick={selectedValue === "" ? errorIcon : handleClick}
                            >処理を開始する
                            </Button> 
                        </Center> 
                    </Link>
                </Box>
        </>
    );
}

export default App
