// import "../../public/fonts/Fonts.css";
import styled from "styled-components";

const GreetingOfCeo = () => {
  return (
    <Container>
      <Title>greeting of ceo</Title>

      <Content>
        We have been engaged in the fishery products fishing and processing and
        distribution industry for over 30 years, and have been striving to
        improve the quality of the domestic seafood distribution market and
        maintain reasonable prices by always supplying high-quality seafood to
        consumers.
      </Content>
      <Content>
        In addition, we have been pioneering overseas markets through active
        joint ventures, and we are expanding our fishing grounds, which are
        decreasing day by day due to the resource protectionism of each country,
        and at the same time, we are striving to secure various fishery
        resources.
      </Content>
      <Content>
        We will do our best for the development of the company through the
        expansion of trade to the global market while increasing consumer
        satisfaction through ceaseless efforts and by supplying safe and healthy
        seafoods.
      </Content>
      <Content>Thank you.</Content>

      <Title>company history</Title>
      <div>
        <TextContent>
          <Year>2009. </Year>
          <Day>12</Day>
          <span>Incorporation in (Pain-in capital of USD 50,000)</span>
        </TextContent>
        <TextContent>
          <Year>2010. </Year>
          <Day>01</Day>
          <span>Implementation of a joint venture business in Chile</span>
        </TextContent>
        <TextContent>
          <Year>2010. </Year>
          <Day>01</Day>
          <span>Implementation of 1st joint fishing business in Canada</span>
        </TextContent>
        <TextContent>
          <Year>2012. </Year>
          <Day>04</Day>
          <span>Implementation of 2st joint fishing business in Canada</span>
        </TextContent>
        <TextContent>
          <Year>2012. </Year>
          <Day>10</Day>
          <span>
            Implementation of a joint fishery products business in Argentina
          </span>
        </TextContent>
        <TextContent>
          <Year>2015. </Year>
          <Day>08</Day>
          <span>
            Commencement of a processing and distribution business of Peru Giant
            Squid
          </span>
        </TextContent>
        <TextContent>
          <Year>2019. </Year>
          <Day>05</Day>
          <span>
            Movement of the headquarters office and factory (Located in
            Jangnim-dong, Saha-gu, Busan)
          </span>
        </TextContent>
        <TextContent>
          <Year>2012. </Year>
          <Day>09</Day>
          <span>
            Incresement of the capital of USD 50,000 (Paid-in capital of USD
            100,000)
          </span>
        </TextContent>
      </div>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Neuropol", sans-serif;
  font-size: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Neuropol", sans-serif;
  font-size: 2em;
  font-weight: normal;
  color: #0055aa; /* 색상은 필요에 따라 변경 */
  text-transform: uppercase; /* 대문자 변환 */
  letter-spacing: 0.05em; /* 글자 간격 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* 텍스트 그림자 */
  margin-bottom: 20px;
`;

const Content = styled.div`
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 16px;
`;

const Year = styled.span`
  color: orange;
  font-weight: bold;
`;

const Day = styled.span`
  color: orange;
`;

const TextContent = styled.div`
  display: flex;
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 16px;
  gap: 10px;
`;

export default GreetingOfCeo;
