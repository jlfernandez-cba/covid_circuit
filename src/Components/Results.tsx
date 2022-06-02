import TranslatedText from "../i18n";

import circuitImg2 from "../img/figuras.pptx.svg";
import phylogeny from "../img/phylogeny.png";
import geography from "../img/geography.png";
import imgDownloads from "../img/imgDownloads.png";
import imgViBioM2022 from "../img/ViBioM2022banner.jpg";
import poster from "../img/poster.png";
import poster2 from "../img/poster2.png";
import poster3 from "../img/poster3.png";
import poster4 from "../img/poster4.png";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br /><br /><br /><br />
              <hr style={{ height: "15px" }} />
              <TranslatedText textKey="results_text_title" />
              <hr style={{ height: "5px" }} />
            </div>
          </div>
        </div>

        <br /><br />

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br /><br /><br /><br />
              <TranslatedText textKey="results_text_1" />
              <br />
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <br /><br />
              <TranslatedText textKey="results_text_2" />
            </div>

            <div className="col-md-12">
              <br /><br /><br />
              <TranslatedText textKey="results_text_3" />
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

          <div className="page-section" id="conferences">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <TranslatedText textKey="results_text_conferences" />
                    <br /><br /><br />
                  </div>
                  <br /><br />
                  <a target="_blank" rel="noreferrer" href="https://evbc.uni-jena.de/events/vibiom2022/"><img src={imgViBioM2022} className="img-responsive center-block" alt="vibiom 2022 banner" /></a>
                  <br /><br /><br /><br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                  <b><TranslatedText textKey="results_text_Downloads_poster" /></b>
                      <br />
                      <br /><br /><br /><br />
                    </div>
                </div>

                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_1_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/TheAndalusiancircuitforSARS-CoV-2%20WGS.pdf"><img src={poster} className="img-responsive center-block" alt="andalusian circuit poster" /></a>
                </div>

                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_2_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Impact_of_SARS-CoV-2.pdf"><img src={poster2} className="img-responsive center-block" alt="Impact of SARS-CoV-2 poster" /></a>

                </div>

                <div className="col-md-6">
                <br /> <br />

                  <TranslatedText textKey="results_text_Downloads_3_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/Circuito secuenciacion genomica del SARS-CoV-2 Andalucia.pdf"><img src={poster3} className="img-responsive center-block" alt="andalusian circuit poster" /></a>
                </div>

                <div className="col-md-6">
                <br /> <br />

                  <TranslatedText textKey="results_text_Downloads_4_poster" />
                  <br /> <br />
                  <a target="_blank" rel="noreferrer" href="https://www.clinbioinfosspa.es/files/posters/poster_SEIMC.pdf"><img src={poster4} className="img-responsive center-block" alt="Impact of SARS-CoV-2 poster" /></a>
                </div>



              </div>
            </div>

          </div>

          <div className="page-section" id="RelatedWorks">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-heading">
                    <TranslatedText textKey="results_text_relatedWorks" />
                    <br />
                    <br /><br /><br /><br />
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TranslatedText textKey="results_text_Downloads_2_top100" />
                  <br />
                  <a target="_blank" rel="noreferrer" href="https://www.nature.com/collections/fhhdbhejca/?sap-outbound-id=0FAA2601713AAD4A5CA1D416B9988FC308869765&utm_source=hybris-campaign&utm_medium=email&utm_campaign=000_WANJ01_0000020639_HSCR_41598_CON1_GL_PHSS_TOP21_T100_Phys&utm_content=EN_internal_38720_20220321&mkt-key=42010A0550671EDA9BA9E11DF2291A52"><img src={imgDownloads} className="img-responsive center-block" alt="sequencing circuit" /></a>
                </div>
                <div className="col-md-6">
                  <h2><a href="https://academic.oup.com/gigascience/article/10/12/giab078/6448505">Highly accurate whole-genome imputation of SARS-CoV-2 from partial or low-quality sequences</a></h2>
                  <p className="text-justify">Francisco M Ortuño, Carlos Loucera, Carlos S Casimiro-Soriguer, Jose A Lepe, Pedro Camacho Martinez, Laura Merino Diaz, Adolfo de Salazar, Natalia Chueca, Federico García, Javier Perez-Florido, Joaquin Dopazo</p>
                  <p> <a href="https://academic.oup.com/gigascience/article-pdf/10/12/giab078/41474609/giab078.pdf"><img width="19" height="24" src="https://oup.silverchair-cdn.com/UI/app/svg/pdf.svg" alt="pdf icon" /> </a> </p>
                  <br />
                  <hr />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
