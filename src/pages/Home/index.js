import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import { Span } from './styled';
import Slider from '../../components/Slider';

export default function Home() {
  return (
    <>
      <Span>
        <Header />
        <Banner />
      </Span>
      <Slider />
    </>
  );
}
