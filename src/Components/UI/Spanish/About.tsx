import circuitImg1 from "../../img/image1.png";

function About() {
  return (
    <div className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <h4 style={{ fontSize: 20 }}>Circuito de secuenciación del genoma completo del SARS-CoV-2</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={circuitImg1} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <p style={{ textAlign: "center", fontSize: 16 }}>
                <b>Figura 1. </b>{" "}
                <i> Circuito clínico para WGS de SARS-CoV-2 para vigilancia epidemiológica y apoyo a decisiones médicas </i>{" "}
              </p>
              <br />
              <br />
              <p style={{ textAlign: "justify", fontSize: 18 }}>
                El funcionamiento del circuito es el siguiente: Las muestras nasofaríngeas del SARS-CoV-2 (utilizadas para las
                pruebas de PCR) se recogen en los principales hospitales terciarios de de las ocho provincias andaluzas y
                remitido a los dos hospitales de referencia, el Hospital Clínico San Cecilio de Andalucía Oriental y el Hospital
                Universitario Virgen del Rocío de Andalucía Occidental (Figura 1A y Tabla 1), donde se extrae el ARN viral y se
                somete a WGS (Figura 1A y Tabla 1). 1B). Los datos de secuenciación sin procesar se transfieren al{" "}
                <a href="https://www.clinbioinfosspa.es/"> Área de Bioinformática </a> (Figura 1C), se procesan e indexan junto
                con los metadatos proporcionados automáticamente por el COVID. registro (Figura 1D), recogido previamente de los
                hospitales (Figura 1E). Los hallazgos resultantes (cepa, VOI y VOC) se informan a los hospitales de muestreo,
                para respaldar la decisión clínica (Figura 1G), y la información epidemiológica relevante se reporta al registro
                COVID (Figura 1F). <br />{" "}
              </p>
              <p style={{ textAlign: "center", fontSize: 16 }}>
                <b>Tabla 1. </b>{" "}
                <i>
                  {" "}
                  Selección de muestras semanales para secuenciación en diferentes provincias andaluzas en atención primaria
                  (AP) u hospitalizadas (H) pacientes{" "}
                </i>{" "}
              </p>
              <br />
              <div className="table-responsive">
                <table className="table table-bordered table-striped table-hover" style={{ textAlign: "center" }}>
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
                      <td colSpan={1} rowSpan={1}>
                        &nbsp;
                      </td>
                      <td colSpan={1} rowSpan={1}>
                        &nbsp;
                      </td>
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
              <p className="text-justify" style={{ fontSize: 18 }}>A diferencia de muchas otras iniciativas que consideran exclusivamente el uso primario de datos genómicos, aquí se ha prestado especial atención al uso secundario de datos genómicos para la investigación clínica. Andalucía cuenta con un recurso único, la <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud"> Base Poblacional de Salud (BPS)</a>. Allí se almacena toda la información clínica de todos los pacientes del Sistema de Salud de Andalucía (Figura 1H). <br /> <br /> El Área de Bioinformática envía todos los genomas virales al BPS (Figura 1I), donde se almacenan de forma permanente, vinculado a la información clínica de los pacientes. BPS dispone de un procedimiento para solicitar datos para uso secundario en{" "}<a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf ">{" "}investigación clínica{" "}</a>. Finalmente, el Área Bioinformática se encarga del envío de las secuencias genómicas virales a ENA para ponerlas a disposición de la comunidad científica (Figura 1J).{" "}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
