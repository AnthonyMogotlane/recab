// components/Login.js
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import {
  Authenticator,
  Heading,
  useAuthenticator,
  View,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (route === "authenticated") {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Heading>RECAB</Heading>
        </View>
      );
    },
  };

  return (
    <View className="auth-wrapper">
      <Authenticator variation="modal" components={components}></Authenticator>
    </View>
  );
}
