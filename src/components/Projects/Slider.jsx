/** @format */

import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "/images/agglomerate.png", // Placeholder for Glance
    disc: `Web Scraping Engineer — Glance
    • Built and maintained large-scale web scrapers
    • Extracted structured data from complex websites & documents
    • Implemented deduplication and normalization systems
    [Python, Puppeteer, Playwright, Node.js]`,
    href: "#", // No link provided
  },
  {
    img: "/images/destiners.png", // Placeholder for TDI
    disc: `Data & Automation Developer — TDI International
    • Developed crawlers for structured and unstructured data
    • Improved scraping accuracy by 40%
    • Designed reusable scraping utilities
    [Node.js, Cheerio, API Integration]`,
    href: "#",
  },
  {
    img: "/images/agora.png",
    disc: `Full-Stack E-commerce — Agora
    • Contributed to data-driven web solutions
    • Integrated APIs and automation pipelines
    • AI-powered visual search & Stripe payments
    [React, Node.js, Redux, MongoDB]`,
    href: "https://agora-1c17a.web.app/",
  },
  {
    img: "/images/instagram.png",
    disc: `Social Media Clone — Full Stack
    • Real-time CRUD with Firebase
    • Auth, Firestore, Infinite Scroll
    • Responsive Shadcn UI
    [Next.js 13, Firebase, Tailwind CSS]`,
    href: "https://insta-pk.vercel.app/",
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
