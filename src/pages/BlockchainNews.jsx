import { Grid, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsBox from "../components/news-props/NewsBox";
const BlockchainNews = () => {
  const [blockchainNewsData, setBlockchainNewsData] = useState([]);

  const fetchBlockchainNewsData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=blockchain&pageSize=24&apiKey=05a168e910a246c493f80df4a4f7601d`
      );

      setBlockchainNewsData(res.data.articles);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    fetchBlockchainNewsData();
  }, []);
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px">
      <Heading fontSize="1.6rem" textDecor="underline">
        Blockchain News
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
        {blockchainNewsData.map((news) => (
          <NewsBox {...news} />
        ))}
      </Grid>
    </Flex>
  );
};
export default BlockchainNews;
