import { Carousel } from "react-bootstrap";
import TranslatedText from "../i18n";

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
              <TranslatedText textKey="news_title" />
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
                    <TranslatedText textKey="news-heading" />
                    <br />
                    <TranslatedText textKey="news-text" />
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
