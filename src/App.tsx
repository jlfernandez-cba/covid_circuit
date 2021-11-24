import WhatWeDo from "./Components/WhatWeDo";
import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

import { RecoilRoot } from "recoil";
import News from './Components/News';

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
