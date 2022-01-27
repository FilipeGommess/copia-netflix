import React from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Aside from '../../components/Aside';
import { Span } from './styled';

export default function Home() {
  return (
    <>
      <Span>
        <Header />
        <Banner />
      </Span>
      <Aside />
    </>
  );
}
