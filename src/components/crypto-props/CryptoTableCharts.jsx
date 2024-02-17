import { Flex, Grid, Heading, Text, Tr, Td, Img } from "@chakra-ui/react";

const CrytoTableCharts = (props) => {

  const percentage = props.price_change_percentage_24h

  const roundedUpPercentage = percentage.toFixed(2)
  return (
    <Tr>
      <Td isNumeric>{props.market_cap_rank}</Td>
      <Td display="flex" alignItems="center">
        <Img src={props.image} h="30px" width="30px" mr="8px" />
        {props.name}
      </Td>
      <Td >${props.current_price}</Td>
      <Td >{roundedUpPercentage}% </Td>
      <Td >${props.total_volume}</Td>
      <Td >${props.fully_diluted_valuation}</Td>
    </Tr>
  );
};

export default CrytoTableCharts;

/* 

  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "current_price": 52328,
    "market_cap": 1027720495347,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 1099491084827,
    "total_volume": 33417164400,
    "high_24h": 52801,
    "low_24h": 51384,
    "price_change_24h": 76.75,
    "price_change_percentage_24h": 0.14689,
    "market_cap_change_24h": 1062702487,
    "market_cap_change_percentage_24h": 0.10351,
    "circulating_supply": 19629200,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -24.25341,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 77027.01485,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2024-02-16T04:19:44.660Z"
*/
