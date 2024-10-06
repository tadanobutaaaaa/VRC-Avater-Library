import React, { useState, createContext } from 'react';
import { Button, Center, Box, Flex, Select } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import {FileManeger} from "../../wailsjs/go/main/App";

export const fileSearchResult = createContext()

function App() {
    const [selectedValue, setselectedValue] = useState("google")
    const [fileManagerResult, setFileManagerResult] = useState("")

    const changeValue = (e) => setselectedValue(e.target.value)
    const updatefileManagerResult = (result) => setFileManagerResult(result)

    function fileManager() {
        FileManeger(selectedValue).then(updatefileManagerResult)
    }
    return (
        <FileSearchContext.Provider value={fileManagerResult}>
            <Header />
                <Box>
                    <Flex justifyContent="flex-end">
                        <Select 
                            w={335}
                            mt={3}
                            mr={5}
                            border="1px solid"
                            onChange={changeValue}
                        >
                            <option value="google">Google</option>
                            <option value="duckduckgo">DuckDuckGo(非推奨)</option>
                        </Select>
                    </Flex>
                </Box>
                    <MainContent />
                <Box>
                    <Link to="/setup_process">
                        <Center>
                            <Button 
                            colorScheme="teal"
                            onClick={fileManager}
                            >処理を開始する
                            </Button> 
                        </Center> 
                    </Link>
                </Box>
        </FileSearchContext.Provider>
    );
}

export default App
