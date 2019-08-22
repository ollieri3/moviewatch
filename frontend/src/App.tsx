import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import { AppStyles } from "./App.styles";
import Header from "./components/header";
import Movies from "./screens/Movies";

const client = new ApolloClient({
  uri: "http://localhost:5000"
});

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppStyles />
      <ApolloProvider client={client}>
        <Header />
        <Movies />
      </ApolloProvider>
    </React.Fragment>
  );
};

export default App;
