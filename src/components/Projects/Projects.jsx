/** @format */

import React from "react";
import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";
import Project from "./Project"; // Import your Project component

const projectsData = [
  {
    img: "images/logo.png",
    disc: "Developed a responsive e-commerce website using React and Redux. Implemented product catalog, shopping cart, and user authentication.",
    demoLink: "https://example.com/project1-demo", // Replace with the actual demo link
  },
  {
    img: "images/Ella.png",
    disc: "Designed and implemented a portfolio website showcasing my skills and projects. Utilized React, styled-components, and various animation libraries.",
    demoLink: "https://example.com/project2-demo", // Replace with the actual demo link
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Container id='project'>
      <Zoom>
        <h1>
          Recent <span className='green'>Projects</span>
        </h1>
        <p>
          Explore some of my recent projects below. Click on the demo links to
          experience the projects live.
        </p>
      </Zoom>
      <Slide>
        <SliderComp>
          {projectsData.map((item, index) => (
            <Project
              key={index}
              item={item}
            />
          ))}
        </SliderComp>
      </Slide>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h1 {
    font-size: 1.9rem;
  }

  p {
    width: 28rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;

const Slide = styled.div``;
