// News Component that is rendered across the website as the container for the blogs/news
import { Flex, Img, Link, Text } from "@chakra-ui/react";

const NewsBox = (props) => {
  return (
    <Flex
      h="550px"
      w="100%"
      flexDir="column"
      rowGap="15px"
      p="5px"
      pos="relative"
    >
      <Flex h="250px" w="100%" pos="relative">
        <Img
          src={props.image}
          h="250px"
          w="100%"
          pos="absolute"
          top="0px"
          left="0px"
          right="0px"
          bottom="0px"
          borderRadius="10px"
        />
        <Flex h="50px" w="50px" pos="absolute" top="10px" left="10px">
          <i
            className="fa-solid fa-podcast"
            style={{ fontSize: "1.8rem", color: "#fff" }}
          ></i>
        </Flex>
      </Flex>
      <Flex flexDir="column" rowGap="15px" mt="5px">
        <Text fontSize="1.4rem" fontWeight="bold">
          <Link href={props.url}>{props.title}</Link>
        </Text>
        <Text pos="absolute" bottom="80px" color="grey">
          {props.source.name}
        </Text>
        <Flex
          alignContent="center"
          columnGap="10px"
          mt="15px"
          pos="absolute"
          bottom="30px"
        >
          <Flex fontSize="1rem">
            <Link>
              <i className="fa-solid fa-message"></i>
            </Link>
          </Flex>
          <Flex fontSize="1rem">
            <i className="fa-solid fa-share"></i>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NewsBox;
