import Header from "./Components/Header";
import WhatWeDo from "./Components/WhatWeDo";
import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

// import AreaChartFillByValue from './Components/graphs/AreaChartFillByValue'
import PercentStackedArea from "./Components/graphs/PercentStackedArea";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <WhatWeDo />
        <About />
        <Results />
        <ClinicalInterest />

        {/*
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <br />
            <p className="text-justify" style={{ fontSize: 18 }}>
              Graphs:
            </p>
            <br />
            <br />

            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9">
                <PercentStackedArea />
              </div>
            </div>

            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9">
                {/* <AreaChartFillByValue></AreaChartFillByValue> * / }
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      */ }

        <Contact />
        <Logos />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
