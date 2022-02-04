import styled from 'styled-components';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export const ContainerSlider = styled.div`
  max-height: 100%;
  display: inline-flex;
`;

export const ChevronRight = styled(FaChevronRight)`
  font-size: 2.5vw;
  display: none;
`;

export const ChevronLeft = styled(FaChevronLeft)`
  font-size: 2.5vw;
  display: none;
`;

export const Slides = styled.div`
  display: -webkit-box;
  padding: 0 4%;
  height: 100%;
  width: auto;
`;

export const ContainerChevronRight = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  z-index: 20;
  width: 3.8%;
  right: 0;
  height: 21.86%;
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

export const ContainerChevronLeft = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  z-index: 20;
  width: 3.8%;
  left: 0;
  height: 21.86%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  :hover {
    cursor: pointer;
    background: rgba(20, 20, 20, 0.7);
    ${ChevronLeft} {
      display: flex;
      transition: transform 0.1s ease-out 0s, -webkit-transform 0.1s ease-out 0s, -moz-transform 0.1s ease-out 0s,
        -o-transform 0.1s ease-out 0s;
    }
  }
`;

export const Slide = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    border-radius: 5px;
    padding: 0 3px;
    width: 100%;
    height: 100%;
  }
`;
