import {
  Flex,
  Heading,
  Img,
  Text,
  Grid,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from "axios";
import SimpleTableChart from "../components/crypto-props/SimpleTableChart";
import NewsBox from "../components/news-props/NewsBox";
import CrytoTableCharts from "../components/crypto-props/CryptoTableCharts";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [cryptoRatesData, setCryptoRatesData] = useState([]);
  // Async Function  to retrieve trending cryptocurrency charts from CoinGecko
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
  //

  // Async Function  to retrieve Crypto related news from Gnews io
  const fetchNewsData = async () => {
    try {
      const res = await axios.get(
        `https://gnews.io/api/v4/search?q=crypto&lang=en&country=us&max=8&apikey=746e3c2efb7d4c4135084106cfd5b928`
      );

      setNewsData(res.data.articles);
    } catch (err) {
      console.warn(err);
    }
  };
  //

  // Async Function  to retrieve the top 20 cryptocurrency coins from CoinGecko
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
// Use Effect Function to call the Async Functions handling Api requests
  useEffect(() => {
    fetchData();
    fetchNewsData();
    fetchCryptoRates();
  }, []);
  console.log(data);
  console.log(newsData);
  console.log(cryptoRatesData);

  return (
    <Flex rowGap="25px" pt="20px" flexDir="column" bg="black" color="#fff">
      {" "}
      <Flex
        h={{
          base: "600px",
          sm: "600px",
          md: "600px",
          lg: "300px",
          xl: "300px",
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
        p={{
          base: "0px 15px",
          sm: "0px 15px",
          md: "0px 20px",
          lg: "0px 25px",
          xl: "0px 25px",
        }}
      >
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          border="2px solid lightgrey"
          borderRadius="15px"
        >
          {/* Embeded Video that autoplays when the user opens the website */}
          <iframe
            width="100%"
            height="100%"
            style={{ borderRadius: "12px" }}
            src="https://www.youtube.com/embed/a-6ivXJ6H90?si=AAy2g5E61aM8C2-k&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Flex>
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
              <Link to="exchange-rates">
                More <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </Text>
          </Flex>
          <Flex h="fit-content" w="100%" flexDir="column" rowGap="10px">
               {/* Mapping & conditonally rendering Trending Coins from the resolved api request(Coin Gecko Api)*/}
            {data.map(
              (coin, indx) => indx < 5 && <SimpleTableChart {...coin} />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex
        h="fit-content"
        w="100%"
        flexDir="column"
        rowGap="20px"
        p={{
          base: "0px 15px",
          sm: "0px 15px",
          md: "0px 20px",
          lg: "0px 25px",
          xl: "0px 25px",
        }}
      >
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
           {/* Mapping & conditonally rendering Crypto News from the resolved api request(Gnews Api)*/}
          {newsData.map((news) => (
            <NewsBox {...news} />
          ))}
        </Grid>
      </Flex>
      <Flex flexDir="column" rowGap="15px" p="0px 8px">
        <Heading fontSize="1.4rem" color="lightgray">
          Top CryptoCurrencies
        </Heading>
    {/* Table Structure For CryptoCurrency: coins, prices, daily volumes & market cap*/}
        <TableContainer w="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric color="grey">
                  #
                </Th>
                <Th color="grey">Coin</Th>
                <Th color="grey">Price</Th>
                <Th color="grey">24h</Th>
                <Th color="grey">24h Volume</Th>
                <Th color="grey">Market Cap</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* Mapping & conditonally rendering Crypto currency rates from the resolved api request (CoinGecko Api)*/}
              {cryptoRatesData.map(
                (cryptoRate, indx) =>
                  indx < 20 && <CrytoTableCharts {...cryptoRate} />
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;
