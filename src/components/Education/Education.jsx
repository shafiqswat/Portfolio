import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <Container id="education">
      <Slide direction="down">
        <h1>My <span className="green">Education</span></h1>
      </Slide>
      <Cards>
        <Slide direction="up">
          <Card>
            <Icon><FaGraduationCap /></Icon>
            <Content>
              <h3>BS Software Engineering</h3>
              <h4>University of Swat</h4>
              <p>First semester completed</p>
            </Content>
          </Card>
        </Slide>
        <Slide direction="up">
          <Card>
            <Icon><FaGraduationCap /></Icon>
            <Content>
              <h3>FSc (Computer Science)</h3>
              <p>Strong foundation in programming and computing concepts</p>
            </Content>
          </Card>
        </Slide>
      </Cards>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;
  color: #fff;

  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    font-size: 1.9rem;
    font-family: "Secular One", sans-serif;
    margin-bottom: 2rem;
    
    .green {
      color: #01be96;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #01be96;
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #01be96;
`;

const Content = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #ddd;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.95rem;
  }
`;
