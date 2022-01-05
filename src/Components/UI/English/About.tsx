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
              <h4 style={{ fontSize: 20 }}>SARS-CoV-2 whole genome sequencing circuit</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={circuitImg1} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <p style={{ textAlign: "center", fontSize: 16 }}>
                <b>Figure 1.</b>{" "}
                <i>Clinical circuit for WGS of SARS-CoV-2 for epidemiologic surveillance and medical decision support</i>
              </p>
              <br />
              <br />
              <p style={{ textAlign: "justify", fontSize: 18 }}>
                The operation of the circuit is as follows: SARS-CoV-2 naso-pharingeal samples (used for PCR testing) are
                collected in the main tertiary hospitals of the eight Andalusian provinces and sent to the two reference
                hospitals, the San Cecilio Clinical Hospital for Eastern Andalusia, and Virgen del Rocio University Hospital for
                Western Andalusia (Figure 1A and Table 1), where the viral RNA is extracted and subjected to WGS (Figure 1B).
                Raw sequencing data is transferred to the <a href="https://www.clinbioinfosspa.es/">Bioinformatics Area</a>{" "}
                (Figure 1C), processed, and indexed along with the meta-data automatically provided by the COVID registry
                (Figure 1D), previously collected from the hospitals (Figure 1E). The resulting findings (strain, VOIs and VOCs)
                are reported back to the sampling hospitals, for supporting clinical decision (Figure 1G), and relevant
                epidemiological information is reported to the COVID registry (Figure 1F).
                <br />
              </p>
              <p style={{ textAlign: "center", fontSize: 16 }}>
                <b>Table 1.</b>{" "}
                <i>
                  Selection of samples per week for sequencing at different Andalusian provinces in primary care (PC) or
                  hospitalized (H) patients
                </i>
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
              <p className="text-justify" style={{ fontSize: 18 }}>
                Unlike in many other initiatives that consider exclusively the primary use of genomic data, here especial
                attention has been paid to the secondary use of genomic data for clinical research. Andalusia has a unique
                resource, the Population Health Database (
                <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud">
                  BPS, after Base Poblacional de Salud
                </a>
                ). All the clinical information on all the patients of the Andalusian Health System is stored there (Figure 1H).
                <br />
                <br />
                The Bioinformatics Area submits all the viral genomes to BPS (Figure 1I), where they are permanently stored,
                linked to the clinical information of the patients. BPS has a procedure available to request data for secondary
                use in{" "}
                <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf">
                  clinical research
                </a>
                . Finally, the Bioinformatic Area is responsible for the submission of the viral genomic sequences to ENA to
                make them available to the scientific community (Figure 1J).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
