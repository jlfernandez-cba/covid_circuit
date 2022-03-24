
import TranslatedText from "../i18n";
import circuitImg1 from "../img/image1.png";
import diagramFigure2 from "../img/sarscov2_workflow_diagram.pptx.svg";


function About() {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br />
              <TranslatedText textKey="about_text_title" />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={circuitImg1} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <TranslatedText textKey="about_text_fig1" />
              <br />
              <br />
              <TranslatedText textKey="about_text_1" />
              <img src={diagramFigure2} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <TranslatedText textKey="about_text_Table1" />
              <br />

              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover" style={{ textAlign: 'center' }}>
                  <tbody>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Province</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>Sampling Hospital</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>Reference Hospital</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>PC</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>TOTAL</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Almería</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Torrecárdenas</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Jaén</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. de Jaén</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Granada</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Málaga</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen de la Victoria</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. San Cecilio</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Cádiz</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Puerta del Mar</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Córdoba</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Reina Sofía</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Huelva</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Juan Ramón Jiménez</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Sevilla</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>H.U. Virgen del Rocío</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>32</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>8</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>40</p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={1} rowSpan={1}>
                        <p>Total -</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>&nbsp;</td>
                      <td colSpan={1} rowSpan={1}>&nbsp;</td>
                      <td colSpan={1} rowSpan={1}>
                        <p>256</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>64</p>
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        <p>320</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <TranslatedText textKey="about_text_2" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
