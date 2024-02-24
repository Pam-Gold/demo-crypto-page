// Simple Chart Component that is rendered across the website as an Item in the Trending Currencies section
import { Flex, Heading, Img, Text } from "@chakra-ui/react";

const SimpleTableChart = (props) => {
  const percentage = props.item.data.price_change_percentage_24h.usd;

  const roundedUpPercentage = percentage.toFixed(2);

  return (
    <Flex
      h="40px"
      w="100%"
      align="center"
      justify="space-between"
      _hover={{ bg: "grey" }}
      borderRadius="10px"
      p="5px"
    >
      <Flex columnGap="5px" align="center">
        <Img h="30px" w="30px" src={props.item.small} borderRadius="50%" />{" "}
        <Heading fontSize="1rem">{props.item.name}</Heading>
      </Flex>

      <Flex columnGap="5px" fontSize="14px" fontWeight="bold">
        <Text>{props.item.data.price}</Text>
        <Text color="green">
          <i
            className="fa-solid fa-caret-up"
            style={{ marginRight: "2px" }}
          ></i>
          {roundedUpPercentage}%
        </Text>
      </Flex>
    </Flex>
  );
};

export default SimpleTableChart;
