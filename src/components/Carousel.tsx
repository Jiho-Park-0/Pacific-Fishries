import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface IndicatorDotProps {
  $active: boolean;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const totalSlides = 4;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <CarouselWrapper>
      <CarouselContent>
        {[...Array(totalSlides)].map((_, index) => (
          <CarouselItem key={index} $active={index === currentIndex}>
            <img
              src={`/image/main/${index + 1}.jpg`}
              alt={`Carousel ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <ControlsContainer>
        <Indicators>
          {[...Array(totalSlides)].map((_, index) => (
            <IndicatorDot
              key={index}
              $active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Indicators>
        <AutoPlayButton onClick={toggleAutoPlay} $isPlaying={isAutoPlaying}>
          {isAutoPlaying ? (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
            </svg>
          )}
        </AutoPlayButton>
      </ControlsContainer>
    </CarouselWrapper>
  );
};

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const CarouselContent = styled.div`
  position: relative;
  height: 100%;
`;

const CarouselItem = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  z-index: ${(props) => (props.$active ? 1 : 0)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ControlsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 2;
`;

const Indicators = styled.div`
  display: flex;
  gap: 10px;
`;

const IndicatorDot = styled.div<IndicatorDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.$active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ffffff;
  }
`;

const AutoPlayButton = styled.button<{ $isPlaying: boolean }>`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => (props.$isPlaying ? "#fff" : "rgba(255, 255, 255, 0.7)")};

  &:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

export default Carousel;
