import { Heading, View, Text } from "@aws-amplify/ui-react";
import React from "react";

const Footer = () => {
  return (
    <View
      marginTop="auto"
      backgroundColor="#444"
      textAlign="center"
      padding="2rem 10px"
    >
      <Heading level={5} color={`#fff`}>
        Enjoy Reading
      </Heading>
      <Text color="#fff">Thank you for visiting our site</Text>
    </View>
  );
};

export default Footer;
