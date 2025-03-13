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
  }, []);

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

      <Footer>
        <FooterText>
          © 2024 PFC PACIFIC FISHERIES. All rights reserved.
        </FooterText>
      </Footer>
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
`;

const CarouselContainer = styled.section`
  height: 60vh;
  position: relative;
  overflow: hidden;
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
  }
`;

const Slogan = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
`;

const ServiceCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  color: #2980b9;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ServiceList = styled.ul`
  list-style-type: none;
  padding: 0;
  columns: 2;

  @media (max-width: 768px) {
    columns: 1;
  }
`;

const ServiceItem = styled.li`
  padding: 0.5rem 0;
  font-size: 1.1rem;
  color: #34495e;

  &::before {
    content: "•";
    color: #2980b9;
    margin-right: 0.5rem;
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 1.5rem;
  margin-top: auto;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export default Home;
