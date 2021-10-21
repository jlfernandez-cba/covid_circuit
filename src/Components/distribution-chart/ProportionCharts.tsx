import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RegionSelector from './RegionSelector';
import SelectedChart from './SelectedChartLocal';


function ProportionCharts() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={{ span: 8, offset: 2 }}>
                    <RegionSelector />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={{ span: 8, offset: 2 }}>
                    <SelectedChart />
                </Col>
            </Row >
        </Container >
    );
}


export default ProportionCharts;