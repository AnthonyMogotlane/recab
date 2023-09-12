import {
  Button,
  Card,
  Flex,
  View,
  Text,
  IconsProvider,
} from "@aws-amplify/ui-react";

import { RxCross2 } from "react-icons/rx";

import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StyledView = styled(View)`
  position: absolute;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  insert: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const RequestSignIn = ({ closeRequestSignIn }) => {
  const navigate = useNavigate();

  return (
    <StyledView position="fixed">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Card width="25rem">
          <Flex justifyContent="flex-end">
            <Button border="none" onClick={closeRequestSignIn}>
              <IconsProvider>
                <RxCross2 />
              </IconsProvider>
            </Button>
          </Flex>
          <Text>
            You need to{" "}
            <Button
              size="small"
              variation="primary"
              backgroundColor="#ff5851"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>{" "}
            to post a book.
          </Text>
        </Card>
      </Flex>
    </StyledView>
  );
};

export default RequestSignIn;
