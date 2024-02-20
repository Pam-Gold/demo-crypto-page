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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import axios from "axios";
import SimpleTableChart from "../components/crypto-props/SimpleTableChart";
import NewsBox from "../components/news-props/NewsBox";
import CrytoTableCharts from "../components/crypto-props/CryptoTableCharts";
import Footer from "../components/Footer";

const Home = () => {


  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [cryptoRatesData, setCryptoRatesData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );

      setData(res.data.coins);
    } catch (err) {
      console.warn(err);
    }
  };
  const fetchNewsData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=crypto&pageSize=8&apiKey=05a168e910a246c493f80df4a4f7601d`
      );

      setNewsData(res.data.articles);
    } catch (err) {
      console.warn(err);
    }
  };

  const fetchCryptoRates = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en"
      );
      setCryptoRatesData(res.data);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    fetchData();
    fetchNewsData();
    fetchCryptoRates();
  }, []);
  console.log(data);
  console.log(newsData);
  console.log(cryptoRatesData);

  return (
    <Flex
      p={{
        base: "0px 15px",
        sm: "0px 15px",
        md: "0px 20px",
        lg: "0px 25px",
        xl: "0px 25px",
      }}
      rowGap="25px"
      mt="20px"
      flexDir="column"
    >
      {" "}
      <Flex
        h={{
          base: "350px",
          sm: "350px",
          md: "350px",
          lg: "200px",
          xl: "200px",
        }}
        w="100%"
        flexDir={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        gap="15px"
      >
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          border="2px solid lightgrey"
          borderRadius="15px"
        ></Flex>
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          border="2px solid lightgrey"
          flexDir="column"
          p="10px"
          rowGap="15px"
          borderRadius="15px"
        >
          <Flex justifyContent="space-between">
            <Flex align="center">
              <Img
                h="20px"
                w="20px"
                src="https://cdn-icons-png.flaticon.com/128/2267/2267359.png"
              />{" "}
              <Heading fontSize="1.1rem">Trending</Heading>
            </Flex>
            <Text cursor="pointer">
              More <i className="fa-solid fa-chevron-right"></i>
            </Text>
          </Flex>
          <Flex h="fit-content" w="100%" flexDir="column">
            {/*  */}
            {data.map(
              (coin, indx) => indx < 3 && <SimpleTableChart {...coin} />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px">
        <Heading fontSize="1.6rem" textDecor="underline">
          Latest News
        </Heading>

        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          gridTemplateRows="min-content"
          gap="15px"
        >
          {newsData.map((news) => (
            <NewsBox {...news} />
          ))}
        </Grid>
      </Flex>
      <Flex>
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
              {cryptoRatesData.map(
                (cryptoRate, indx) =>
                  indx < 20 && <CrytoTableCharts {...cryptoRate} />
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      {/* <Footer/> */}
    </Flex>
  );
};

export default Home;

{
  /* <Flex >
  <Flex flexDir="column" justify="center" h="00px" w="100%">
    <Heading textAlign="center" mt="20px" fontSize={{base:"1.8rem", sm:"1.8rem", md:"2rem", lg:"3rem", xl:"3.2rem" }}>
   Explore The Future Of Finance, One Block At a Time By Unlocking The Secrets Of BlockChain
    </Heading>
    {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem, ab magnam distinctio nesciunt vel adipisci! Accusamus, doloremque?</Text> */
}
// </Flex>

// </Flex> */}
