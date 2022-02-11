import React from 'react';

import Slider from '../Slider';
import { SliderData } from '../Slider/SliderData';

export default function Aside() {
  return (
    <>
      {SliderData.map((obj) => {
        return <Slider title={obj.title} />;
      })}
    </>
  );
}
