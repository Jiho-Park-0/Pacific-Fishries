import {
  TopContainer,
  Title,
  Separator,
  Image,
  ImageContainer,
  ContentBox,
  MainContent,
} from "./OverseasJointStyles";

const FocusProjects = () => {
  return (
    <>
      <TopContainer>
        <Title>Focus Projects in Future</Title>
        <Separator />
        <Image src="/logo/2.png" alt="overseas" />
      </TopContainer>
      <MainContent>
        <div className="content">
          <ContentBox>
            <div className="padding">
              ◆ Active expansion of processing and distribution of high
              value-added seafood: tuna for sashimi, well-being seafood,
              customized food for MZ generation
            </div>

            <div className="padding">
              ◆ Securing fishery resources and ensuring a stable supply chain by
              expanding local joint ventures
            </div>

            <div className="padding">
              ◆ Expansion of inermedaite trade of fishery products
            </div>

            <div className="padding">
              ◆ Entrance into the online marketing business by supplying
              diversified fishery products for school meals
            </div>

            <div className="padding">
              ◆ Expansion of in-house production facilities and diversification
              of supply products
            </div>
          </ContentBox>
          <ImageContainer>
            <Image src="/image/FocusProjects/1.jpg" alt="overseas" />
            <Image src="/image/FocusProjects/2.jpg" alt="overseas" />
            <Image src="/image/FocusProjects/3.jpg" alt="overseas" />
            <Image src="/image/FocusProjects/4.jpg" alt="overseas" />
          </ImageContainer>
        </div>
      </MainContent>
    </>
  );
};

export default FocusProjects;
