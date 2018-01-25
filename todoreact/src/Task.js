import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Moment from 'moment'


class Task extends Component {
    render() {
        return (
                <Row>
                    <Col xs={2}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px'}}>{Moment(this.props.time).format('DD MMM')}</p>
                        </div>
                    </Col>
                    <Col xs={7}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <p>ID: {this.props.id}</p>
                    </Col>
                    <Col xs={3}>
                        <ButtonGroup className="pull-right" bsSize="xsmall">
                            <Button bsStyle="danger"><FontAwesome name='times' /></Button>
                            <Button bsStyle="success"><FontAwesome name='check' /></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
        );
    }
}

export default Task;