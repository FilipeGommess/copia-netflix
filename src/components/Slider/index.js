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
  HeaderSlides,
  ContainerSlider,
  Aside,
} from './styled';

export default function Slider() {
  const settings = {
    slidesToScroll: 5,
    slidesToShow: 5.5,
    touchMove: false,
    initialSlide: 0,
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
    <Aside>
      {SliderData.map((obj, index) => {
        return (
          <ContainerSlider num={index}>
            <HeaderSlides>
              <Link to="/">
                <h2>{obj.title}</h2>
              </Link>
            </HeaderSlides>
            <Slides {...settings}>
              {obj.movies.map((movie) => {
                return (
                  <Slide>
                    <img src={movie.image} alt="travel" />
                  </Slide>
                );
              })}
            </Slides>
          </ContainerSlider>
        );
      })}
    </Aside>
  );
}
