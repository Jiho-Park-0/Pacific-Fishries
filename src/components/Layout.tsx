import type React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Carousel from "./Carousel";
import { useLocation } from "react-router-dom"; // 추가된 부분

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
`;

const Main = styled.main`
  flex-grow: 1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation(); // 추가된 부분

  return (
    <LayoutWrapper>
      <Header />
      {location.pathname !== "/" && <Carousel />} {/* 수정된 부분 */}
      <Main>
        <MainContent>{children}</MainContent>
      </Main>
      <Footer />
    </LayoutWrapper>
  );
}
