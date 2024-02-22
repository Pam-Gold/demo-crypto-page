import { Grid, Flex, Heading } from "@chakra-ui/react";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import NewsBox from "../components/news-props/NewsBox";
import Footer from "../components/Footer";
const FinanceNews = () => {
  const [financeNewsData, setFinanceNewsData] = useState([]);

  const fetchFinanceNewsData = async () => {
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=finance&pageSize=24&apiKey=05a168e910a246c493f80df4a4f7601d`
      );

      setFinanceNewsData(res.data.articles);
    } catch (err) {
      console.warn(err);
    }
  };

  useLayoutEffect(() => {
    fetchFinanceNewsData();
  }, []);
  return (
    <Flex h="fit-content" w="100%" flexDir="column" rowGap="20px">
      <Heading fontSize="1.6rem" textDecor="underline">
        Finance News
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
        {financeNewsData.map((news) => (
          <NewsBox {...news} />
        ))}
      </Grid>
      <Footer/>
    </Flex>
  );
};
export default FinanceNews;
