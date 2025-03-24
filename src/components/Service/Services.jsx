/** @format */
import React from "react";
import { FaReact, FaBootstrap, FaJs, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const MySkills = () => {
  return (
    <Container id='skills'>
      <Slide direction='down'>
        <h4>
          My <span className='green'>Technical Arsenal</span>
        </h4>
        <h1>What I Excel In</h1>
      </Slide>
      <Cards>
        <CardWrapper>
          <Slide direction='left'>
            <Card
              Icon={FaReact}
              title={"React Specialist"}
              disc={`Building dynamic SPAs with React Hooks, Context API, and advanced component architecture`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='up'>
            <Card
              Icon={SiNextdotjs}
              title={"Next.js Pro"}
              disc={`Developing full-stack apps with Server-Side Rendering, Static Site Generation, and API routes`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='right'>
            <Card
              Icon={SiRedux}
              title={"State Management"}
              disc={`Mastering complex state handling with Redux Toolkit and modern middleware solutions`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='left'>
            <Card
              Icon={SiTailwindcss}
              title={"CSS Architect"}
              disc={`Crafting responsive UIs with Tailwind CSS, Styled Components, and CSS Modules`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='up'>
            <Card
              Icon={SiFirebase}
              title={"Backend Integration"}
              disc={`Implementing auth, databases, and cloud functions using Firebase services`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='right'>
            <Card
              Icon={FaJs}
              title={"JavaScript ES6+"}
              disc={`Modern JS development with async/await, functional programming, and API integration`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
      </Cards>
    </Container>
  );
};

export default MySkills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
  color: #ffffff;

  @media (max-width: 840px) {
    width: 90%;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    padding-bottom: 0.5rem;

    .green {
      color: #01be96;
      font-weight: 600;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 1px;
    background: linear-gradient(to right, #01be96 30%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 4rem;
  gap: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
