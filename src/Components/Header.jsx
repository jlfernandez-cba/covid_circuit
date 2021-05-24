
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
            <a href="#" className="navbar-brand scroll-top">
              <div className="logo" />
            </a>
          </div>
          {/*/.navbar-header*/}
          <div id="main-nav" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/* <li><a href="indexEng.html"><img height="30px" src="img/english-language.svg" alt="English"></a></li> */}
              <li><a href="#" className="scroll-top">Inicio</a></li>
              <li><a href="#" className="scroll-link" data-id="about">About </a></li>
              <li><a href="#" className="scroll-link" data-id="results">Results </a></li>
              <li><a href="#" className="scroll-link" data-id="contact">Contact</a></li>
              {/* <li><a target="_blank" href="http://hipathia.babelomics.org/covid19/" data-id="extern">CoV-Hipathia</a></li>
                        <li><a target="_blank" href="http://hipathia.babelomics.org/" data-id="extern">Hipathia</a></li> */}
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
