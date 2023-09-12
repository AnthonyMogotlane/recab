import {
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import React, { useState } from "react";
import { styled } from "styled-components";
import { API, graphqlOperation } from "aws-amplify";
import { createBook } from "../graphql/mutations";

const StyledView = styled(View)`
  position: absolute;
  height: 100vh;
  width: 100%;
  insert: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const AddBook = ({ cancel, updateBooks }) => {
  const initialFormState = {
    title: "",
    author: "",
    description: "",
    cover: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const setInput = (key, value) => {
    setFormState({ ...formState, [key]: value });
  };

  const addABook = async () => {
    try {
      if (formState.title && formState.author) {
        const book = { ...formState };
        updateBooks(book);
        setFormState(initialFormState);
        await API.graphql(graphqlOperation(createBook, { input: book }));
        console.log(formState);
      }
      cancel();
    } catch (err) {
      console.log("error creating book:", err);
    }
  };

  return (
    <StyledView>
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Card width="25rem">
          <Heading textAlign="center">Post a book</Heading>
          <TextField
            placeholder="Title"
            onChange={(e) => setInput("title", e.target.value)}
            value={formState.title}
          />
          <TextField
            placeholder="Author"
            onChange={(e) => setInput("author", e.target.value)}
          />
          <TextField
            placeholder="Description"
            onChange={(e) => setInput("description", e.target.value)}
          />
          <TextField
            placeholder="Cover: URL(image)"
            onChange={(e) => setInput("cover", e.target.value)}
          />
          <Divider margin="1rem 0" size="small"></Divider>
          <View>
            <Flex justifyContent="space-between">
              <Button
                variation="primary"
                backgroundColor="#ff5851"
                size="small"
                onClick={cancel}
              >
                Cancel
              </Button>
              <Button
                variation="primary"
                colorTheme="success"
                size="small"
                onClick={addABook}
              >
                Add
              </Button>
            </Flex>
          </View>
        </Card>
      </Flex>
    </StyledView>
  );
};

export default AddBook;
