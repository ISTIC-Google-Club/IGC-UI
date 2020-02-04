import React from 'react';
import styled from 'styled-components';




const Grid=(props:any)=>{
    const Row= styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
    
  `
    return(
        
        <div>
            <Row>
      {props.children}
            </Row>
            </div>
    )
}



const Col=(props:any)=>{
    
    
    const Cols= styled.div`
   background: #000;
   grid-gap: 10px;
  `
    return(
        
        <div>
            
            <Cols>{props.children}</Cols> 
 
  
            </div>
    )
}



export {
    Grid,
    Col,
 };
