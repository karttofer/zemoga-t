// Dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import humanizeTime from 'humanize-duration';

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
  height: 200px;
  z-index: 2;
  display: grid;
  grid-template-columns: ${(props) => props.gridColumn};

  @media (max-width: 600px) {
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

const PreferenceIcon = styled.div``;

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

const TimeWrapper = styled.div``;

const VoteButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const VoteButton = styled.button`
  width: 30px;
  height: 30px;
  margin: ${(props) => props.margin};
  background: ${(props) => props.bgColorCode};
  border: ${(props) => props.border};
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 600px) {
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
  const [btnSelected, setBtnSelected] = useState('');
  const [isVoteSelected, setIsVoteSelected] = useState(false);

  const dispatch = useDispatch();

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

  const vote = () => {
    dispatch(
      actions.voteFavor(
        btnSelected === 'upVote'
          ? constStyles.VOTE_FAVOR
          : constStyles.VOTE_AGAINST,
        name
      )
    );
  };

  const voteAgain = () => {
    dispatch({ type: constStyles.VOTE_AGAIN, payload: { name } });
  };

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
        <DescriptionWrapper gridColumn={isColumn ? '10% auto' : '33% 67%'}>
          <PreferenceIcon>
            <VoteButton
              marginOnMedia='8px 14px 0px 0px'
              margin={isColumn ? '5px 14px 0px 0px' : ''}
              border='none'
              bgColorCode={
                upTrend < downTrend
                  ? constStyles.ThumbUp
                  : constStyles.ThumbDown
              }
            >
              <img src={upTrend < downTrend ? ThumbsUp : ThumbsDown}></img>
            </VoteButton>
          </PreferenceIcon>
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
                  onClick={() =>
                    btnSelected !== 'upVote'
                      ? setBtnSelected('upVote')
                      : setBtnSelected('')
                  }
                  border={btnSelected === 'upVote' ? '1px solid #fff' : 'none'}
                  margin='0px 14px 0px 0px'
                  bgColorCode={constStyles.ThumbUp}
                >
                  <img src={ThumbsUp}></img>
                </VoteButton>
                <VoteButton
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
                  <img src={ThumbsDown}></img>
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
