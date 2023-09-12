import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuItem,
  View,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { styled } from "styled-components";

const NavBar = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  const navigate = useNavigate();

  const logOut = () => {
    signOut();
    navigate("/login");
  };

  // RouterLink Custom style
  const StyledRouterLink = styled(RouterLink)`
    text-decoration: none;
    color: #000;
    font-size: 18px;
  `;

  return (
    <View boxShadow="0px 15px 10px -21px #111" height="67px">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 0"
        width="60rem"
        margin="auto"
        display={{ base: "none", large: "flex" }}
      >
        <View>
          <Heading>RECAB</Heading>
        </View>
        <View className="font_metropholic">
          <Flex justifyContent="center" alignItems="center">
            <StyledRouterLink to="/" component={Link}>
              Home
            </StyledRouterLink>
            <StyledRouterLink to="/users">Users</StyledRouterLink>
            <StyledRouterLink to="/about">About</StyledRouterLink>
          </Flex>
        </View>
        <View>
          {route !== "authenticated" ? (
            <Button
              variation="primary"
              size="small"
              backgroundColor="#ff5851"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
          ) : (
            <Button onClick={() => logOut()}>Sign Out</Button>
          )}
        </View>
      </Flex>

      <View
        display={{ large: "none" }}
        padding="1rem"
        paddingRight="2rem"
        height="100%"
      >
        <Flex justifyContent="flex-end" alignContent="center">
          <Menu width="50rem">
            <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => navigate("/about")}>About</MenuItem>
            <MenuItem onClick={() => navigate("/users")}>Users</MenuItem>
            {route !== "authenticated" ? (
              <Button
                variation="primary"
                size="small"
                backgroundColor="#ff5851"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
            ) : (
              <Button onClick={() => logOut()}>Sign Out</Button>
            )}
          </Menu>
        </Flex>
      </View>
    </View>
  );
};

export default NavBar;
