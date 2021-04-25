// Dependencies
import React from 'react';
import styled from 'styled-components';

// Containers
import CardsContainer from './containers/CardsContainer';
import Presentation from './components/Presentation';
import MiddleMessage from './components/MiddleMessage';
import SubmitName from './components/SubmitName';

// Styles
const BodyWrapper = styled.div`
  margin: 0px 120px 0px 120px;

  @media (max-width: 600px) {
    padding: 7px;
    margin: 0px;
  }
`;

function App() {
  return (
    <>
      <Presentation />
      <BodyWrapper>
        <MiddleMessage />
        <CardsContainer />
        <SubmitName />
      </BodyWrapper>
    </>
  );
}

export default App;
