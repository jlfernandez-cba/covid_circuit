import circuitImg2 from "../../img/image2.png";
import phylogeny from "../../img/phylogeny.png";
import geography from "../../img/geography.png";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <h4 style={{ fontSize: 20 }}>Results</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />

              <p className="text-justify" style={{ fontSize: 18 }}>
                This circuit is operating since middle February and currently, the pace of sequencing is of 300-400 per week,
                depending on the final results of quality control processes both in the RNA extraction and in the sequencing
                processes.
              </p>
            </div>
            <div className="col-md-6">
              <br />
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <br />
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <br />
              <br />

              <p className="text-justify" style={{ fontSize: 18 }}>
                The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the
                lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.
                <br />
                <br />
                An advanced tool developed by the area, which is freely available in the{" "}
                <a href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality
                sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more
                details in the <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1">preprint</a>.<br />
                <br />
              </p>
            </div>

            <div className="col-md-12">
              <br />
              <br />
              <br />
              <p className="text-justify text-center" style={{ fontSize: 18 }}>
                <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage">A local instance of NextStrain</a>{" "}
                represent all the samples currently sequenced:
                <br />
              </p>
            </div>
          </div>
          <br />

          <br />

          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov tree"
                  className="embed-responsive-item"
          
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed"
                >
                  {" "}
                  <img src={phylogeny} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov map"
                  className="embed-responsive-item"
               
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed"
                >
                  <img src={geography} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}