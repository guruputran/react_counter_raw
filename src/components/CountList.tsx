/** @format */

import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
font-family: Roboto-Bold;
font-size: 84px;
color: #37474f;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
`;
const StyledBtn = styled.button`
background: #5e19f5;
border: 1px solid #979797;
border-radius: 8px;
font-family: Roboto-Regular;
font-size: 32px;
color: #ffffff;
margin: 5px;
padding: 10px;
`;

const CountList = ({ store }): JSX.Element => {
  const handleInc = () => {
    store.incs();
  };

  const handleDec = () => {
    store.decs();
  };
 
  return (
    <StyledDiv>
      Clicks: {store.count}
      <span>
        <StyledBtn onClick={() => handleInc()}>Increment</StyledBtn>
        <StyledBtn onClick={() => handleDec()}>Decrement</StyledBtn>
      </span>
    </StyledDiv>
  );
};

export default observer(CountList);
