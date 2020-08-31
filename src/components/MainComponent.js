import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FiveDayForcast from './FiveDayForcast';
import Location from './LocationComponent';



export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <Container>
                    <h3>SIMPLE WEATHER APP</h3>
                    <hr />
                    <div className="header">
                    <Row>
                        <Col md={6}>
                            <p>Weather Image</p>
                            <p>deg</p>
                            </Col>
                        <Col md={6}>
                            <p>City , State</p>
                            <p>Weather Forcast</p>
                            </Col>
                    </Row>
                    </div>
                    <hr />
                    <FiveDayForcast />    
                    </Container>
                    <Location />
                </div>
            </div>
        )
    }
}
