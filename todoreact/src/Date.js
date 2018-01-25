import React, {Component} from 'react';
import Moment from 'moment'
import {Row, Col} from 'react-bootstrap';

class Date extends Component {
    render() {
        return (
            <Row className="date__box">
                <Col xs={12}>
                    <h1>{Moment().format('dddd')}</h1>
                    <p>{Moment().format("Do MMM YY")}</p>
                </Col>
            </Row>
        );
    }
}

export default Date;