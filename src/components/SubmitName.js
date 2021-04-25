// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import People from '../assets/images/bg-people.@2x.png';

// Styles
const Wrapper = styled.div`
  height: 122px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 33px 0px 16px 0px;
  background: url(${People});

  @media (max-width: 900px) {
    height: auto;
    padding: 14px;
  }
`;

const Effect = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  background: red;
  position: absolute;
  background: #ffffff73;
`;

const Submit = styled.button`
  z-index: 2;
  height: 49px;
  width: 212px;
  border: 1px solid #000;
  background: none;
  cursor: pointer;

  @media (max-width: 900px) {
    margin: 27px 0px 0px 0px;
  }
`;

const Paragraph = styled.p`
  z-index: 2;
  margin: 0px 44px 0px 0px;
  font-size: 1.9em;

  @media (max-width: 900px) {
    margin: 0px;
    text-align: center;
  }
`;

const SubmitName = () => {
  return (
    <Wrapper>
      <Effect />
      <Paragraph>Is there anyone else you would want us to add?</Paragraph>
      <Submit>Submit a name</Submit>
    </Wrapper>
  );
};

export default SubmitName;
