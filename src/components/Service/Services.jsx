/** @format */
import React from "react";
import { FaReact, FaBootstrap, FaJs, FaCss3 } from "react-icons/fa";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const MySkills = () => {
  return (
    <Container id='skills'>
      <Slide direction='down'>
        <h4>
          My <span className='green'>skills</span>
        </h4>
        <h1>What I Excel In</h1>
      </Slide>
      <Cards>
        <CardWrapper>
          <Slide direction='left'>
            <Card
              Icon={FaReact}
              title={"React Developer"}
              disc={`Passionate about crafting dynamic web applications with React. 
                  I specialize in building interactive and efficient user interfaces.`}
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='up'>
            <Card
              Icon={FaBootstrap}
              title={"Bootstrap Enthusiast"}
              disc={`Utilizing Bootstrap for responsive and visually appealing designs. 
                  I ensure seamless compatibility across devices and browsers.`}
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='right'>
            <Card
              Icon={FaJs}
              title={"JavaScript Maestro"}
              disc={`Expertise in creating dynamic and interactive web pages with JavaScript. 
                  Leveraging the power of JS to enhance user experiences.`}
            />
          </Slide>
        </CardWrapper>
        <CardWrapper>
          <Slide direction='left'>
            <Card
              Icon={FaCss3}
              title={"CSS3 Artisan"}
              disc={`Bringing designs to life with CSS3. From layout to animations, 
                  I ensure a visually stunning and responsive user experience.`}
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
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  width: 100%;
`;
