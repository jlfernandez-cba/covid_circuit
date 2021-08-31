
function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-header">
            <button type="button" id="nav-toggle" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <button className="buttonAnchor navbar-brand scroll-top">
              <div className="logo" />
            </button>
          </div>
          {/*/.navbar-header*/}
          <div id="main-nav" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/* <li><a href="indexEng.html"><img height="30px" src="img/english-language.svg" alt="English"></a></li> */}
              <li><button className="scroll-top buttonAnchor">Inicio</button></li>
              <li><button className="scroll-link buttonAnchor" data-id="about">About</button></li>
              <li><button className="scroll-link buttonAnchor" data-id="results">Results</button></li>
              <li><button className="scroll-link buttonAnchor" data-id="clinical-interest">Clinical Interest</button></li>
              <li><a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all" target="_blank" rel="noreferrer" data-id="localNextrain">NextStrain Map</a></li>
              <li><button className="scroll-link buttonAnchor" data-id="contact">Contact</button></li>
              {/* <li><a target="_blank" href="https://hipathia.babelomics.org/covid19/" data-id="extern">CoV-Hipathia</a></li>
                        <li><a target="_blank" href="https://hipathia.babelomics.org/" data-id="extern">Hipathsia</a></li> */}
            </ul>
          </div>
          {/*/.navbar-collapse*/}
        </nav>
        {/*/.navbar*/}
      </div>
      {/*/.container*/}
    </div>
  );
}

export default Header;
