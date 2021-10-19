
// import placeholder from "../img/placeholder.png";
import ImageGallery from 'react-image-gallery';
import ProportionCharts from './distribution-chart/ProportionCharts';

const images = [
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart1626862971.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Almería.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Almería1626862970.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Cádiz.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Cádiz1626862972.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Córdoba.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Córdoba1626862972.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Granada.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Granada1626862973.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Huelva.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Huelva1626862974.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Jaén.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Jaén1626862975.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Málaga.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Málaga1626862976.jpg',
  },
  {
    original: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/chart_Sevilla.svg',
    thumbnail: 'https://www.clinbioinfosspa.es/files/image/pages/covid-circuit/charts.20210719/thumb/chart_Sevilla1626862975.jpg',
  },
];


function ClinicalInterest() {
  return (

    <div id="clinical-interest"
    // style={{ paddingTop: '21rem' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h4 style={{ fontSize: 20 }}>Potential Clinical Interest</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* <ImageGallery items={images} /> */}
            <ProportionCharts />
            <br />
            <p style={{ textAlign: 'center', fontSize: 16 }}><b>Charts.</b> <i>These charts refer to the samples sequenced as part of this study, which are selected according to their potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the general population.</i></p>
            <br />
            <br />
            {/*
                <p style={{ textAlign: 'justify', fontSize: 18 }}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
             */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );

}
export default ClinicalInterest;
