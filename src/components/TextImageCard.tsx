import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;

const SmallHeader = styled.span`
  display: inline-block;
  color: #2d7df4;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.3;
  margin-bottom: 1rem;
  white-space: pre-line;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Image = styled.img`
  flex: 1;
  max-width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;

interface TextImageCardProps {
  imgUrl?: string;
  textTitle: string;
  textMain: string;
  textFooter: string;
  isLeft: boolean; // 새 prop
}

export function TextImageCard({
  imgUrl,
  textTitle,
  textMain,
  textFooter,
  isLeft,
}: TextImageCardProps) {
  return (
    <Container>
      {isLeft && <Image src={imgUrl} alt="이미지 설명" />}
      <TextSection>
        <SmallHeader>{textTitle}</SmallHeader>
        <Title>{textMain}</Title>
        <Description>{textFooter}</Description>
      </TextSection>
      {!isLeft && <Image src={imgUrl} alt="이미지 설명" />}
    </Container>
  );
}
