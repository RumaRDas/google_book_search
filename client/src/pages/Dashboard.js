import React from 'react';
import Jumbotron from '../components/Jumbotron';
import {Link} from 'react-router-dom';
import {Container, Row, Col }from '../components/Grid';
import {Input} from '../components/List';

const Dashboard = () =>{
    return (
        <Container>
        <Row>
        <Col size="md-12">
        <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
        </Col>
        </Row>
        </Container>
    )
}

export default Dashboard
