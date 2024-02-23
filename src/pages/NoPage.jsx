import { Button, Flex, Heading } from "@chakra-ui/react";

const NoPage = () => {
  return(
<Flex h="100vh" w="100%" flexDir="column" justify="center" align="center" textAlign="center" bg="black" color="white">
  <Heading fontSize="2rem">😢 Page Not Found or Broken Link</Heading>
  <Text color="grey">
    There's is an error retrieving the page or link you're looking for try goin back to the homepage instead👇🏿

  </Text>
  <Button>
    Go back to Home
  </Button>
</Flex>
  )
}

export default NoPage;