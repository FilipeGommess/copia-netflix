import React from 'react';

import { ContainerSlider, Slides, ChevronRight, ContainerChevronRight } from './styled';

export default function Slider() {
  return (
    <ContainerSlider>
      <Slides>
        <img
          src="https://occ-0-4301-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbByeysdEXPBlI4Rat7dUHU2IdnxkJ33pIk1RCsaaaJhSwK882wZxbyA_J1shwyeML8fx0Cs9zHK6ri4RaAQFa9Ta6IdFbTHvhbfiSo087ahtyu0dim6vrrP6BMZtZZRvRgpoAgjCy5SYb4aFACzgUA7cK_xsQ.jpg?r=406"
          alt="Expresso do amanhã"
        />
        <img
          src="https://occ-0-4301-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe7sMbQh54LR2Sbt6FyDt4RLY1igY8X1Ofw_GIvUuWr38w-bzk6Lp0444INcU9R_q8Mi51gyS0nqvoli44kQEhMHe2WyQJmFAaBsLwmvBAhS6ZBfu6DR5uzX5CuwiP7u8x_AFs3M2yGpOvC5S9D9gAI6nrezMsQWg0JjbYA6N0Vf4yjkeEG0kobH8SsrAhDnFYDMfDR5Vu_VfBIgWj5LJT6p.jpg?r=61a"
          alt="Ozark"
        />
        <img
          src="https://occ-0-4301-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY4guFxuW4aavSWWOm_zhjk03Vz7SDYBuWCRe3oUB4UVtVdY4Ziti_N3OIfM43xCRsQDo5isUJ_4zNW8VNfscAnlhIjUw7DVL35cQNp2N2ohLstRo6N-1fSMZOtQ6ARIRpdi921CjkD2WwMbuebttBgqxVtfPAFhnWQekw-_P3z73IXS9DW3DoI.jpg?r=806"
          alt="Neymar"
        />
        <img
          src="https://occ-0-4301-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZSG6deJUNcFiwHugigabPyi5I-GwcB-RZ0bgggIzR5NX5l0lB-GPgYojYqFmbUjAWDPJqs0HK4A8m8uu1gDjwBMrY9SaI_nwSZODsapoapntQSgqlXT_WhC2hwM.jpg?r=e19"
          alt="Arquivo81"
        />
        <img
          src="https://occ-0-4301-559.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZxIiMMupr4VUlZPgFRVU9vjl1JywA5WR4CzuPDrqHLMSXB0Zm1u4_w0kfAV0BDfbC06PpeVjsKJMvERbExvG_snU53tx_78WalAZlFp8H5w4Bl2_vrnq9F3QCAijQgqx35sHJV9974Os_iLx95ayft61BYJVg.jpg?r=cea"
          alt="AfterLife"
        />
        <ContainerChevronRight>
          <ChevronRight type="button">asd</ChevronRight>
        </ContainerChevronRight>
      </Slides>
    </ContainerSlider>
  );
}
