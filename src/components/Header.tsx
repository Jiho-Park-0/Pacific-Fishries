import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: white;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #4e5968;
  display: flex;

  img {
    width: auto;
    height: 30px;
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Logo href="/">
          <img src="/logo/5.png" alt="logo" />
          Pacific Fisheries
        </Logo>
      </Container>
    </HeaderWrapper>
  );
}
