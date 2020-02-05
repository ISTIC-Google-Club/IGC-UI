import React from 'react';
import styled from 'styled-components';




const Grid=(props:any)=>{
    console.log(props.children);
    const Row= styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto;
    grid-gap:${props.gap}px;
    grid-row-gap:${props.rowgap}px;
    grid-column-gap: ${props.colgap}px;
    @media (max-width: 900px) {
        display: block;
  }
    
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
   background:red;
   grid-column: span ${props.span};
  `
  
    return(
         <Cols>{props.children}</Cols> 
    )
}



export {
    Grid,
    Col,
 };
