import styled from 'styled-components';
import { FaPlay, FaInfo } from 'react-icons/fa';

export const Container = styled.div`
  height: 56.25vw;
  position: absolute;
  width: 100%;
  img {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    background-size: cover;
    background-position: center center;
    opacity: 1;
    width: 100%;
  }
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
  height: 61vh;
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
    font-size: 1.4vw;
  }
`;

export const ContainerSynopsiButtons = styled.div`
  display: flex;
  position: relative;
  height: 6.5vh;

  width: 100%;
  margin-top: 20px;
`;
export const ContainerPlayButton = styled.div`
  width: 10vw;
  background-color: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #000000;
  font-weight: bold;
  margin-right: 10px;
`;

export const ContainerInfoButton = styled.div`
  width: 15.6vw;

  background-color: #6d6d6eb3;
  color: #fff;
  font-weight: 500;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

export const PlayButton = styled(FaPlay)`
  color: #000000;
  background-color: white;
  position: relative;
  width: 23px;
  height: 23px;
  margin-right: 10px;
`;

export const InfoButton = styled(FaInfo)`
  color: #fff;
  background-color: transparent;
  position: relative;
  border: 2px #fff solid;
  border-radius: 100%;
  height: 24px;
  width: 24px;
  margin-right: 12px;
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
