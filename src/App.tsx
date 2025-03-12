import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Carousel from "./components/Carousel";
import OverseasJoint from "./components/OverseasJoint";
import OverseasTraining from "./components/OverseasTrading";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />

      <Carousel />
      <MainContent>
        <OverseasJoint />
        <OverseasTraining />
      </MainContent>

      <Footer />
    </>
  );
}

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export default App;
