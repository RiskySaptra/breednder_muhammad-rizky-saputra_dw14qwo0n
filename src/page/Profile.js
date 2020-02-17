import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";
import {Button,Navbar,Form,FormGroup,Row} from 'react-bootstrap'
import { FaRegCaretSquareLeft,FaRegCaretSquareRight,FaRegCaretSquareUp,FaRegCaretSquareDown,FaRegSquare } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BrowserRouter as Link } from "react-router-dom";

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

          </div>
        </>
      );
    }

  }


  export default Index;
