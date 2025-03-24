/** @format */

// ClientSlider.js
import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const ClientSlider = ({ item }) => {
  const stars = Array(item.stars).fill(<FaStar />);

  return (
    <Card>
      <Header>
        <img
          src={process.env.PUBLIC_URL + item.img_url}
          alt={item.name}
        />
        <div>
          <Name>{item.name}</Name>
          <Position>{item.position}</Position>
        </div>
      </Header>
      <Stars>
        {stars.map((star, i) => (
          <FaStar key={i} />
        ))}
      </Stars>
      <Testimonial>{item.disc}</Testimonial>
    </Card>
  );
};

const Card = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 0 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(1, 190, 150, 0.1);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #01be96;
  }
`;

const Name = styled.h3`
  color: #fff;
  margin: 0;
  font-size: 1.2rem;
`;

const Position = styled.p`
  color: #01be96;
  margin: 0;
  font-size: 0.9rem;
`;

const Stars = styled.div`
  color: #ffd700;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.3rem;
`;

const Testimonial = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
`;

export default ClientSlider;
