import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common
import Header from "./Components/Header";
import Logos from "./Components/Logos";
import Footer from "./Components/Footer";

// components
import WhatWeDo from "./Components/WhatWeDo";
import About from "./Components/About";
import Results from "./Components/Results";
import ClinicalInterest from "./Components/ClinicalInterest";
import News from "./Components/News";
import Contact from "./Components/Contact";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="Site">

          <Header />
          <div className="Site-content">
            <Routes>

              {/* english routes */}

              <Route path='/COVID_circuit' element={<WhatWeDo />} />
              <Route path='/about' element={<About />} />
              <Route path='/results' element={<Results />} />
              <Route path='/clinical' element={<ClinicalInterest />} />
              <Route path='/news' element={<News />} />
              <Route path='/contact' element={<Contact />} />
              {/* spanish routes */}
            </Routes>
          </div>
          <Logos />
          <Footer />
        </div>
      </BrowserRouter >
    </RecoilRoot>

  );
}

export default App;
