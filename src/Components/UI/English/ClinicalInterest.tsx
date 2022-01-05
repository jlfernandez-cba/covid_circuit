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
              <h4 style={{ fontSize: 20, marginBottom: 30 }}>Potential Clinical Interest</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProportionCharts />
            <br />
            <p style={{ textAlign: "center", fontSize: 16 }}>
              <b>Charts.</b>{" "}
              <i>
                These charts refer to the samples sequenced as part of this study, which are selected according to their
                potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the
                general population.
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
