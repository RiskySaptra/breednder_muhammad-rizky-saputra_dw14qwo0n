import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Row,Col} from 'react-bootstrap';


function App() {
  return (
    <div>
      <div>
      <Container>
        <Row className='mt-5'>
          <Col><h2 className="float-left">Breednder</h2></Col>
          <Col xs='2'><Button className='btn-secondary rounded-pill'  block>Login</Button></Col>
          <Col xs='2'><Button className='btn-secondary rounded-pill'  block>Register</Button></Col>
        </Row>
        <Row>
          <Col><h1 className='text-center'>Swipe Right to make Your Pet happy</h1></Col>
        </Row>
        <Row>
          <Col xs='3'></Col>
          <Col><p className='text-center' lg='2'>by clicking enter, you agree to our terms, Learns how we process your data in our Privacy Policy and Cookies Policies</p></Col>
          <Col xs='3'></Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default App;
