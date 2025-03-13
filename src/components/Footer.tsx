import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: white;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  text-align: left;

  p {
    color: #242424;
  }

  div {
    color: #4e5968;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <p>&copy; 2025 PFC PACIFIC FISHERIES. All rights reserved.</p>
        <div>사업자 등록번호 : 107-87-30053 | 대표 : 박규복</div>
        <div>(49466) 부산광역시 사하구 장림번영로104번길 55</div>
      </Container>
    </FooterWrapper>
  );
}
