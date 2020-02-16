import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Component.css'


import LoginModal from '../components/LoginModal';
import RegisterModal from '../components/RegisterModal';

import { Button,Container,Row,Col,Modal,Form,Navbar,Nav,FormControl} from 'react-bootstrap';




class  Landing extends Component {
  render(){
    return (
      <>
        <Navbar variant="dark" style={{paddingLeft:"5%",paddingRight: "5%",paddingTop:"2%"}}>
            <Navbar.Brand href="#home"><h2><b>BreedNder</b></h2></Navbar.Brand>
          <Nav className="mr-auto"></Nav>
            <Nav>
              <LoginModal/> <RegisterModal/>
            </Nav>
        </Navbar>
        <div className='flex-col'>
            <div className='ln'>
              <h1 className='ln'>Swipe <b>Right.</b> to make Your Pet <b>Happy</b></h1>
            </div>
            <div className='ln'>
              <p className='ln' lg='2'>By clicking enter, you agree to <a href='#'>Our terms</a>, Learns how we process your data in our <a href='#'>Privacy policy</a> and <a href='#'>Cookies policies</a>.</p>
            </div>
        </div>
      </>
    );
  }

}

export default Landing;
