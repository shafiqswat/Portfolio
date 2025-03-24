/** @format */

// Project.js
import React from "react";
import styled from "styled-components";

const Project = (props) => {
  const { img, disc, href } = props.item;

  return (
    <Container className='project'>
      <div className='image-container'>
        <img
          src={`${process.env.PUBLIC_URL}${img}`}
          alt='project'
        />
      </div>
      <div className='disc'>
        <div className='content'>
          <h3>Project Highlights</h3>
          <div className='description'>{disc}</div>
          {href && (
            <a
              href={href}
              target='_blank'
              rel='noreferrer'
              className='demo-btn'>
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </Container>
  );
};
export default Project;

// Project.js - Updated Styles
const Container = styled.div`
  height: 32rem; /* Increased height for better content display */
  background: rgba(255, 255, 255, 0.05);
  margin: 0 1rem;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  .image-container {
    height: 100%;
    overflow: hidden;
    border-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  .disc {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9); /* Darker background for better contrast */
    padding: 2rem;
    opacity: 0;
    transition: all 0.4s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto; /* Add scroll for overflow content */

    .content {
      transform: translateY(100%);
      transition: transform 6s ease;

      h3 {
        color: #01be96; /* Accent color for heading */
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid rgba(1, 190, 150, 0.3);
      }

      .description {
        color: rgba(255, 255, 255, 0.85); /* Brighter text color */
        font-size: 0.95rem;
        line-height: 1.7; /* Increased line height */
        white-space: pre-line;
        margin-bottom: 2rem;

        /* Bullet point styling */
        &::before {
          content: "•";
          color: #01be96;
          margin-right: 0.5rem;
        }
      }

      .demo-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.8rem 1.8rem;
        background: rgba(1, 190, 150, 0.15);
        color: #01be96;
        border-radius: 4px;
        text-decoration: none;
        transition: all 0.3s ease;
        font-weight: 500;
        border: 1px solid rgba(1, 190, 150, 0.3);

        &:hover {
          background: #01be96;
          color: white;
          transform: translateY(-2px);
        }

        &::after {
          content: "→";
          transition: transform 0.3s ease;
        }

        &:hover::after {
          transform: translateX(3px);
        }
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(1, 190, 150, 0.2);

    img {
      transform: scale(1.05);
    }

    .disc {
      opacity: 1;

      .content {
        transform: translateY(0);
      }
    }
  }

  @media (max-width: 768px) {
    height: 26rem;

    .disc {
      padding: 1.5rem;

      .content {
        h3 {
          font-size: 1.3rem;
        }

        .description {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
