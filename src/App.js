import Header from './Components/Header'
import WhatWeDo from './Components/WhatWeDo'
import Results from './Components/Results'
import ClinicalInterest from './Components/ClinicalInterest'
import About from './Components/About'
import Contact from './Components/Contact'

import Logos from './Components/Logos'
import Footer from './Components/Footer'

// import StackedArea from './Components/graphs/StackedArea'
// import AreaChartFillByValue from './Components/graphs/AreaChartFillByValue'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <WhatWeDo></WhatWeDo>
      <About></About>
      <Results></Results>
      <ClinicalInterest></ClinicalInterest>

      {/*
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <StackedArea></StackedArea>
          </div>
          <div className="col-md-6">

            <AreaChartFillByValue></AreaChartFillByValue>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      */}

      <Contact></Contact>
      <Logos></Logos>
      <Footer></Footer>
    </div>
  );
}

export default App;
