import type React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
`;

const Main = styled.main`
  flex-grow: 1;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  );
}
