// Dependencies
import React from 'react';
import styled from 'styled-components';

// Assets
import ThumbsUp from '../assets/images/thumbs-up.svg';

// Styles
const Wrapper = styled.div`
  width: ${(props) => props.width};
  background: ${(props) => props.background};
`;

const Progress = styled.div`
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
  align-items: center;
  font-family: 'Lato', sans-serif;
`;

const ImgWrapper = styled.img`
  transform: ${(props) => props.transform};
  margin: ${(props) => props.margin};
  height: 16px;
  + p {
    margin: 0px;
    font-size: 3vh;
    color: #fff;
  }
`;

const TrendProgress = ({ main, progress, total, isNegativeVote }) => {
  return (
    <Wrapper
      width={`${(progress * 100) / 50}0%`}
      background={isNegativeVote ? '#ffad1dad' : '#5ebab696'}
    >
      <Progress
        justifyContent={isNegativeVote ? 'flex-start' : ''}
        flexDirection={isNegativeVote ? 'row-reverse' : ''}
      >
        <ImgWrapper
          //className={`img-trend-style ${main ? 'margin-center' : ''}`}
          transform={isNegativeVote ? 'rotate(180deg)' : ''}
          margin='10px'
          src={ThumbsUp}
        />
        {!main && (
          <p className='m-0'>{Math.round((progress * 100) / total)}%</p>
        )}
      </Progress>
    </Wrapper>
  );
};

export default TrendProgress;
