import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css'

import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

import { Button,Container,Row,Col,Modal,Form} from 'react-bootstrap';




class  Landing extends Component {
  render(){
    return (
      <div>
          <div className='container landing'>
            <Row className='mt-5'>
              <Col><h2 className="float-left">Breednder</h2></Col>
              <Col xs='2'><RegisterModal/></Col>
              <Col xs='2'><LoginModal/></Col>
            </Row>
            <Row>
              <Col><h1 className='text-center'>Swipe <b>Right.</b> to make Your Pet <b>happy</b></h1></Col>
            </Row>
            <Row>
              <Col xs='3'></Col>
              <Col><p className='text-center' lg='2'>By clicking enter, you agree to <a href='#'>our terms</a>, Learns how we process your data in our <a href='#'>Privacy Policy</a> and <a href='#'>Cookies Policies.</a></p></Col>
              <Col xs='3'></Col>
            </Row>
          </div>

      </div>
    );
  }
  
}

export default Landing;
