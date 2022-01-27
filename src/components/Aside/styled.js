import styled from 'styled-components';

export const ContainerSlides = styled.div`
  width: 100%;
  height: 32.1vh;
  background-image: linear-gradient(
    to bottom,
    rgba(20, 20, 20, 0) 0,
    rgba(20, 20, 20, 0.15) 15%,
    rgba(20, 20, 20, 0.35) 29%,
    rgba(20, 20, 20, 0.58) 44%,
    #141414 68%,
    #141414 100%
  );
  background-size: 100% 100%;
  background-position: 0 top;
  background-repeat: repeat-x;
  background-color: transparent;
  z-index: -1;
  margin: 3vw 0;
`;

export const HeaderSlides = styled.div`
  height: 6.3vh;
  font-size: 0.99vw;
  display: flex;
  align-items: center;
  h2 {
    color: white;
    font-weight: 500;
    margin: 0 0 2% 18.2%;
    width: 100%;
  }
`;
