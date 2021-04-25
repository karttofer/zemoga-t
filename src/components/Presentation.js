// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import Search from '../assets/images/search.svg';
import Francisco from '../assets/images/pope-francis.@2x.png';
import HamburguerSvg from '../assets/images/hamburger.svg';
import Close from '../assets/images/close.svg';
import Arrow from '../assets/images/arrow.svg';

// Components
import PresentationCard from '../components/PresentationCard';

// Styles
const Wrapper = styled.div`
  height: 626px;
  background: url(${Francisco});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 103px 14% 0px 14%;

  @media (max-width: 600px) {
    padding: 28px 0px 0px 7%;
  }

  @media (max-width: 400px) {
    padding: 0px;
  }
`;

const Effect = styled.div`
  width: 100%;
  height: 95.3%;
  position: absolute;
  background: linear-gradient(178deg, #000000ab, transparent);
`;

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
  h1 {
    color: #fff;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.2em;
    }
  }

  @media (max-width: 400px) {
    padding: 15px 0px 0px 18px;
  }
`;

const NavBarOptionElements = styled.div`
  ul {
    display: flex;
  }

  ul > li {
    list-style: none;
    margin: 0px 10px 0px 0px;
    color: #fff;
  }

  ul > li > p:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ul > li > img {
    width: 27px;
    margin: 0px 0px 0px 16px;
    transform: translateY(-5px);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    ul {
      display: none;
    }
  }
`;

const Hamburguer = styled.div`
  display: none;
  margin: 0px 38px 0px 0px;

  @media (max-width: 600px) {
    display: block;
  }
`;

const ModalMenu = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;

  div {
    display: flex;
    justify-content: flex-end;

    img {
      margin: 11px;
      cursor: pointer;
    }
  }

  ul {
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    li {
      list-style: none;
      font-size: 2em;

      p:hover {
        text-decoration: underline;
      }
    }
  }
`;

const ClosingWrapper = styled.div`
  width: 100%;
  height: 43px;
  display: flex;
  transform: translateY(-43px);

  div:nth-child(1) {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);

    p {
      color: #fff;
      margin: 1px 8px 0px 0px;
    }
  }

  div:nth-child(2) {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
  }

  div:nth-child(3) {
    width: 70%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);

    h1 {
      display: flex;
      color: #464646;

      p {
        font-weight: 300;
        font-size: 0.5em;
        margin: 15px 0px 0px 0px;
      }
    }
  }
`;

const TrendProgress = () => {
  const [modalMenu, setModalMenu] = useState(false);

  return (
    <>
      {modalMenu && (
        <ModalMenu>
          <div>
            <img
              alt='pres-close'
              src={Close}
              onClick={() => setModalMenu(false)}
            />
          </div>
          <ul>
            <li>
              <p>Past Trials</p>
            </li>
            <li>
              <p>How It Works</p>
            </li>
            <li>
              <p>Login / Sign Up</p>
            </li>
            <li>
              <p>Search</p>
            </li>
          </ul>
        </ModalMenu>
      )}

      <Effect />
      <Wrapper>
        <NavBarWrapper>
          <h1>Que chimba news.</h1>
          <NavBarOptionElements>
            <ul>
              <li>
                <p>Past Trials</p>
              </li>
              <li>
                <p>How It Works</p>
              </li>
              <li>
                <p>Login / Sign Up</p>
              </li>
              <li>
                <img alt='search' src={Search} />
              </li>
            </ul>
            <Hamburguer onClick={() => setModalMenu(true)}>
              <img alt='hamburguer' src={HamburguerSvg} />
            </Hamburguer>
          </NavBarOptionElements>
        </NavBarWrapper>
        <PresentationCard />
      </Wrapper>
      <ClosingWrapper>
        <div>
          <p>CLOSING IN</p>
        </div>
        <div>
          <img alt='arrow' src={Arrow} />
        </div>
        <div>
          <h1>
            22 <p>days</p>
          </h1>
        </div>
      </ClosingWrapper>
    </>
  );
};

export default TrendProgress;
