import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";
import {Nav,Navbar,NavDropdown,Form,FormControl, CardGroup} from 'react-bootstrap'

import { Image,Card,Button,CardDeck } from 'react-bootstrap';

class  Index extends Component {
    render(){
      return (
        <div className='container'>
            <div className='boxLeft'>
            <Navbar bg="dark" variant="dark" className='sticky-top'>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="/logo192.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                Afdool
              </Navbar.Brand>
            </Navbar>
            <Navbar className='sticky'>
              <Navbar.Brand ><u>Match</u></Navbar.Brand>
            </Navbar>
            <div className='text-center'>
              {data.map(item => (
                <img className='box-image' src={item.pics} />
              ))}
            </div>
            </div>
            <div id='s' className='boxRight test'>
              <Deck/>
            </div>
            <div className='boxFooter'>
            </div>
        </div>
      );
    }

  }


  export default Index;
