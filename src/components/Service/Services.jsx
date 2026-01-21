/** @format */
import React from "react";
import { FaReact, FaTools } from "react-icons/fa";
import {
  SiPuppeteer,
  SiNodedotjs, 
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
              title={"Frontend"}
              disc={`React.js, Next.js, Tailwind CSS, CSS Modules, Styled Components, Shadcn/UI, Ant Design, Responsive UI, Performance Optimization`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='up'>
            <Card
              Icon={SiNodedotjs}
              title={"Backend & Full Stack"}
              disc={`Node.js, Express.js, REST APIs, Authentication, Firebase, MongoDB, Server-side rendering, API routes`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='right'>
            <Card
              Icon={SiPuppeteer}
              title={"Web Scraping & Automation"}
              disc={`Puppeteer, Playwright, Cheerio, Large-scale crawlers, PDF & document scraping, Proxy handling, anti-bot bypass, Data cleaning & normalization`}
              color='#01be96'
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='left'>
            <Card
              Icon={FaTools}
              title={"Programming & Tools"}
              disc={`JavaScript (ES6+), Git, GitHub, Postman, Linux / VPS environments`}
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
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;
