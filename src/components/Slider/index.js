import React from 'react';
import { SliderData } from './SliderData';

import { Slides, ArrowLeft, ArrowRight, ContainerArrowRight, ContainerArrowLeft, Slide } from './styled';

export default function Slider() {
  const settings = {
    slidesToScroll: 5,
    slidesToShow: 5.5,
    touchMove: false,
    initialSlide: 1,
    dots: false,
    infinite: true,
    speed: 750,
    nextArrow: (
      <ContainerArrowRight>
        <ArrowRight />
      </ContainerArrowRight>
    ),
    prevArrow: (
      <ContainerArrowLeft>
        <ArrowLeft />
      </ContainerArrowLeft>
    ),
  };
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Slides {...settings}>
      {SliderData.map((slidery) => {
        return (
          <Slide>
            <img src={slidery.image} alt="travel" />
          </Slide>
        );
      })}
    </Slides>
  );
}
