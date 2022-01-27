import React from 'react';

import { ContainerSlider, Slides } from './styled';

export default function Slider() {
  return (
    <ContainerSlider>
      <Slides>
        <img
          src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVgaDddSQkAYCw_KqP3t49pkSKLjhSN84-o8TYhwP_x8WVvA21M3MZ77XNzE5bIgBzfUXT_hlgxyUCJn-mH74NNiEdJdxTF5ZFAf_y6wFCbxgvZ8_tVp6LrLEfipDXEtUMxoOk8jqfEhi6zaGy3fEsvMT1hC5w.jpg?r=6b9"
          alt="Expresso do amanhã"
        />
        <img
          src="https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfQalv_7KjI06SnsqA0UOAdslnWZXAlf5b8EDsdzqYTUxWt4TJGBOmhbCBd0E_oeUHNliwsOtHdoNc5wLDT5MtjorXqAgPXBMtPNAFaYhINifgagkRNsMC-5jnqcPjvKvW9I-sPuH_C55DjEvQ9dSpmoH2h1bOd51hfEOrJ9GvUlSM4vqiu7pv09LWTAEx-NhXPl5VVrvwSJxqt29DH2B_hR.jpg?r=1be"
          alt="Ozark"
        />
      </Slides>
    </ContainerSlider>
  );
}
