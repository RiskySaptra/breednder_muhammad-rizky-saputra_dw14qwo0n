import React, {Component,Fragment,useState} from 'react';

import data from "../profile-data.js";

import PaymentModal from '../components/PaymentModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';
import {Nav,Navbar,NavDropdown,Form,FormControl, CardGroup, Container,FormGroup, Row, Col,Carousel} from 'react-bootstrap'

import { Image,Card,Button,CardDeck} from 'react-bootstrap';

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
                Profile Pet
              </Navbar.Brand>
            </Navbar>
            <div className='body'>
              <h2>Account Settings</h2>
              <div className='row profile-bg-text'>
                <div className='col-7'>
                  <p1>Email</p1>
                </div>
                <div className='col-5 '>
                  <p1>Email@gmail.com</p1>
                </div>
              </div>
              <div className='row profile-bg-text'>
                <div className='col-7'>
                  <p1>Phone</p1>
                </div>
                <div className='col-5'>
                  <p1>0852 5055 2211</p1>
                </div>
              </div>
              <h2>Discovery Settings</h2>
              <div>
              <Form>
                <FormGroup>
                  <Row className='profile-bg-text'>
                    <div className='col-9'><p1>Maximum Distance</p1></div>
                    <div className='col-3'><p1>10 KM</p1></div>
                  </Row>
                  <Form.Control type="range" min='0' max='100'/>
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
          <PaymentModal/>
          <div className='boxRight '>
            <Carousel>
              <Carousel.Item>
              {data.map(item => (
                <img className='box-image-profile' key={item} src={item.pics} />
              ))}
              </Carousel.Item>
            </Carousel>
            <Container>
            <Row>
              <div className='col-8'><h3>Mr.Doug</h3></div>
              <div className='col-4'><h4>Dog</h4></div>
            </Row>
              <p className='big'>Breeder : Risky</p>
              <p className='big'>10 kilometer dari sini</p>
              <p className='big'>Male - Adult</p>
              <p className='big'>Phone Breeder : 0821 9796 5530</p>
              <h3>About</h3>
              <p className='abt'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='footer'>
                <Button className='rounded-pill' variant="dark" href='/edit-profile'block>Edit</Button>
              </div>
            </Container>
          </div>
          <div className='boxFooter text-center'>
          </div>
      </div>
    );
  }

}

export default Profile;
