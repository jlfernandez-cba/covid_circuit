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
          <div id="main-nav" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <button className="scroll-top buttonAnchor">Inicio</button>
              </li>
              <li>
                <button className="scroll-link buttonAnchor" data-id="about">
                  About
                </button>
              </li>
              <li>
                <button className="scroll-link buttonAnchor" data-id="results">
                  Results
                </button>
              </li>
              <li>
                <button className="scroll-link buttonAnchor" data-id="clinical-interest">
                  Clinical Interest
                </button>
              </li>
              <li>
                <a
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all"
                  target="_blank"
                  rel="noreferrer"
                  data-id="localNextrain"
                >
                  NextStrain Map
                </a>
              </li>
              <li>
                <button className="scroll-link buttonAnchor" data-id="contact">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
