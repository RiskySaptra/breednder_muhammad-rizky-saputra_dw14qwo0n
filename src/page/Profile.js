import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';
import {Nav,Navbar,NavDropdown,Form,FormControl, CardGroup, Container,FormGroup, Row, Col} from 'react-bootstrap'

import { Image,Card,Button,CardDeck } from 'react-bootstrap';

import { BrowserRouter as Link } from "react-router-dom";




class  Profile extends Component {
  render(){
    return (
      <div className='container'>
        <Container>
          <div className='boxLeft'>
            <div className='sticky-top'>
            <Navbar bg="dark" variant="dark" className='' >
              <Navbar.Brand href="/profile">
                <img
                  alt=""
                  src="/profile.jpeg"
                  width="30"
                  height="30"
                  className="d-inline-block align-center round-image" 
                />{' '}
                Afdool
              </Navbar.Brand>
            </Navbar>
            <div className='body'>
              <h2>Account Settings</h2>
              <div className='row profile-bg-text'>
                <div className='col-6'>
                  <p1>Email</p1>
                </div>
                <div className='col-6 '>
                  <p1>Email@gmail.com</p1>
                </div>
              </div>
              <div className='row profile-bg-text'>
                <div className='col-6'>
                  <p1>Phone</p1>
                </div>
                <div className='col-6'>
                  <p1>085250552211</p1>
                </div>
              </div>
              <h2>Discovery Settings</h2>
              <div>
              <Form>
                <FormGroup>
                  <Row className='profile-bg-text'>
                    <div className='col-6'><p1>Maximum Distance</p1></div>
                    <div className='col-6'><p1>10 KM</p1></div>
                  </Row>
                  <Form.Control type="range" min='1' max='100' className='slider'/>
                  <FormGroup>
                  <Form.Label>Age</Form.Label>
                    <Form.Control as="select">
                      <option>Adult</option>
                      <option>Teenager</option>
                      <option>Child</option>
                    </Form.Control>
                    </FormGroup>
                    <FormGroup>
                    <Form.Label>Species</Form.Label>
                    <Form.Control as="select">
                      <option>Cat</option>
                      <option>Bird</option>
                      <option>Bear</option>
                      <option>Dog</option>
                      <option>Fish</option>
                    </Form.Control>
                    </FormGroup>
                  </FormGroup>
                <Button className='rounded-pill' variant="dark" block>Logout</Button>
              </Form>
              </div>
            </div>
            </div>
          </div>
          </Container>
          <div id='x'className='boxRight'>
            <div className='box-profile'>
            <Card>
              berakss
            </Card>
            </div>
          </div>
          <div className='boxFooter text-center'>
          </div>
      </div>
    );
  }
  
}

export default Profile;
