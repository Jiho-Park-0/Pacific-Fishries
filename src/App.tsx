import "./App.css";

import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import OverseasJoint from "./pages/OverseasBusiness";
import FocusProjects from "./pages/FocusProjects";
import GreetingOfCeo from "./pages/CompanyOverview";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OverseasBusiness" element={<OverseasJoint />} />
          <Route path="/FocusProjects" element={<FocusProjects />} />
          <Route path="/CompanyOverview" element={<GreetingOfCeo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
