import React from 'react';
import './App.css';


import {Grid,Col} from './components/grid/grid'

const App = () => {
  return (
    <div className="App">
       <Grid colgap={12} rowgap={12}>  
       <Col>2</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
        
       
       
      </Grid> 
    </div>
  );
}

export default App;
