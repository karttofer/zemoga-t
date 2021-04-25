// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import Close from '../assets/images/close.svg';

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background: #ebebeb;
  margin: 0px 0px 23px 0px;
`;

const FirstMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  h1 {
    p {
      font-size: 0.6em;
      font-weight: 300;
    }
  }

  @media (max-width: 600px) {
    padding: 7px;
    h1 {
      p {
        font-size: 0.6em;
      }
    }
  }
`;

const SecondMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 1.1em;
  padding: 8px;

  @media (max-width: 600px) {
    font-weight: 300;
    font-size: 0.8em;
  }
`;

const HiddenWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;

  img {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const ShowMessWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 19px 0px;
`;

const ShowMessage = styled.button`
  border: none;
  padding: 8px;
  background: #4240408f;
  color: #fff;
  cursor: pointer;
`;

const MiddleMessage = () => {
  const [showMessage, setShowMessage] = useState(true);
  return (
    <>
      {showMessage === false && (
        <ShowMessWrapper>
          <ShowMessage onClick={() => setShowMessage(true)}>
            <p>Show Message</p>
          </ShowMessage>
        </ShowMessWrapper>
      )}

      {showMessage && (
        <Wrapper>
          <FirstMessageWrapper>
            <h1>
              <p>Speak out. Be heard.</p>Be counted
            </h1>
          </FirstMessageWrapper>
          <SecondMessageWrapper>
            <p>
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It’s easy: You
              share your opinion, we analyze and put the data in a public
              report.
            </p>
          </SecondMessageWrapper>
          <HiddenWrapper onClick={() => setShowMessage(false)}>
            <img alt='close' src={Close} />
          </HiddenWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default MiddleMessage;
