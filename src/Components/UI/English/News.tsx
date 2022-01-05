import { Carousel } from "react-bootstrap";

export default function News() {
  return (
    <div id="news">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <br />
            <div className="section-heading">
              <br />
              <br />
              <h4 style={{ fontSize: 20 }}>News</h4>
            </div>
          </div>
        </div>

        <Carousel>
          <Carousel.Item>
            <div className="row">
              <div className="col-md-6">
                <div className="embed-responsive embed-responsive-16by9 google-maps" id="youtubeVideo">
                  <iframe
                    className="embed-responsive-item"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YNYkYJo8xd0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <br />
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="">
                    <h4 className="news-heading">
                      Andalusia leads the genomic sequencing of the coronavirus at the national level
                    </h4>

                    <br />
                    <p>
                      Informative video about the work carried out in the Andalusian Public Health System to sequence the
                      coronavirus genome and better understand the disease. Made by 7TV in collaboration with the Ministry of
                      Health and Families, the Progreso y Salud Foundation and Novartis.
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
