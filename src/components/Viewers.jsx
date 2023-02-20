import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';
import styled from "styled-components";
import disneyImg from "../assets/images/viewers-disney.png";
import pixarImg from "../assets/images/viewers-pixar.png";
import marvelImg from "../assets/images/viewers-marvel.png";
import starwarsImg from "../assets/images/viewers-starwars.png";
import nationalImg from "../assets/images/viewers-national.png";
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src={disneyImg} alt="disney" />
      </Wrap>
      <Wrap>
        <img src={pixarImg} alt="pixar" />
      </Wrap>
      <Wrap>
        <img src={marvelImg} alt="marvel" />
      </Wrap>
      <Wrap>
        <img src={starwarsImg}alt="starwars" />
      </Wrap>
      <Wrap>
        <img src={nationalImg} alt="national" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 30px 3px;
    width: 100%;
  }
`;
const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  // audio{
  //   display: none;
  // }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 200px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    // audio{
    //   display: flex;
    //   object-fit: cover;
    //   width: 100%;
    //   height: 100%;
    // }
  }
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`