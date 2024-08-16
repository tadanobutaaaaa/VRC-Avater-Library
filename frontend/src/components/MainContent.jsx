import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";


function MainContent ({ overflowY = "scroll", ...props }) {
    return (
        <TableContainer 
        m={10}
        h={750}
        border="2px solid lightgray"
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