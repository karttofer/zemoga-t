// Dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// Contants
import * as constStyles from '../commons/constants/contants';

// Actions
import * as actions from '../store/actions';

// Assets
import ThumbsUp from '../assets/images/thumbs-up.svg';
import ThumbsDown from '../assets/images/thumbs-down.svg';

// Components
import TrendProgress from '../components/TrendProgress';

// Styles
const Wrapper = styled.div`
  width: ${(props) => props.width};
  position: relative;
  margin: ${(props) => props.margin};
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-size: ${(props) => props.bgSize};
  color: #fff;

  @media (max-width: 600px) {
    background-size: cover;
  }
`;

const Effect = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props) => props.linealGradient};

  @media (max-width: 600px) {
    background: linear-gradient(179deg, #04040400, #000000d6);
  }
`;

const DescriptionWrapper = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumn};

  @media (max-width: 760px) {
    display: flex !important;
  }
`;

const DesctiptionTextWrapper = styled.div`
  h1 {
    width: 300px;
    margin: 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  p {
    height: 96px;
    @media (max-width: 600px) {
      white-space: break-spaces;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 82px;
    }
  }
`;

const VoteWrapper = styled.div`
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: ${(props) => props.margin};

  @media (max-width: 600px) {
    margin: 0px 0px 11px 0px;
    text-align: right;
  }
`;

const TimeWrapper = styled.div`
  margin: 6px 0px 0px 0px;
`;

const VoteButtonWrapper = styled.div`
  height: 72px;
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background: ${(props) => props.bgColorCode};
  border: ${(props) => props.border};
  cursor: pointer;

  img {
    width: ${(props) => props.ImgWidth};
    height: ${(props) => props.ImgHeight};
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    img {
      width: 31px;
      height: 16px;
      margin: auto;
    }
    margin: ${(props) => props.marginOnMedia};
  }
`;

const ButtonBasicStyle = styled.button`
  width: 107px;
  height: 38px;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  cursor: pointer;

  p {
    margin: 0px;
    color: #fff;
  }
`;

const AllWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin: ${(props) => props.margin};
  z-index: 2;

  @media (max-width: 600px) {
    padding-top: 76px;
    margin: 46px 15px 0px 0px;
    flex-wrap: wrap;
  }
`;

const ProgressWrapper = styled.div`
  height: 33px;
  z-index: 3;
  position: relative;
  display: flex;
`;

const Card = ({
  category,
  upTrend,
  downTrend,
  name,
  information,
  lastUpdate,
  alreadyVoted,
  isColumn,
  totalVotes,
  bgImage,
}) => {
  // State
  const [btnSelected, setBtnSelected] = useState('');
  const [isVoteSelected, setIsVoteSelected] = useState(false);

  // Store dispatch
  const dispatch = useDispatch();

  /**
   * @param {date} date1 - This wil be the current date
   * @param {date} date2 - The date that we'll use to make the difference
   * @returns A message with the time that have been pased example: 14 hours ago.
   */
  const calcDate = (date1, date2) => {
    const diff = Math.floor(date1.getTime() - date2.getTime());
    const day = 1000 * 60 * 60 * 24;

    const days = Math.floor(diff / day);
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    let message;

    if (days) message = `${days} days ago`;
    if (months) message = `${months} months ago`;
    if (years) message = `${years} years ago`;

    return message;
  };

  /**
   * @description This function will make a dispatch to make a vote
   */
  const vote = () => {
    dispatch(
      actions.vote(
        btnSelected === 'upVote'
          ? constStyles.VOTE_FAVOR
          : constStyles.VOTE_AGAINST,
        name
      )
    );
  };

  /**
   * @description Simple function to vote again, if the user already vote
   */
  const voteAgain = () => {
    dispatch({ type: constStyles.VOTE_AGAIN, payload: { name } });
  };

  /**
   * @description Inside of the useEffect we need to control when the user make a vote
   * to hidde or show the vote now button
   */
  useEffect(() => {
    if (btnSelected) {
      setIsVoteSelected(true);
      return;
    }
    setIsVoteSelected(false);
  }, [btnSelected]);
  return (
    <Wrapper
      bgImage={bgImage}
      bgSize={isColumn ? 'cover' : 'contain'}
      width={isColumn ? '356.5px' : ''}
    >
      <Effect
        linealGradient={
          isColumn
            ? 'linear-gradient(179deg, #04040400, #000000d6)'
            : 'linear-gradient(95deg, #a29b9a00, #8c8585, #000000b0, #848484)'
        }
      ></Effect>
      <AllWrapper
        flexDirection={isColumn ? 'column' : 'row'}
        margin={isColumn ? '46px 17px 0px 0px' : ''}
      >
        <DescriptionWrapper gridColumn={isColumn ? '10% auto' : '199px auto'}>
          <VoteButton
            height='30px'
            width='30px'
            ImgWidth='16px'
            ImgHeight='16px'
            margin={isColumn ? '5px 14px 0px 0px' : ''}
            border='none'
            bgColorCode={
              upTrend > downTrend ? constStyles.ThumbUp : constStyles.ThumbDown
            }
          >
            <img
              alt='thumbs'
              src={upTrend > downTrend ? ThumbsUp : ThumbsDown}
            />
          </VoteButton>
          <DesctiptionTextWrapper>
            <h1>{name}</h1>
            <p>{information}</p>
          </DesctiptionTextWrapper>
        </DescriptionWrapper>
        <VoteWrapper
          margin={isColumn ? '0px 17px 8px 0px' : '0px 17px 0px 0px'}
        >
          <TimeWrapper>
            <p>{`${calcDate(
              new Date(),
              new Date(lastUpdate)
            )} in ${category}`}</p>
          </TimeWrapper>
          <VoteButtonWrapper>
            {alreadyVoted === false && (
              <>
                <VoteButton
                  ImgWidth={isColumn ? '16px' : '33px'}
                  ImgHeight={isColumn ? '16px' : '46px'}
                  height={isColumn ? '30px' : '56px'}
                  width={isColumn ? '30px' : '69px'}
                  onClick={() =>
                    btnSelected !== 'upVote'
                      ? setBtnSelected('upVote')
                      : setBtnSelected('')
                  }
                  border={btnSelected === 'upVote' ? '1px solid #fff' : 'none'}
                  margin='0px 14px 0px 0px'
                  bgColorCode={constStyles.ThumbUp}
                >
                  <img alt='thumbsUp' src={ThumbsUp} />
                </VoteButton>
                <VoteButton
                  ImgWidth={isColumn ? '16px' : '33px'}
                  ImgHeight={isColumn ? '16px' : '46px'}
                  height={isColumn ? '30px' : '56px'}
                  width={isColumn ? '30px' : '69px'}
                  onClick={() =>
                    btnSelected !== 'downVote'
                      ? setBtnSelected('downVote')
                      : setBtnSelected('')
                  }
                  border={
                    btnSelected === 'downVote' ? '1px solid #fff' : 'none'
                  }
                  margin='0px 14px 0px 0px'
                  bgColorCode={constStyles.ThumbDown}
                >
                  <img alt='thumbsDown' src={ThumbsDown} />
                </VoteButton>
              </>
            )}
            {(isVoteSelected || alreadyVoted) && (
              <ButtonBasicStyle
                onClick={() => (alreadyVoted ? voteAgain() : vote())}
              >
                <p>{alreadyVoted ? 'Vote Again' : 'Vote Now'}</p>
              </ButtonBasicStyle>
            )}
          </VoteButtonWrapper>
        </VoteWrapper>
      </AllWrapper>

      <ProgressWrapper>
        <TrendProgress main={false} progress={upTrend} total={totalVotes} />
        <TrendProgress
          main={false}
          progress={downTrend}
          total={totalVotes}
          isNegativeVote={true}
        />
      </ProgressWrapper>
    </Wrapper>
  );
};

export default Card;
