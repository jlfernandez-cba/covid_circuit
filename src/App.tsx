import Header from "./Components/Header";
import WhatWeDo from "./Components/WhatWeDo";
import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

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
        <Contact />
        <Logos />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
