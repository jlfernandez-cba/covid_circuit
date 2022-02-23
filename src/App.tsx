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
              <Route path='COVID_circuit/' element={<WhatWeDo />} />
              <Route path='COVID_circuit/about' element={<About />} />
              <Route path='COVID_circuit/results' element={<Results />} />
              <Route path='COVID_circuit/clinical' element={<ClinicalInterest />} />
              <Route path='COVID_circuit/news' element={<News />} />
              <Route path='COVID_circuit/contact' element={<Contact />} />

              <Route path='*' element={<WhatWeDo />}></Route>
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
