import React from 'react';
import { Link } from 'react-router-dom';
import { SliderData } from './SliderData';

import {
  Slides,
  Slide,
  ArrowLeft,
  ArrowRight,
  ContainerArrowRight,
  ContainerArrowLeft,
  // SlideHeaderSlides,
  HeaderSlides,
  ContainerSlides,
} from './styled';

/* eslint-disable react/prop-types */
export default function Slider(titles = []) {
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
    <ContainerSlides>
      <HeaderSlides>
        <Link to="/">
          <h2>{titles.title.map((title) => title)}</h2>
        </Link>
      </HeaderSlides>
      <Slides {...settings}>
        {SliderData.map((obj) => {
          return obj.imgMovie.map((slidery) => {
            return (
              <Slide>
                <img src={slidery.image} alt="travel" />
              </Slide>
            );
          });
        })}
      </Slides>
    </ContainerSlides>
  );
}
