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
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px" p="5px 0px">
      <Flex flexDir="column" >
        <Flex flexDir="column" mt="30px" rowGap="20px">
          <Heading>Cryptocurrency Prices by Market Cap</Heading>
          <Text mb="15px">
            The global cryptocurrency market cap today is $2.06 Trillion, a{" "}
            <i className="fa-solid fa-caret-up" style={{ color: "green" }}></i>{" "}
            0.7% change in the last 24 hours.
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
        <Button onClick={() => setPage(1)}>1</Button>
        <Button onClick={() => setPage(2)}>2</Button>
        <Button onClick={() => setPage(3)}>3</Button>
        <Button onClick={() => setPage(4)}>4</Button>
        <Button onClick={() => setPage(5)}>5</Button>
      </Flex>
    </Flex>
  );
};

export default ExchangeRatesPage;
