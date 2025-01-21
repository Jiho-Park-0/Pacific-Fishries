import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TextImageCard } from "./components/TextImageCard";

function App() {
  return (
    <>
      <Header />
      {/* 여기에 라우팅 또는 페이지 컨텐츠가 들어갑니다 */}

      <TextImageCard
        textTitle="타이틀 텍스트 입니다! 🚀"
        textMain="메인 텍스트 내용입니다. 간단한 설명이 들어갑니다."
        textFooter="푸터 텍스트 내용입니다."
        imgUrl="/image/1.jpg"
        isLeft={true}
      />

      <TextImageCard
        textTitle="타이틀 텍스트 입니다! 🚀"
        textMain="메인 텍스트 내용입니다. 간단한 설명이 들어갑니다."
        textFooter="푸터 텍스트 내용입니다."
        imgUrl="/image/2.jpg"
        isLeft={false}
      />

      <TextImageCard
        textTitle="타이틀 텍스트 입니다! 🚀"
        textMain="메인 텍스트 내용입니다. 간단한 설명이 들어갑니다."
        textFooter="푸터 텍스트 내용입니다."
        imgUrl="/image/3.jpg"
        isLeft={true}
      />

      <Footer />
    </>
  );
}

export default App;
