import styled from "styled-components";
import { Link } from "react-router-dom"; // 변경된 부분

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

const Logo = styled(Link)`
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

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: #4e5968;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">
          <img src="/logo/5.png" alt="logo" />
          Pacific Fisheries
        </Logo>
        <Nav>
          <Link to="/OverseasBusiness">Overseas Business</Link>
          <Link to="/FocusProjects">FocusProjects</Link>
          <Link to="/CompanyOverview">Company Overview</Link>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}
