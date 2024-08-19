import React from 'react';
import {
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
} from "@chakra-ui/react";


function MainContent ({ overflowY = "scroll", ...props }) {

    return (
        <TableContainer 
        m={5}
        h="65vh"
        border="1px solid"
        borderRadius="8px"
        boxShadow="md"
        >
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>画像</Th>
                        <Th>名前</Th>
                        <Th>更新日時</Th>
                        <Th>場所</Th>
                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
    )
}

export default MainContent