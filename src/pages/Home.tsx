import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.from(
    { length: 4 },
    (_, i) => `/image/main/${i + 1}.jpg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5초 간격으로 이미지 변경

    return () => clearInterval(interval);
  }, [images.length]);

  const services = [
    {
      title: "Seafood Processing & Distribution",
      items: [
        "Turna for sashimi",
        "Well-being seafood",
        "Customized food for MZ generation",
        "Trade of fishery products",
        "Products for school meals",
        "Distribution of fishery products",
      ],
    },
  ];

  return (
    <Container>
      <CarouselContainer>
        {images.map((image, index) => (
          <CarouselImage
            key={image}
            src={image}
            alt={`Background ${index + 1}`}
            active={index === currentImageIndex}
          />
        ))}
        <Overlay>
          <CompanyName>PFC PACIFIC FISHERIES</CompanyName>
          <Slogan>Premium Seafood Solution Provider</Slogan>
        </Overlay>
      </CarouselContainer>

      <ContentSection>
        <SectionTitle>Our Services</SectionTitle>

        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceList>
              {service.items.map((item, idx) => (
                <ServiceItem key={idx}>{item}</ServiceItem>
              ))}
            </ServiceList>
          </ServiceCard>
        ))}
      </ContentSection>
    </Container>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
const CarouselContainer = styled.section`
  height: 60vh;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 50vh;
  }

  @media (max-width: 480px) {
    height: 40vh;
  }
`;

const CarouselImage = styled.img<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
  animation: ${fadeIn} 1.5s ease-in-out;
  filter: brightness(0.7);
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;

const CompanyName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;
const ContentSection = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background: #2980b9;
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;

    &::after {
      width: 60px;
      height: 3px;
      margin: 0.75rem auto 0;
    }
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin: 2rem 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: #2980b9;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
  }
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem;
  background: #f8fafc;
  border-radius: 8px;
  transition: all 0.2s ease;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &::before {
    content: "✓";
    color: #2980b9;
    font-weight: 700;
    margin-right: 1rem;
    font-size: 1.1rem;
    min-width: 24px;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1rem;
      margin-right: 0.75rem;
    }
  }
`;

export default Home;
