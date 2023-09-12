import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authenticator, Flex } from "@aws-amplify/ui-react";

import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
import HomePage from "./pages/home";
import NavBar from "./components/NavBar";
import AboutPage from "./pages/about";
import Users from "./pages/users";
import Footer from "./components/Footer";

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Flex direction="column" position="relative" minHeight="100vh">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/users"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Flex>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

export default App;
