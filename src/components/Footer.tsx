import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f9fafb;
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
        <p>&copy; 2025 회사명. All rights reserved.</p>
        <div>사업자 등록번호 : 000-00-00000 | 대표 : XXX</div>
        <div>
          00000 부산광역시 어디구 어디동 어디어디 000-0000 (어디어디 건물)
        </div>
      </Container>
    </FooterWrapper>
  );
}
