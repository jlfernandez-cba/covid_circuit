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
              <h4 style={{ fontSize: 20 }}>Noticias</h4>
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
                      Andalucía lidera la secuenciación genómica del coronavirus a nivel nacional
                    </h4>

                    <br />
                    <p>
                      Video divulgativo sobre el trabajo que se realiza en el Sistema Sanitario Público de Andalucía para
                      secuenciar el genoma del coronavirus y conocer mejor la enfermedad. Realizado por 7TV en colaboración con
                      la Consejería de Salud y Familias, la Fundación Progreso y Salud y Novartis.
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
