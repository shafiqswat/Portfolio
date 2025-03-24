/** @format */

import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "/images/agora.png",
    disc: `Full-stack e-commerce platform built with React.js + Node.js featuring:
    • Modern UI using Shadcn UI component library
    • Advanced product management (details, comparisons, recommendations)
    • AI-powered visual search using image recognition
    • Stripe payment gateway integration
    • Cart system with shipping address management
    • JWT & Google authentication
    • Responsive design with modular CSS architecture
    [Frontend Focus - React.js, Redux Toolkit, Axios]`,
    href: "https://agora-1c17a.web.app/",
  },
  {
    img: "/images/instagram.png",
    disc: `Next.js social media clone with Firebase integration:
    • Real-time CRUD operations for posts/comments
    • Firebase Authentication & Firestore database
    • Infinite scroll with react-infinite-scroll-component
    • Follow/unfollow system with user profiles
    • Like/favorite functionality with instant updates
    • Search API for user discovery
    • Moment.js integration for time formatting
    • Full responsive design using Tailwind CSS
    [Solo Full-Stack Development - Next.js 13, Firebase, Shadcn UI]`,
    href: "https://insta-pk.vercel.app/",
  },
  {
    img: "/images/petsbroz.png",
    disc: `Pet care marketplace landing page
    • Responsive UI with CSS Grid/Flexbox
    • Interactive product showcases
    • Basic contact forms with Formik
    [Early Career Project - React.js, Bootstrap]`,
    href: "https://www.petsbroz.com/",
  },
  {
    img: "/images/toyride.png",
    disc: `E-commerce template for toy store
    • Product category layouts
    • Basic shopping cart implementation
    • Hero sections with CSS animations
    [Learning Project - Vanilla JS, CSS3]`,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
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
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project
      item={item}
      key={i}
    />
  ));
  return (
    <Container>
      <Slider
        ref={arrowRef}
        {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'>
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'>
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

// SliderComp.js - Button Positioning Fix
const Buttons = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    background: rgba(1, 190, 150, 0.2);
    border: 2px solid #01be96;
    cursor: pointer;
    color: #01be96;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 2; /* Ensure buttons stay on top */

    &:hover {
      background: #01be96;
      color: white;
      transform: translateY(-50%) scale(1.1);
    }

    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }

  .back {
    left: -4.5rem;
  }

  .next {
    right: -4.5rem;
  }

  @media (max-width: 768px) {
    .back {
      left: -1rem;
    }
    .next {
      right: -1rem;
    }
  }

  @media (max-width: 480px) {
    button {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
