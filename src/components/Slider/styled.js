import styled from 'styled-components';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import SlidesCarousel from 'react-slick';

import 'slick-carousel/slick/slick.css';

export const ArrowRight = styled(FaChevronRight)`
  font-size: 2.5vw;
  display: none;
`;

export const ArrowLeft = styled(FaChevronLeft)`
  font-size: 2.5vw;
  display: none;
`;

export const Slides = styled(SlidesCarousel)`
  height: 22vh;
  display: flex;
  .slick-list {
    padding: 0 184px;
  }
`;

export const ContainerArrowRight = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  width: 4.2%;
  right: 0;
  height: 22vh;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: white;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  :hover {
    cursor: pointer;
    background: rgba(20, 20, 20, 0.7);
    ${ArrowRight} {
      display: flex;
      transition: transform 0.1s ease-out 0s, -webkit-transform 0.1s ease-out 0s, -moz-transform 0.1s ease-out 0s,
        -o-transform 0.1s ease-out 0s;
    }
  }
`;

export const ContainerArrowLeft = styled.span`
  background: rgba(20, 20, 20, 0.5);
  position: absolute;
  width: 4.2%;
  z-index: 20;
  left: 0;
  height: 22vh;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

  :hover {
    cursor: pointer;
    background: rgba(20, 20, 20, 0.7);
    ${ArrowLeft} {
      display: flex;
      transition: transform 0.1s ease-out 0s, -webkit-transform 0.1s ease-out 0s, -moz-transform 0.1s ease-out 0s,
        -o-transform 0.1s ease-out 0s;
    }
  }
`;

export const Slide = styled.div`
  img {
    border-radius: 3px;
    width: 99%;
    padding: 0 0.1vw;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ContainerSlider = styled.div`
  height: 30vh;
  margin: 2vw 0;
  padding: 0;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 27vh;
  }
  @media screen and (max-width: 600px) {
    height: 23vh;
  }
`;

export const HeaderSlides = styled.div`
  height: 6.3vh;
  font-size: 1vw;
  display: flex;
  align-items: center;
  h2 {
    color: white;
    font-weight: 500;
    width: 100%;
    margin: 0 0 2vh 4vw;
    @media screen and (max-width: 800px) {
      font-size: 12px;
    }
  }
`;

export const Movies = styled.div``;
