import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import logo from '../assets/logo.png';
import NavLoginBar from './navLoginBar'
const Landing=(props)=> {
    return (
        <>
        <NavLoginBar/>
        <Container style={{width:`100%`,backgroundColor:`#242424`, height:`100vh`, textAlign:'left',paddingLeft:'40px'}} fluid>
            <Row className="justify-content-md-center" style={{position:'absolute', top:`25%`}}> 
                <Col>
                <img style={{width:`70%`,marginLeft:`100px`, marginBottom:`120px`}}src={logo} alt="img"/>
                </Col>
                <Col>
                    <h1 className="roboto" style={{fontSize:`130px`, fontWeight:900,}}>ezeats</h1>
                    <h2 className="roboto" style={{fontSize: `35px`, fontWeight:500, width:`60%`}}>can’t decide what to eat? we’ll help you choose.</h2>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Landing;