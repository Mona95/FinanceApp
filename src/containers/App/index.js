import React from "react";
//Components
import Header from "../../components/MainHeader";
import RateHeader from "../../components/RateHeader";
import Content from "../Content";
//Material-ui Components
import { Container } from "@material-ui/core";

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
