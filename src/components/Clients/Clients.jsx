/** @format */

import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";

let clients = [
  {
    name: "Mark Strong",
    position: "Frontend Developer",
    img_url: "/images/Client1.png",
    stars: 5,
    disc: `I was amazed by their expertise in React. They delivered high-quality code with a keen eye for detail and responsiveness. Working with them has been a delightful experience!`,
  },
  {
    name: "Alex Patel",
    position: "UI/UX Designer",
    img_url: "/images/Client2.png",
    stars: 4,
    disc: `Collaborating with them on UI/UX projects was seamless. Their Bootstrap skills brought a modern touch to our designs, ensuring a great user experience.`,
  },
  {
    name: "Ella Thompson",
    position: "Web Developer",
    img_url: "/images/Ella.png",
    stars: 5,
    disc: `Their proficiency in JavaScript and React significantly elevated the functionality of our projects. A true professional with exceptional technical skills!`,
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => (
    <ClientSlider
      item={item}
      key={i}
    />
  ));
  return (
    <Container id='client'>
      <Slide direction='left'>
        <span className='green'>testimonials</span>
        <h1>what clients say</h1>
      </Slide>
      <Testimonials>
        <Slider
          ref={arrowRef}
          {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 6rem 0;
  position: relative;

  @media (max-width: 840px) {
    width: 90%;
  }

  span.green {
    color: #01be96;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.1rem;
  }

  h1 {
    padding-top: 0.5rem;
    text-transform: capitalize;
    font-size: 2.5rem;
    font-family: "Secular One", sans-serif;
    background: linear-gradient(to right, #01be96 30%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
  }

  .slick-list {
    padding: 2rem 0;
  }

  .slick-dots {
    bottom: -2rem;

    li {
      margin: 0 0.3rem;

      button {
        width: 12px;
        height: 4px;
        background: rgba(1, 190, 150, 0.3);
        transition: all 0.3s ease;

        &::before {
          content: "";
        }
      }

      &.slick-active button {
        background: #01be96;
        width: 20px;
      }
    }
  }
`;

const Testimonials = styled.div`
  margin-top: 3rem;
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Buttons = styled.div`
  position: absolute;
  right: 2rem;
  bottom: -4rem;
  display: flex;
  gap: 1rem;

  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(1, 190, 150, 0.1);
    border: 2px solid #01be96;
    color: #01be96;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #01be96;
      color: white;
      transform: scale(1.1);
    }

    svg {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    position: static;
    justify-content: center;
    margin-top: 2rem;
  }
`;
