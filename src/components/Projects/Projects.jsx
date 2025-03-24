/** @format */

import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";

const Projects = () => {
  return (
    <Container id='project'>
      <Zoom>
        <h1>
          Recent <span className='green'>Projects</span>
        </h1>
        <p>
          I am excited to share my latest projects, dynamic web applications
          built using React.js.
        </p>
      </Zoom>
      <Slide>
        <SliderComp />
      </Slide>
    </Container>
  );
};

export default Projects;

// Projects.js (updated styles)
const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
  text-align: center;
  position: relative;

  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    font-size: 2.5rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 1px;
    background: linear-gradient(to right, #01be96 30%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  p {
    width: 60%;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;

    @media (max-width: 768px) {
      width: 90%;
      font-size: 0.9rem;
    }
  }
`;

const Slide = styled.div`
  margin-top: 4rem;
  position: relative;
`;
