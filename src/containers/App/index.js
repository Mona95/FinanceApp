import React from "react";
import Header from "../../components/MainHeader";
import Content from "../Content";
import { Container } from "@material-ui/core";
import RateHeader from "../../components/RateHeader";

function App() {
  return (
    <Container>
      <Header />
      <RateHeader />
      <Content />
    </Container>
  );
}

export default App;
