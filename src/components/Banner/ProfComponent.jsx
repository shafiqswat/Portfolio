/** @format */
import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const handleCall = () => {
    const phoneNumber = "+923470817600";
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_blank", "noreferrer");
  };

  return (
    <Container id='home'>
      <Slide direction='left'>
        <Texts>
          <h4>
            Hello <span className='highlight'>I'm</span>
          </h4>
          <h1 className='highlight'>Muhammad Shafiq</h1>
          <h3>Frontend Developer & CS Student</h3>
          <h3>🚀 Crafting Dynamic Web Experiences with Modern Tech Stack</h3>
          <p>
            🌟 Second-year Computer Science student passionate about frontend
            development. Proficient in <strong>React.js</strong> and{" "}
            <strong>Next.js</strong> frameworks, with expertise in{" "}
            <strong>Tailwind CSS</strong>, <strong>Styled Components</strong>,
            and <strong>Modular CSS</strong> for beautiful, responsive designs.
          </p>
          <p>
            🔥 Skilled in state management using <strong>Redux</strong> and{" "}
            <strong>Context API</strong>, with backend integration experience
            through <strong>Firebase</strong>. Proficient in UI libraries like{" "}
            <strong>Ant Design</strong> and <strong>Shadcn/ui</strong>, and form
            handling with <strong>react-hook-form</strong> +{" "}
            <strong>Zod</strong> validation.
          </p>

          <ActionButton onClick={handleCall}>Let's talk</ActionButton>
          <Social>
            <p>Check out my</p>
            <div className='social-icons'>
              <span>
                <a
                  href='https://www.instagram.com/shafiqdeveloper/'
                  target='_blank'
                  rel='noreferrer'>
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  href='https://agora-1c17a.web.app/'
                  target='_blank'
                  rel='noreferrer'>
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a
                  href='https://www.linkedin.com/in/muhammad-shafiq-419a4327b/'
                  target='_blank'
                  rel='noreferrer'>
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction='right'>
        {/* <Profile>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt='profile'
          />
        </Profile> */}
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 940px) {
    flex-direction: column;
  }
`;

const Texts = styled.div`
  flex: 1;
  color: #ffffff;

  h4 {
    padding: 1rem 0;
    font-weight: 500;
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);

    .highlight {
      color: #01be96;
      font-weight: 600;
    }
  }

  h1 {
    font-size: 2.5rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, #01be96 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    color: rgba(255, 255, 255, 0.9);

    &:nth-of-type(1) {
      margin-bottom: 0.5rem;
    }

    &:nth-of-type(2) {
      color: #01be96;
      font-weight: 600;
      margin-bottom: 2rem;
    }
  }

  p {
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);

    strong {
      color: #01be96;
      font-weight: 500;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #01be96;
        opacity: 0.3;
      }
    }
  }
`;

const ActionButton = styled.button`
  padding: 0.9rem 2.5rem;
  margin-top: 2rem;
  cursor: pointer;
  background-color: #01be96;
  border: none;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(1, 190, 150, 0.3);

    &::before {
      left: 100%;
    }
  }
`;

const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);

    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    span {
      width: 2.5rem;
      height: 2.5rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: all 0.3s ease;

      &:hover {
        transform: rotate(360deg) scale(1.1);
        background-color: #00d1a4;
      }

      a {
        color: #fff;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.1rem;
      }
    }
  }
`;

const Profile = styled.div`
  img {
    width: 20rem;
    height: 28rem;
    filter: drop-shadow(0px 10px 20px rgba(1, 190, 150, 0.3));
    transition: transform 400ms ease-in-out;
    border-radius: 10px;

    @media (max-width: 940px) {
      width: 100%;
      object-fit: cover;
      height: auto;
      aspect-ratio: 1/1;
    }
  }

  &:hover img {
    transform: translateY(-10px) scale(1.02);
  }
`;
