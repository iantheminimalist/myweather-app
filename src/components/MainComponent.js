import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FiveDayForcast from './FiveDayForcast';
import Location from './LocationComponent';
import { CurrentLocation } from './CurrentLocation';



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
                        <CurrentLocation />
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
