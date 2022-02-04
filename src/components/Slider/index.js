import React, { useState } from 'react';
import { chunk } from 'lodash';
import { SliderData } from './SliderData';

import {
  ContainerSlider,
  Slides,
  ChevronRight,
  ContainerChevronRight,
  Slide,
  ContainerChevronLeft,
  ChevronLeft,
} from './styled';

export default function Slider(slides = []) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === chunk(SliderData, 5).length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? chunk(SliderData, 5).length - 1 : current - 1);
  };

  if (Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <ContainerSlider>
      <Slides>
        <ContainerChevronLeft onClick={prevSlide}>
          <ChevronLeft />
        </ContainerChevronLeft>
        <Slide>
          {chunk(SliderData, 5).map((arraySlide, index) => {
            return arraySlide.map((slide) => {
              return index === current && <img src={slide.image} alt="travel" />;
            });
          })}
        </Slide>
        <ContainerChevronRight onClick={nextSlide}>
          <ChevronRight type="button" />
        </ContainerChevronRight>
      </Slides>
    </ContainerSlider>
  );
}
