// Dependencies
import React from 'react';
import styled from 'styled-components';

// Containers
import CardsContainer from './containers/CardsContainer';

// Styles
const BodyWrapper = styled.div`
  margin: 0px 120px 0px 120px;

  @media (max-width: 600px) {
    margin: 0px;
  }
`;

function App() {
  return (
    <BodyWrapper>
      <CardsContainer />
    </BodyWrapper>
  );
}

export default App;
