import styled from 'styled-components';

import { FaChevronRight } from 'react-icons/fa';

export const ContainerSlider = styled.div`
  height: 100%;
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 2.5vw;
  display: none;
`;

export const Slides = styled.div`
  display: flex;
  justify-content: left;
  padding: 0 4%;
  img {
    width: 20%;
    border-radius: 3px;
    padding-right: 6px;
  }
`;

export const ContainerChevronRight = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  z-index: 20;
  width: 4%;
  right: 0;
  height: 21.82%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  :hover {
    cursor: pointer;
    background: rgba(20, 20, 20, 0.7);
    ${ChevronRight} {
      display: flex;
      transition: transform 0.1s ease-out 0s, -webkit-transform 0.1s ease-out 0s, -moz-transform 0.1s ease-out 0s,
        -o-transform 0.1s ease-out 0s;
    }
  }
`;
