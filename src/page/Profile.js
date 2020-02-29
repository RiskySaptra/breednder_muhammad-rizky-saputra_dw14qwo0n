import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import PaymentModal from '../components/PaymentModal';

import {Button,Navbar,Form,FormGroup,Row,Carousel} from 'react-bootstrap'
import { FaTransgender} from 'react-icons/fa';
import { IoIosArrowBack,IoIosPerson } from 'react-icons/io';
import { MdLocationOn,MdPhone } from 'react-icons/md';

class  Index extends Component {
    render(){
      return (
        <>
          <div className='boxLeft-profile'>
            <div className='sticky-top'>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="/index">
               <IoIosArrowBack size="1.5em" className="react-icons"/>
                <img
                  alt=""
                  src="/profile.jpeg"
                  width="30"
                  height="30"
                  className="d-inline-block align-center round-image"
                />{' '}
                <b>Pet Profile</b>
              </Navbar.Brand>
            </Navbar>
          </div>
            <div>
              <h2  className="sparator">Account Settings</h2>
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
              <h2  className="sparator">Discovery Settings</h2>
              <div className="for">
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
                <Button variant="dark" block>Logout</Button>
              </Form>
              </div>
            </div>
          </div>
          <div id="x" className='boxRight-profile'>
            <PaymentModal/>
            <div className="box-profile">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img className='box-image-profile'src='/profile.jpeg'  style={{maxHeight:'400px'}}/>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="for">
            <Row>
              <div className='col-9'><h3><b>Mr.Doug</b></h3></div>
              <div className='col-3'><h4>DOG</h4></div>
            </Row>
                <p><IoIosPerson style={{fontSize:'1.2em'}}/> Breeder : Risky</p>
                <p><MdLocationOn style={{fontSize:'1.2em'}}/> 10 KM from here</p>
                <p><FaTransgender style={{fontSize:'1.2em'}}/> Male - Adult</p>
                <p><MdPhone style={{fontSize:'1.2em'}}/> Phone Breeder : 0821 9796 5530</p>
                <h3 style={{margin:"5px"}}>About</h3>
                <p className='abt' style={{margin:"5px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                <Button className='btn-default fixed' variant="dark" href='/edit-profile'block>Edit</Button>
            </div>
            </div>
          </div>
        </>
      );
    }

  }


  export default Index;
