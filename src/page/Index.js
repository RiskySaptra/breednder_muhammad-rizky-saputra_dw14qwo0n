import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";
import {Nav,Navbar,NavDropdown,Form,FormControl, CardGroup, Container} from 'react-bootstrap'

import { Image,Card,Button,CardDeck } from 'react-bootstrap';

import { BrowserRouter as Link } from "react-router-dom";

class  Index extends Component {
    render(){
      return (
        <div className='text-center'>
            <div className='boxLeft'>
            <div className='sticky-top bot-mar'>
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
            <Navbar className='sticky'>
              <Navbar.Brand ><u>Match</u></Navbar.Brand>
            </Navbar>
            </div>
            <div className='image-text'>

              {data.map(item => (
                <>
                <img className='box-image' key={item} src={item.pics} />
                </>
              ))}

            </div>
            </div>
            <div id='s' className='boxRight-index test'>
              <Deck/>
            </div>
            <div className='boxFooter text-center'>
              <Container fluid>
                <Button variant="dark">Hide</Button>{' '}
                <Button variant="dark">No</Button>{' '}
                <Button variant="dark">Yes</Button>{' '}
                <Button variant="dark">Open Profile</Button>{' '}
                <Button variant="dark">Close Profile</Button>{' '}
                <Button variant="dark">Next</Button>{' '}

              </Container>
            </div>
        </div>
      );
    }

  }


  export default Index;
