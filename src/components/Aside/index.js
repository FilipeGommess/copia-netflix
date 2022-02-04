import React from 'react';

import { Link } from 'react-router-dom';
import { SliderData } from '../Slider/SliderData';
import { HeaderSlides, ContainerSlides } from './styled';
import Slider from '../Slider';

export default function Aside() {
  return (
    <ContainerSlides>
      <HeaderSlides>
        <Link to="/">
          <h2>Lançados nos últimos 12 meses</h2>
        </Link>
      </HeaderSlides>
      <Slider slides={SliderData} />
    </ContainerSlides>
  );
}
