import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <Container id="about">
      <Slide direction="left">
        <Content>
          <h1>About <span className="green">Me</span></h1>
          <p>
            I am a Full-Stack Developer and Scraping Engineer focused on building modern applications and intelligent data-collection systems.
          </p>
          <p>
            I have hands-on experience scraping complex platforms, handling dynamic websites, PDFs, APIs, and building automation pipelines for large datasets. Alongside scraping, I develop full-stack applications using React and Node.js with clean UI and solid backend architecture.
          </p>
          <p>
            I enjoy solving real-world problems involving data, performance, and automation.
          </p>
        </Content>
      </Slide>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 1.9rem;
    font-family: "Secular One", sans-serif;
    margin-bottom: 1.5rem;
    color: #fff;

    .green {
      color: #01be96;
    }
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;
