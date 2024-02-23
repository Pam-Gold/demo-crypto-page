import {
  Box,
  Flex,
  Heading,
  Img,
  Text,
  Grid,
  TableContainer,
  Table,
  Td,
  TableCaption,
  Thead,
  Tbody,
  Th,
  Tfoot,
  Tr,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import CrytoTableCharts from "../components/crypto-props/CryptoTableCharts";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const ExchangeRatesPage = () => {
  const [page, setPage] = useState(1);
  const [cryptoRatesExchangeData, setCrptoRatesExchangeData] = useState([]);
  useEffect(() => {
    const fetchCryptoRates = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&locale=en`
        );
        setCrptoRatesExchangeData(res.data);
      } catch (err) {
        console.warn(err);
      }
    };

    fetchCryptoRates();
  }, [page]);

  const paginationStyles = {
    borderRadius:"50%",
    "_active":{bg:"grey"},
    "_hover":{bg:"light-grey"}
  }
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px" p="5px 0px" bg="black" color="#fff">
      <Flex flexDir="column" p="0px 8px">
        <Flex flexDir="column" mt="30px" rowGap="20px">
          <Heading>📈 Exhange Rates of Popular CryptoCurrencies.</Heading>
          <Text mb="15px" color="grey">
            This are the rates and prices of the trending and most profitable coins
          </Text>
        </Flex>

        <TableContainer w="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>#</Th>
                <Th>Coin</Th>
                <Th>Price</Th>
                <Th>24h</Th>
                <Th>24h Volume</Th>
                <Th>Market Cap</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cryptoRatesExchangeData.map((cryptoRate) => (
                <CrytoTableCharts {...cryptoRate} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        columnGap="10px"
        fontSize="1.4rem"
        
   
      >
        <Button sx={paginationStyles} onClick={() => setPage(1)}>1</Button>
        <Button sx={paginationStyles} onClick={() => setPage(2)}>2</Button>
        <Button sx={paginationStyles} onClick={() => setPage(3)}>3</Button>
        <Button sx={paginationStyles} onClick={() => setPage(4)}>4</Button>
        <Button sx={paginationStyles} onClick={() => setPage(5)}>5</Button>
      </Flex>
      <Footer/>
    </Flex>
  );
};

export default ExchangeRatesPage;
