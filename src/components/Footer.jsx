import { Flex, Heading, Text, Img, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
<Flex h="350px" w="100%" flexDir={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
<Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}}>
  <Flex>
    <Img/>
    <Heading fontSize="1.1rem">BLaqx Crypto</Heading>
  </Flex>

 <Flex>
  <Text>Links</Text>
 <List>
    <ListItem><Link>Home</Link></ListItem>
    <ListItem><Link>Exchanges</Link></ListItem>
    <ListItem><Link>News</Link></ListItem>

  </List>
 </Flex>

 <Flex>
  <Text>Exchanges</Text>
  <List>
    <ListItem><Link>Exchange Rates</Link></ListItem>
    <ListItem><Link>Nft Rates</Link></ListItem>
    <ListItem><Link>International Merchants</Link></ListItem>
    <ListItem><Link>Local Merchants</Link></ListItem>
  </List>
 </Flex>

 <Flex>
  <Text>News</Text>
  <List>
    <ListItem><Link>Bitcoin News</Link></ListItem>
    <ListItem><Link>Nft News</Link></ListItem>
    <ListItem><Link>Defi News</Link></ListItem>
    <ListItem><Link>Blockchain News</Link></ListItem>
    <ListItem><Link>Finance News</Link></ListItem>
  </List>
 </Flex>

</Flex>
<Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}}></Flex>
</Flex>
  )


}

export default Footer;