import React from "react";
import * as Styles from "./OverseasJointStyles";

const OverseasJoint: React.FC = () => {
  return (
    <>
      <Styles.TopContainer>
        <Styles.Title>Overseas Joint Venture Business</Styles.Title>
        <Styles.Separator />
        <Styles.Image src="/logo/2.png" alt="overseas" />
      </Styles.TopContainer>
      {/* Chile */}
      <Styles.MainContent>
        <Styles.WhiteBox color="navy">
          <span>
            Joint Venture bussiness in <span className="bold">Chile</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Companies:</span>
              PESQUERA PESANTICA TLDA, PESQUERA ARTESANAL GUAITECAS S.A.
            </p>
            <p>
              <span className="bold">Vessel:</span>
              Three vessels of JOSEPINA, NAJARET & PESANTICA
            </p>
            <p>
              <span className="bold">Fish Type:</span>
              Tuna, Shark, Skate, Toothfish, Red catfish and Others
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasJoint/Chile_1.jpg" alt="overseas" />
            <img src="/image/OverseasJoint/Chile_2.jpg" alt="overseas" />
            <img src="/image/OverseasJoint/Chile_3.jpg" alt="overseas" />
            <img src="/image/OverseasJoint/Chile_4.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
      {/* Canada 1 */}
      <Styles.MainContent>
        <Styles.WhiteBox color="purple">
          <span>
            The 1st Joint Fishing Business in{" "}
            <span className="bold">Canada</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Joint Company</span>
              VIKING SEAFOODS LTD{" "}
            </p>
            <p>
              <span className="bold">Vessel:</span>
              VIKING ENTERPRISE (TRAWL Fishing Ship)
            </p>
            <p>
              <span className="bold">Fish Type:</span>
              Pollack, Skate, and Ohter Benthic Fish
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img src="/image/OverseasJoint/Canada_first_1.jpg" alt="overseas" />
            <img src="/image/OverseasJoint/Canada_first_2.jpg" alt="overseas" />
            <img src="/image/OverseasJoint/Canada_first_3.jpg" alt="overseas" />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
      {/* Canada 2 */}
      <Styles.MainContent>
        <Styles.WhiteBox color="purple">
          <span>
            The 2st Joint Fishing Business in{" "}
            <span className="bold">Canada</span>
          </span>
        </Styles.WhiteBox>
        <div className="content">
          <Styles.ContentBox>
            <p>
              <span className="bold">Joint Company</span>
              KNOTT HYUNCHANG FISHERIES CO. LTD.
            </p>
            <p>
              <span className="bold">Vessel:</span>
              OUTLAW V (TRAWL Fishing Ship)
            </p>
            <p>
              <span className="bold">Fish Type:</span>
              Pollack, Skate, and Ohter Benthic Fish
            </p>
          </Styles.ContentBox>
          <Styles.ImageContainer>
            <img
              src="/image/OverseasJoint/Canada_second_1.jpg"
              alt="overseas"
            />
            <img
              src="/image/OverseasJoint/Canada_second_2.jpg"
              alt="overseas"
            />
            <img
              src="/image/OverseasJoint/Canada_second_3.jpg"
              alt="overseas"
            />
          </Styles.ImageContainer>
        </div>
      </Styles.MainContent>
    </>
  );
};

export default OverseasJoint;
