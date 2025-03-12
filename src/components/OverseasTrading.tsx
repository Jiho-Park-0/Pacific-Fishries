import * as Styles from "./OverseasJointStyles";

const OverseasTraining: React.FC = () => {
  return (
    <>
      <Styles.TopContainer>
        <Styles.Title>Overseas Trading Business</Styles.Title>
        <Styles.Separator />
        <Styles.Image src="/logo/2.png" alt="overseas" />
      </Styles.TopContainer>
      {/* USA */}
      <Styles.MainContent>
        <Styles.WhiteBox color="blue">
          <span>
            <span className="bold">The United States of America</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Local Customer: </span>
              GREAT NOTHERN PRODUCTS, LTD & Others{" "}
            </p>

            <p>
              <span className="bold">Products: </span>
              Squid (for processing and bait), Skate, Salmon, Ray and Others
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasTrading/US_1.jpg" alt="overseas" />
            <img src="/image/OverseasTrading/US_2.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
      {/* Peru */}
      <Styles.MainContent>
        <Styles.WhiteBox color="blue">
          <span>
            <span className="bold">Peru</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Local Customer: </span>
              ALTMAR FOODS CORP Located in PERU PAITA, THAXU EXPORT SAC,
              SERMARSU S.A.C., COMEX ANDINA SL and Others{" "}
            </p>

            <p>
              <span className="bold">Products: </span>
              Steamed body (DARUMA), Leg, Ear and Body (FILLET) of Giant Squid
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasTrading/Peru_1.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
      {/* Argentina */}
      <Styles.MainContent>
        <Styles.WhiteBox color="blue">
          <span>
            <span className="bold">Argentina</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Local Customer: </span>
              ARDAPEZ S.A. and Others{" "}
            </p>

            <p>
              <span className="bold">Products: </span>
              Shrimp, Squid, Red Sea-Bream, Skate, Ray and Others{" "}
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasTrading/Argentina_1.jpg" alt="overseas" />
            <img src="/image/OverseasTrading/Argentina_2.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
      {/* China */}
      <Styles.MainContent>
        <Styles.WhiteBox color="blue">
          <span>
            <span className="bold">China</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Local Customer: </span>
              NING KANG HONG KONG TRADE CP., LTD. and Others{" "}
            </p>

            <p>
              <span className="bold">Products: </span>
              Hairtail, Large Yellow Croake, Squid{" "}
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasTrading/China_1.jpg" alt="overseas" />
            <img src="/image/OverseasTrading/China_2.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
    </>
  );
};

export default OverseasTraining;
