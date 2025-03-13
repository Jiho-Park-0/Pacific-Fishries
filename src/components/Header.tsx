import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderWrapper = styled.header`
  background-color: white;
  color: white;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 480px) {
    padding: 1rem;
  }
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

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    flex-direction: column;
    padding: ${({ $isOpen }) => ($isOpen ? "1rem" : "0 1rem")};
    max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;
  }

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

    @media (max-width: 480px) {
      padding: 1rem;
      text-align: center;
      &:hover {
        background-color: #f8f9fa;
      }
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #4e5968;
  padding: 0.5rem;

  @media (max-width: 480px) {
    display: block;
  }
`;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Logo to="/">
          <img src="/logo/5.png" alt="logo" />
        </Logo>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </MobileMenuButton>
        <Nav $isOpen={isMenuOpen}>
          <Link to="/OverseasBusiness" onClick={() => setIsMenuOpen(false)}>
            Overseas Business
          </Link>
          <Link to="/FocusProjects" onClick={() => setIsMenuOpen(false)}>
            FocusProjects
          </Link>
          <Link to="/CompanyOverview" onClick={() => setIsMenuOpen(false)}>
            Company Overview
          </Link>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}
