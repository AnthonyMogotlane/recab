import { Card, Heading, Image, Text } from "@aws-amplify/ui-react";
import React from "react";

const BookCard = ({ cover, author, title }) => {
  return (
    <Card
      textAlign="center"
      width={{ base: "100%", small: "" }}
      boxShadow="rgba(13, 26, 38, 0.25) 0px 4px 12px 0px"
    >
      <Image alt="book1" src={cover} />

      <Text fontSize=".8rem">{author}</Text>
      <Heading fontSize=".9rem" fontWeight="700">
        {title}
      </Heading>
    </Card>
  );
};

export default BookCard;
