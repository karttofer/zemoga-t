// Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Assets
import elon from '../assets/images/elon.svg';
import malala from '../assets/images/malala.svg';
import cristina from '../assets/images/cristina.svg';
import mark from '../assets/images/mark.svg';
import greta from '../assets/images/greta.svg';
import kanye from '../assets/images/kanye.svg';

// Components
import Card from '../components/Card';

// Styles
const Wrapper = styled.div`
  display: ${(props) => props.display};
  flex-wrap: ${(props) => props.wrap};
  grid-template-column: ${(props) => props.Gridcolumns};
  grid-gap: ${(props) => props.gridGap};
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const CarouselWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

const SelectTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 22px 0px;

  @media (max-width: 600px) {
    margin: 0px;
  }
`;

const TitleWrapper = styled.h1`
  font-weight: 300;
`;

const WrapperSelect = styled.select`
  z-index: 4;
  height: 31px
  width: 114px;

  position: relative;
  padding: 8px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const CardContainer = () => {
  // State
  const [isColumn, setIsColumn] = useState(false);
  const personList = useSelector((state) => state.items);

  // This object save all the images patchs
  const images = {
    elon,
    malala,
    cristina,
    mark,
    greta,
    kanye,
  };

  // Carousel Settings
  const settings = {
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <SelectTitleWrapper>
        <TitleWrapper>Previous Rulings</TitleWrapper>

        <WrapperSelect onChange={(e) => setIsColumn(!!+e.target.value)}>
          <option value={0}>Column</option>
          <option value={1}>Grid List</option>
        </WrapperSelect>
      </SelectTitleWrapper>
      <Wrapper
        wrap={isColumn ? 'wrap' : ''}
        display={isColumn ? 'flex' : 'grid'}
        Gridcolumns='repeat(auto-fill, 356px)'
        gridGap='11px'
      >
        {personList.map((e) => (
          <Card
            alreadyVoted={e.votes.voted ? true : false}
            lastUpdate={e.lastUpdated}
            category={e.category}
            key={e.name}
            downTrend={e.votes.negative}
            upTrend={e.votes.positive}
            information={e.description}
            name={e.name}
            isColumn={isColumn}
            totalVotes={e.votes.negative + e.votes.positive}
            bgImage={images[e.picture.split('.')[0]]}
          />
        ))}
      </Wrapper>
      <CarouselWrapper>
        <Slider {...settings}>
          {personList.map((e) => (
            <Card
              alreadyVoted={e.votes.voted ? true : false}
              lastUpdate={e.lastUpdated}
              category={e.category}
              key={e.name}
              downTrend={e.votes.negative}
              upTrend={e.votes.positive}
              information={e.description}
              name={e.name}
              isColumn={isColumn}
              totalVotes={e.votes.negative + e.votes.positive}
              bgImage={images[e.picture.split('.')[0]]}
            />
          ))}
        </Slider>
      </CarouselWrapper>
    </>
  );
};

export default CardContainer;
