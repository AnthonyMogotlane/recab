import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  View,
  useAuthenticator,
} from "@aws-amplify/ui-react";

import { API } from "aws-amplify";
import * as queries from "../graphql/queries";
import BookCard from "../components/BookCard";
import AddBook from "../components/AddBook";
import RequestSignIn from "../components/RequestSignIn";

const HomePage = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  const [books, setBooks] = useState([]);
  const [showAddBook, setShowAddBook] = useState(false);
  const [showRequestSignIn, setShowRequestSignIn] = useState(false);

  const fetchBooks = async () => {
    try {
      let res = await API.graphql({
        query: queries.listBooks,
      });
      const books = res.data.listBooks.items;
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateFetchedBooks = (book) => {
    setBooks([...books, book]);
  };

  return (
    <>
      <View className="wrapper">
        <View marginTop="2rem" padding={{ base: "0 10px", large: "0" }}>
          <Heading level={4} fontWeight="400">
            Hi! Welcome to Recab
          </Heading>
          <Heading level={4} fontWeight="400">
            Checkout books you can read or{" "}
            <span>
              <Button
                variation="primary"
                size="small"
                backgroundColor="#ff5851"
                onClick={() =>
                  route === "'authenticated'"
                    ? setShowAddBook(true)
                    : setShowRequestSignIn(true)
                }
              >
                Post a book
              </Button>
            </span>{" "}
          </Heading>
        </View>
        <Flex
          wrap="wrap"
          marginTop="2rem"
          padding={{ base: "0 10px", large: "0" }}
          width="100%"
        >
          {books.map((book) => (
            <BookCard
              author={book.author}
              title={book.title}
              cover={
                book.cover
                  ? book.cover
                  : "https://www.wizebooks.co.za/Content/Images/BookImages/9781526848697_small.jpg?v=48BA6240"
              }
            />
          ))}
        </Flex>
      </View>
      {showAddBook && (
        <AddBook
          cancel={() => setShowAddBook(false)}
          updateBooks={updateFetchedBooks}
        />
      )}
      {showRequestSignIn && (
        <RequestSignIn closeRequestSignIn={() => setShowRequestSignIn(false)} />
      )}
    </>
  );
};

export default HomePage;
