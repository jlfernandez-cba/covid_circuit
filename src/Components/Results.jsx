

import circuitImg2 from "../img/image2.png";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h4 style={{ fontSize: 20 }}>Results</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <p className="text-justify" style={{ fontSize: 18 }}>This circuit is operating since middle February and currently, the pace of sequencing is of 300-400 per week, depending on the final results of quality control processes both in the RNA extraction and in the sequencing processes.</p><br />
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
              <p className="text-justify" style={{ fontSize: 18 }}>The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.</p>
              <p className="text-justify" style={{ fontSize: 18 }}>An advanced tool developed by the area, which is freely available in the <a href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more details in the <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1">preprint</a>.</p>
              <p className="text-justify" style={{ fontSize: 18 }}><a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all">A local instance of NexStrain</a> represent all the samples currently sequenced.</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
