import React from "react";
import styled from "styled-components";

interface types_grid {
  colgap?: number;
  rowgap?: number;
  gap?: number;
  temps?: number;
  auto?: boolean;
  children?: any;
}

const Grid = ({ colgap, rowgap, gap, temps, auto, children }: types_grid) => {
  let temp = "";
  var i: number;
  if (auto) {
    for (i = 0; i < children.length; i++) {
      temp = temp + " auto";
    }
  } else if (temps) {
    for (i = 0; i < temps; i++) {
      temp = temp + " auto";
    }
  } else {
    temp =
      "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto";
  }

  const Row = styled.div`
    display: grid;
    grid-template-columns: ${temp};
    grid-gap: ${gap}px;
    grid-row-gap: ${rowgap}px;
    grid-column-gap: ${colgap}px;
    @media (max-width: 900px) {
      display: block;
    }
  `;
  return (
    <div>
      <Row>{children}</Row>
    </div>
  );
};

interface types_col {
  span?: number;
  children?: any;
}

const Col = ({ span, children }: types_col) => {
  const Cols = styled.div`
    background: red;
    grid-column: span ${span};
  `;

  return <Cols>{children}</Cols>;
};

export { Grid, Col };
