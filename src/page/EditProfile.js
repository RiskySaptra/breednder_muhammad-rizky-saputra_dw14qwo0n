import React, {Component,Fragment,useState} from 'react';

import data from "../profile-data.js";

import PaymentModal from '../components/PaymentModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';
import {Nav,Navbar,NavDropdown,Form,FormControl, CardGroup, Container,FormGroup, Row, Col,Carousel} from 'react-bootstrap'

import { Image,Card,Button,CardDeck} from 'react-bootstrap';

import { BrowserRouter as Link } from "react-router-dom";




class  EditProfile extends Component {
  render(){
    return (
      <div className='container'>
        Edit Profil
      </div>
    );
  }

}

export default EditProfile;
