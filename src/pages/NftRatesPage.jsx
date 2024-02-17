import { Box, Flex, Heading, Img, Text, Grid, TableContainer, Table, Td, TableCaption, Thead, Tbody, Th, Tfoot, Tr } from "@chakra-ui/react";
import axios from "axios";

const NftRatesPage = () => {
  return(
    <Flex h="fit-content" w="100%" flexDir="column">
    
    <Flex flexDir="column">
      <Flex flexDir="column" mt="30px" rowGap="20px">
        <Heading>
          
        Cryptocurrency Prices by Market Cap
        </Heading>
        <Text mb="15px">The global cryptocurrency market cap today is $2.06 Trillion, a <i className="fa-solid fa-caret-up" style={{color:"green"}}></i> 0.7% change in the last 24 hours.</Text>
      </Flex>

          <TableContainer w="100%">
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th isNumeric>#</Th>
        <Th>Coin</Th>
        <Th>Price</Th>
        <Th >24h</Th>
        <Th >24h Volume</Th>
        <Th >Market Cap</Th>
      </Tr>
    </Thead>
    <Tbody>
      {cryptoRatesExchangeData.map(cryptoRate =><CrytoTableCharts {...cryptoRate}/>)}

      
    </Tbody>
  </Table>
</TableContainer>
</Flex>
 
      </Flex>
  )
}

export default NftRatesPage;
