import styled from "styled-components";

interface WhiteBoxProps {
  color?: string;
}

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Separator = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: black;
  margin: 0 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
  }
`;

export const MainContent = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  .bold {
    font-weight: bold;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export const WhiteBox = styled.div<WhiteBoxProps>`
  width: 93%;
  max-width: 460px;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  color: ${({ color }) => color || "black"};
  border-radius: 5px;
`;

export const ContentBox = styled.div`
  padding-top: 1rem;
  padding-right: 1rem;

  .padding {
    padding-bottom: 1rem;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 440px;

  img {
    width: 200px;
    height: 100%;
  }
`;
