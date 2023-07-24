import React, { useState } from "react";
import { Link, Box, Flex, Button, Stack, useDisclosure } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import Logo from "../Images/logo.png";
import {SideSignin} from "../Pages/SideSignin"
import { useSelector } from "react-redux";
import "../Styles/Navbar.css"
import userIcon from "../Images/user.png";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <RouterLink to="/">
        <Image src={Logo} alt="Logo" maxW="120px" h="auto" />
      </RouterLink>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link as={RouterLink} to={to} display="block" {...rest}>
      {children}
    </Link>
  );
};

const MenuLinks = ({ isOpenn }) => {
  const [show, setShow] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const togglesearch = () => {
    setShow(!show);
  };

  const user = useSelector((store) => {
    return store.loginReducer.user;
  });
 

  const handleOpen = () => {
    if (!!!user) {
      onOpen();
    } else {
      navigate("/cart")
    }
  };
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/"> Home</MenuItem>
        <MenuItem to="/menupage"> Menu </MenuItem>
        <MenuItem to="/aboutuspage"> About Us </MenuItem>
        <MenuItem to="/servicepage"> Service </MenuItem>
        <MenuItem to="/cart">
          <Image
            src="https://img.icons8.com/?size=512&id=119113&format=png"
            alt=""
            maxW="20px"
            maxH="20px"
            objectFit="contain"
            mr={2}
          />
        </MenuItem>
        <div className="top-bar__sign-in-wrapper">
              <div className="top-bar__sign-in">
                <p>{!!user === false ? "Sign in" : user?.name}</p>
                <img
                  src={userIcon}
                  alt="profile user"
                  style={{ height: "30px", marginLeft: "5px" }}
                />
              </div>
              <div className="sign-in-hover">
                <SideSignin isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
              </div>
            </div>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
