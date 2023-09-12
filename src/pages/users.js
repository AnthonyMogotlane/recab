import React from "react";
import { Heading, View, Text, useAuthenticator } from "@aws-amplify/ui-react";
import RequestSignIn from "../components/RequestSignIn";

const Users = () => {
  const { route } = useAuthenticator((context) => [context.route]);

  const display =
    route === "authenticated" ? (
      <View textAlign="center">
        <Heading>Hi! User</Heading>
        <Text>Users Page comming soon!...</Text>
      </View>
    ) : (
      <RequestSignIn />
    );

  return <>{display}</>;
};

export default Users;
