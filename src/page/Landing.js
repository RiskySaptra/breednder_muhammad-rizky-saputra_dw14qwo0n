import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css'

import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

import { Button,Container,Row,Col,Modal,Form,Navbar,Nav,FormControl} from 'react-bootstrap';




class  Landing extends Component {
  render(){
    return (
      <>
        <Navbar variant="dark">
          <Navbar.Brand href="#home"><h2>BreedNder</h2></Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <Button style={{width: "120px",margin: "15px"}}variant="secondary">Login</Button>
          <Button style={{width: "120px"}}variant="secondary">Register</Button>
        </Form>
        </Navbar>

      </>
    );
  }

}

export default Landing;
