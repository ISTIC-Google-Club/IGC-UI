import React from "react";
import "./App.css";

import { Grid, Col } from "./components/grid/grid";

const App = () => {
  return (
    <div className="App">
      <Grid gap={15} temps={3}>
        <Col span={2}>2</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
        <Col>2</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
      </Grid>
    </div>
  );
};

export default App;
