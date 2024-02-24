import {
  Box,
  Flex,
  Img,
  List,
  ListItem,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuIcon,
  MenuList,
  Heading,
} from "@chakra-ui/react";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import logo from "../assets/blaqx-logo.png";
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

  const menuTitleStyles = {
    fontSize: "1rem",
    bg: "#000",
  };
  return (
    <>
      <Flex
        h="50px"
        w="100%"
        justify="space-between"
        align="center"
        p="5px 8px "
        bg="black"
        color="#fff"
      >
        <Box h="40px" w="40px">
          <Img h="100%" w="100%" src={logo} />
        </Box>
        {/*  */}

        <List
          display="flex"
          columnGap="45px"
       
        
        >
          <ListItem display="flex" alignItems="center">
            <Link to="/">
              <Heading
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                }}
                fontWeight="bold"
              >
                Home
              </Heading>
            </Link>
          </ListItem>
          {/* <ListItem><Link to="exchange">Exchange</Link></ListItem>
           */}

          <Flex>
            <Menu isLazy bg="#111">
              <MenuButton
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                }}
                fontWeight="bold"
              >
                Exchanges
              </MenuButton>
              <MenuList color="white" bg="black">
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem sx={menuTitleStyles}>
                  <Link to="exchange-rates">Exchange Rates</Link>
                </MenuItem>
                <MenuItem sx={menuTitleStyles}>
                  <Link to="international-merchants">
                    International Merchants
                  </Link>
                </MenuItem>
                <MenuItem sx={menuTitleStyles}>
                  <Link to="">Local Merchants</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>

          <Flex>
            <Menu isLazy bg="#111">
              <MenuButton
                fontSize={{
                  base: "14px",
                  sm: "16px",
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
      
                }}
                fontWeight="bold"
              >
                News
              </MenuButton>
              <MenuList color="white" bg="black">
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem sx={menuTitleStyles}>
                  <Link to="bitcoin-news">Bitcoin News</Link>
                </MenuItem>
                <MenuItem sx={menuTitleStyles}>
                  <Link to="nft-news">Nft News</Link>
                </MenuItem>
                <MenuItem sx={menuTitleStyles}>
                  <Link to="defi-news">Defi News</Link>
                </MenuItem>
                <MenuItem sx={menuTitleStyles}>
                  <Link to="finance-news">Finance News</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </List>

        <Flex>
          <Menu isLazy bg="#111">
            <MenuButton fontSize="1.6rem">
              <i className="fa-solid fa-bars"></i>
            </MenuButton>
            <MenuList color="white" bg="black">
              {/* MenuItems are not rendered unless Menu is open */}
              <MenuItem sx={menuTitleStyles}>Link1</MenuItem>
              <MenuItem sx={menuTitleStyles}>Link2</MenuItem>
              <MenuItem sx={menuTitleStyles}>Link3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
