// Dependencies
import React from "react";
import styled from "styled-components";

// Assets
import Wikipedia from "../assets/images/wikipedia.svg";
import ThumbUpSvg from "../assets/images/thumbs-down.svg";
import ThumbDownSvg from "../assets/images/thumbs-up.svg";

// Constant
import { ThumbUp, ThumbDown } from "../commons/constants/contants";

// Styles
const Wrapper = styled.div`
  width: 50%;
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 23px 115px 22px 19px;
  backdrop-filter: blur(30px);
  transform: translateY(40px);

  @media (max-width: 1070px) {
    padding: 23px 0px 22px 21px;
    width: 74%;
  }

  @media (max-width: 400px) {
    padding: 23px 0px 22px 21px;
    width: 100%;
  }
`;

const Paragraph = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};

  &:hover {
    text-decoration: ${(props) => props.textDecoration};
    cursor: ${(props) => props.cursor};
  }
`;

const Title = styled.h1`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
`;

const VoteWrapper = styled.div`
  z-index: 1;
  width: 50%;
  position: relative;
  transform: translateY(39px);

  @media (max-width: 1070px) {
    width: 74%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const VoteButton = styled.button`
  width: 50%;
  height: 43px;
  border: none;
  background: ${(props) => props.bgColor};
  cursor: pointer;

  img {
    width: 9%;
  }
`;

const PresentationCard = () => {
  return (
    <>
      <Wrapper>
        <Paragraph>What's your opinon on</Paragraph>
        <Title margin="0px 0px 21px 0px" fontSize="2.8em">
          Pope Francis?
        </Title>
        <Paragraph fontSize="1.2em">
          He’s talking tough on clergy sexual abuse, or is he just another
          pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up)
        </Paragraph>
        <Paragraph
          textDecoration="underline"
          margin="21px 0px 13px 0px"
          cursor="pointer"
          fontSize="1.2em"
        >
          <img src={Wikipedia} />
          More Information
        </Paragraph>
        <Title fontSize="1.3em">What’s Your Veredict?</Title>
      </Wrapper>
      <VoteWrapper>
        <VoteButton bgColor={ThumbUp}>
          <img src={ThumbUpSvg} />
        </VoteButton>
        <VoteButton bgColor={ThumbDown}>
          <img src={ThumbDownSvg} />
        </VoteButton>
      </VoteWrapper>
    </>
  );
};

export default PresentationCard;
