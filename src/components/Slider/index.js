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
  Movies,
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
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Movies>
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
    </Movies>
  );
}
