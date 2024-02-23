import { Grid, Flex, Heading } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import NewsBox from "../components/news-props/NewsBox";
import Footer from "../components/Footer";
const NftNews = () => {
  const [NftNewsData, setNftNewsData] = useState([]);

  const fetchNftNewsData = async () => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=nft&lang=en&country=us&max=15&apikey=746e3c2efb7d4c4135084106cfd5b928`
      );
      const data = await res.json()
      setNftNewsData(data.articles);
    } catch (err) {
      console.warn(err);
    }
  };

  useLayoutEffect(() => {
    fetchNftNewsData();
  }, []);
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px">
      <Heading fontSize="1.6rem" textDecor="underline">
        Nft News
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
        {NftNewsData.map((news) => (
          <NewsBox {...news} />
        ))}
      </Grid>
      <Footer/>
    </Flex>
  );
};
export default NftNews;
