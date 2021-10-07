import React from 'react';
import RegionSelector from './RegionSelector';
import SelectedChart from './SelectedChartLocal';


function ProportionCharts() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 ">
                    <RegionSelector />
                </div>
                <div className="col-md-12 ">
                    <SelectedChart />
                </div>
            </div>
        </div>
    );
}


export default ProportionCharts;