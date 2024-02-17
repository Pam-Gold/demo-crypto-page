import { Box, Flex, Img, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const [newsDropDown, renderNewsDropDown] = useToggle();
  const [exchangeDropDown, renderExchangeDropDown] = useToggle();

  return (
    <>
      <Flex
        h="50px"
        w="100%"
        justify="space-between"
        align="center"
        p="5px 8px "
      >
        <Box h="40px" w="40px">
          <Img
            h="100%"
            w="100%"
            src="https://i.pinimg.com/236x/3e/8d/ae/3e8daeae7dfe7b0a4ecedcc54c743c84.jpg"
          />
        </Box>
        {/*  */}

        <List
          display="flex"
          columnGap="45px"
          fontSize={{
            base: "14px",
            sm: "16px",
            md: "1rem",
            lg: "1.6rem",
            xl: "1.6rem",
          }}
          fontWeight="bold"
          pos="relative"
        >
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          {/* <ListItem><Link to="exchange">Exchange</Link></ListItem>
           */}

          <Flex flexDirection="column">
            <Text cursor="pointer" onClick={renderExchangeDropDown}>
              Exchanges
            </Text>

            {exchangeDropDown && (
              <List
                top="50px"
                h="200px"
                w={{
                  base: "200px",
                  sm: "250px",
                  md: "250px",
                  lg: "250px",
                  xl: "250px",
                }}
                bg="#111"
                color="#fff"
                p="10px"
                borderRadius="8px"
                pos="absolute"
                fontSize="1rem"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
                zIndex="99"
              >
                <ListItem>
                  <Link to="exchange-rates" onClick={renderExchangeDropDown}>Exchange Rates</Link>
                </ListItem>
                <ListItem>
                  <Link onClick={renderExchangeDropDown}> Nft Rates</Link>
                </ListItem>
                <ListItem>
                  <Link to="international-merchants" onClick={renderExchangeDropDown}>International Merchants</Link>
                </ListItem>
                <ListItem>
                  <Link onClick={renderExchangeDropDown}>Local Merchants</Link>
                </ListItem>
            
              </List>
            )}
          </Flex>

          <Flex flexDirection="column">
            <Text cursor="pointer" onClick={renderNewsDropDown}>
              News
            </Text>

            {newsDropDown && (
              <List
                top="50px"
                h="200px"
                w={{
                  base: "150px",
                  sm: "150px",
                  md: "150px",
                  lg: "200px",
                  xl: "200px",
                }}
                bg="#111"
                color="#fff"
                p="10px"
                borderRadius="8px"
                pos="absolute"
                fontSize="1rem"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
                zIndex="99"
                right={{base:"5px", sm:"5px", md:"0px"}}
              >
                <ListItem>
                  <Link to="bitcoin-news" onClick={renderNewsDropDown}>Bitcoin News</Link>
                </ListItem>
                <ListItem>
                  <Link to="nft-news" onClick={renderNewsDropDown}> Nft News</Link>
                </ListItem>
                <ListItem>
                  <Link to="defi-news" onClick={renderNewsDropDown}>DeFi News</Link>
                </ListItem>
                <ListItem>
                  <Link to="blockchain-news" onClick={renderNewsDropDown}>Blockchain News</Link>
                </ListItem>
                <ListItem>
                  <Link to="finance-news" onClick={renderNewsDropDown}>Finance News</Link>
                </ListItem>
              </List>
            )}
          </Flex>
        </List>

        {/* <List display={{base:"flex", sm:"flex", md:"none", lg:"none", xl:"none"}} alignItems="center" columnGap="50px" fontSize="1.35rem" fontWeight="bold">
<ListItem><Link><i className="fa-solid fa-house"></i></Link></ListItem>
  <ListItem><Link><i className="fa-solid fa-chart-simple"></i></Link></ListItem>
  <ListItem><Link><i className="fa-solid fa-newspaper"></i></Link></ListItem>
</List> */}

        <Flex
          h="40px"
          w="40px"
          justify="center"
          align="center"
          fontSize="1.7rem"
        >
          {!menu && <i className="fa-solid fa-bars" onClick={openMenu}></i>}
          {menu && <i className="fa-solid fa-close" onClick={closeMenu}></i>}
        </Flex>
      </Flex>

      {/* <List h="50px" w="100%" display={{base:"flex", sm:"flex", md:"none", lg:"none", xl:"none"}} pos="fixed" bottom="0px" fontSize="1.6rem" justifyContent="space-between" p="0px 35px">
  <ListItem><Link><i className="fa-solid fa-house"></i></Link></ListItem>
  <ListItem><Link><i className="fa-solid fa-chart-simple"></i></Link></ListItem>
  <ListItem><Link><i className="fa-solid fa-newspaper"></i></Link></ListItem>
</List> */}

      {menu && (
        <Flex
          pos="absolute"
          right="0px"
          h="200px"
          w="200px"
          bg="#111"
          color="#fff"
          zIndex="99"
        >
          <List
            display="flex"
            flexDir="column"
            justifyContent="space-between"
            p="8px"
          >
            <ListItem>Link1</ListItem>
            <ListItem>Link2</ListItem>
            <ListItem>Link3</ListItem>
            <ListItem>Link4</ListItem>
          </List>
        </Flex>
      )}
    </>
  );
};

export default Navbar;
