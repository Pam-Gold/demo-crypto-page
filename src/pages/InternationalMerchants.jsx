import { Box, Flex, Heading, Img, Text, Grid, TableContainer, Table, Td, TableCaption, Thead, Tbody, Th, Tfoot, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";  
import MerchantTableCharts from "../components/crypto-props/MerchantTableCharts";
import Footer from "../components/Footer";

const InternationalMerchants = () => {

  const [internationalMerchantRatesData, setInternationalMerchantRatesData] = useState([]);

  useEffect(()=>{
    const fetchInternationalMerchantRates = async () => {
      try {

        const res = await axios.get("https://api.coingecko.com/api/v3/exchanges");
        setInternationalMerchantRatesData(res.data)

      } catch (err) {
        console.warn(err);
      }
    };

    fetchInternationalMerchantRates();
  }, [])

  return(
    <Flex h="fit-content" w="100%" flexDir="column" bg="black" color="#fff">
    
    <Flex flexDir="column" p="0px 8px">
      <Flex flexDir="column" mt="30px" rowGap="20px">
        <Heading>
          
        🏦 Top International Trading Companies and their ratings 
        </Heading>
        <Text mb="15px" color="grey">This are list of the top Crypto Trading Companies with their trust score, exchange prices and daily volumes</Text>
      </Flex>

          <TableContainer  w="100%" >
  <Table variant='simple'>
   
    <Thead>
      <Tr>
        <Th isNumeric>#</Th>
        <Th>Exchange</Th>
        <Th>Trust Score</Th>
        <Th >24h Volume</Th>
      
      </Tr>
    </Thead>
    <Tbody >
      
{internationalMerchantRatesData.map(internationalRates =><MerchantTableCharts {...internationalRates}/>)}
      
    </Tbody>
  </Table>
</TableContainer>
</Flex>
 <Footer/>
      </Flex>
  )
}


export default InternationalMerchants;