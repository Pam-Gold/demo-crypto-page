import {Box, Flex, Heading, Text, Img, List, ListItem, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
<Flex h={{base:"min-content", sm:"min-content", md:"min-content", lg:"250px", xl:"250px"}} w="100%" flexDir="column" bg="black" rowGap="20px" p="5px"  justifyContent="space-between">
<Flex h="70%" w="100%"  flexDir={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}} justifyContent="space-between" p="0px 15px" gap="15px">


<Flex flexDir="column" rowGap="15px">
  <Heading color="#fff">Logo</Heading>
  <Text color="grey" width="400px">blaqx crypto bring about change in the tech and crypto market, creating opportunities for youths with determination & zeal</Text>
</Flex>

<List color="grey">
  <Text color="#fff" mb="8px">Major Links</Text>
  <ListItem>Home</ListItem>
  <ListItem>Exchange Rates</ListItem>
  <ListItem>International Merchants</ListItem>
  <ListItem>Bitcoin News</ListItem>
</List>
<List color="grey">
  <Text color="#fff" mb="8px">About Blaqx-Crypto</Text>
  <ListItem>About Us</ListItem>
  <ListItem>Careers</ListItem>
  <ListItem>Company BLog</ListItem>
  <ListItem>Terms of Service</ListItem>
</List>
<List color="grey">
  <Text color="#fff" mb="8px">Community</Text>
  <ListItem>Telegram</ListItem>
  <ListItem>Instagram</ListItem>
  <ListItem>Discord</ListItem>
  <ListItem>Youtube</ListItem>
</List>

</Flex>
<Flex h="30%" w="100%">
  <Text color="grey">&copy; 2024 blaqx-crypto All Rights Reserved.</Text>
</Flex>
</Flex>
  )


}

export default Footer;