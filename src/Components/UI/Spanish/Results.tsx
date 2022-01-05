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
              <h4 style={{ fontSize: 20 }}>Resultados</h4>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />

              <p className="text-justify" style={{ fontSize: 18 }}>
                Este circuito está en funcionamiento desde mediados de febrero y actualmente, el ritmo de secuenciación es de
                300-400 por semana, dependiendo de los resultados finales de los procesos de control de calidad tanto en la
                extracción de ARN como en la secuenciación Procesos.
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
                El Área de Bioinformática informa a los hospitales de referencia San Cecilio y Virgen del Rocío. linajes del
                virus secuenciado, si se trata de VOI o VOC, así como cualquier nueva mutación de interés. <br />
                <br />
                Una herramienta avanzada desarrollada por el área, que está disponible gratuitamente en el {""}
                <a href="https://github.com/babelomics/impuSARS"> repositorio de github impuSARS </a>, se utiliza para recuperar
                baja calidad secuencias y podemos imputar el linaje con precisión para más del 95% de las muestras secuenciadas.
                Ver más detalles en la <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1"> preimpresión </a>.
                <br />
                <br />
              </p>
            </div>

            <div className="col-md-12">
              <br />
              <br />
              <br />
              <p className="text-justify text-center" style={{ fontSize: 18 }}>
                <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage"> Una instancia local de NextStrain </a>{" "}
                {""}
                representan todas las muestras secuenciadas actualmente:
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
