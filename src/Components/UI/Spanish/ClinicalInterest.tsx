import ProportionCharts from ".././distribution-chart/ProportionCharts";

function ClinicalInterest() {
  return (
    <div id="clinical-interest">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <h4 style={{ fontSize: 20, marginBottom: 30 }}>Interés clínico potencial</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProportionCharts />
            <br />
            <p style={{ textAlign: "center", fontSize: 16 }}>
              <b>Gráficos. </b> {""}
              <i>
                Estos gráficos se refieren a las muestras secuenciadas como parte de este estudio, que se seleccionan de acuerdo
                con su potencial interés científico. Como tal, las proporciones no reflejan la prevalencia natural relativa en
                la población general.
              </i>
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClinicalInterest;
