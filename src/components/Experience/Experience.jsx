import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const Experience = () => {
  return (
    <Container id="experience">
      <Slide direction="down">
        <h1>Professional <span className="green">Experience</span></h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card>
            <h3>Web Scraping Engineer</h3>
            <h4>Glance</h4>
            <ul>
              <li>Built and maintained large-scale web scrapers</li>
              <li>Extracted structured data from complex websites & documents</li>
              <li>Implemented deduplication, normalization, and error-handling systems</li>
              <li>Worked with dynamic pages, PDFs, and government/legal sources</li>
            </ul>
          </Card>
        </Slide>
        <Slide direction="right">
          <Card>
            <h3>Data & Automation Developer</h3>
            <h4>TDI International</h4>
            <ul>
              <li>Developed crawlers for structured and unstructured data</li>
              <li>Improved scraping accuracy and performance</li>
              <li>Designed reusable scraping utilities and services</li>
            </ul>
          </Card>
        </Slide>
        <Slide direction="left">
          <Card>
            <h3>Frontend / Data Projects</h3>
            <h4>Agora</h4>
            <ul>
              <li>Contributed to data-driven and web-based solutions</li>
              <li>Integrated APIs and automation pipelines with frontend systems</li>
            </ul>
          </Card>
        </Slide>
      </Cards>
    </Container>
  );
};

export default Experience;

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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 5px;
  border-left: 4px solid #01be96;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.1);
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #01be96;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #ddd;
    font-weight: 500;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
    }
  }
`;
