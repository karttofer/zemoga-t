// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Assets
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-style: dotted;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  padding: 46px 0px 46px 0px;
`;

const Option = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  p {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    margin: 0px 15px 0px 0px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const SocialMedias = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  p {
    margin: 0px 14px 0px 0px;
  }

  img {
    margin: 0px 14px 0px 0px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Option>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact Us</p>
      </Option>
      <SocialMedias>
        <p>Follow Us</p>
        <div>
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </SocialMedias>
    </Wrapper>
  );
};

export default Footer;
