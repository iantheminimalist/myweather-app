import React, { Component } from 'react';
import { Container } from 'reactstrap';


export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <Container>
                    <h2>Simple Weather App</h2>
                    <hr />
                    <p>Place info here</p>
                    </Container>

                </div>
            </div>
        )
    }
}
