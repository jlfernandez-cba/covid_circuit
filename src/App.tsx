import Header from "./Components/Header";
import WhatWeDo from "./Components/WhatWeDo";
import About from "./Components/About";
import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import News from "./Components/News";
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
        <News />
        <Contact />
        <Logos />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
