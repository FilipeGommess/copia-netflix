import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GrPlayFill } from 'react-icons/gr';

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 86.33vh;
  position: relative;
  z-index: 0;
`;

export const Container = styled.div`
  height: 56.25vw;
  width: 100%;
  background-image: url('https://occ-0-4762-559.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWfFn21uF54f9pBou27cSt9xX3-MKNpncEq2guYpOE1uWXNqgE7uMcBZkpbrKW5nTKQQRMfLk2xQ6xKa4pZsp6zJSqoO.webp?r=8e1');
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background-size: cover;
  background-position: center center;
  opacity: 1;
  z-index: -1;
  display: flex;
  flex-direction: column-reverse;
`;

export const InfoNavContainer = styled.div`
  background: linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 85%);
  position: absolute;
  top: 0;
  left: 0;
  right: 26.09%;
  bottom: 0;
  opacity: 1;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  height: 49.8%;

  position: absolute;
  top: 14.5%;
  bottom: 0;
  left: 5.4%;
  width: 48.8%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    position: relative;
    background-size: cover;
    background-position: center center;
    opacity: 1;
    width: 100%;
  }
`;

export const Synopsis = styled.div`
  width: 100%;
  position: relative;
  margin-top: 3vh;
  h3 {
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    color: #ffffff;
    font-weight: 500;
    line-height: 1.2;
    width: 100%;
    font-size: 1.35vw;
  }
`;

export const ContainerSynopsiButtons = styled.div`
  display: flex;
  position: relative;
  height: 6.5vh;
  font-size: 100%;
  width: 100%;
  margin-top: 20px;
`;
export const ContainerPlayButton = styled.div`
  width: 10vw;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #000000;
  margin-right: 10px;
  font-weight: 500;

  :hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

export const ContainerInfoButton = styled.div`
  width: 15.6vw;
  background-color: rgba(109, 109, 110, 0.7);
  color: #fff;
  font-weight: 500;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  z-index: 20;
  font-size: 0.9rem;

  :hover {
    background-color: rgba(109, 109, 110, 0.4);
  }
`;

export const PlayButton = styled(GrPlayFill)`
  color: rgb(54 27 27);
  background-color: transparent;
  position: relative;
  font-size: 1.4em;
  margin-right: 10px;
`;

export const InfoButton = styled(AiOutlineInfoCircle)`
  color: #fff;
  background-color: transparent;
  position: relative;

  height: 35px;
  width: 35px;
  margin-right: 10px;
  padding: 4px;
`;

export const ContainerClassification = styled.div`
  position: absolute;
  right: 0;
  bottom: 35%;
  background-color: rgba(51, 51, 51, 0.6);
  width: 6.9vw;
  border-left: 3px solid #fff;
  height: 5.1vh;
  display: flex;
  align-items: center;
`;

export const AgeClassification = styled.div`
  background-color: rgb(215, 38, 45);
  font-family: sans-serif;
  font-weight: bold;
  color: #fff;
  width: 2.2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5vh;
  border: 5px #d7262d solid;
  margin-left: 1vw;
  border-radius: 2px;
`;

export const Border = styled.div`
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
  padding: 0;
  margin: -10px;
  position: relative;
  width: 100%;
`;
