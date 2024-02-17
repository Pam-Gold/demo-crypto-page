import { Flex, Grid, Heading, Text, Tr, Td, Img, Box, Portal } from "@chakra-ui/react";



const MerchantTableCharts = (props) => {
  
  

  return(
    <Tr>
    <Td isNumeric>{props.trust_score_rank}</Td>
    <Td display="flex" alignItems="center">
      <Img src={props.image} h="30px" width="30px" mr="8px" />
      {props.name}
    </Td>
    <Td >
      <Box textAlign="center" w="70px"  bg="green.200" color="green" p="5px">
{props.trust_score}/10
      </Box></Td>
    {/* <Td >${props.current_price}</Td> */}
    {/* <Td >{roundedUpPercentage}% </Td> */}
    <Td >${props.trade_volume_24h_btc}</Td>
  
  </Tr>
  )
}

export default MerchantTableCharts;

/*
{
    "id": "binance",
    "name": "Binance",
    "year_established": 2017,
    "country": "Cayman Islands",
    "description": "",
    "url": "https://www.binance.com/",
    "image": "https://assets.coingecko.com/markets/images/52/small/binance.jpg?1706864274",
    "has_trading_incentive": false,
    "trust_score": 10,
    "trust_score_rank": 1,
    "trade_volume_24h_btc": 365535.8890251596,
    "trade_volume_24h_btc_normalized": 205128.71397740408
  }, 
 */