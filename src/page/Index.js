import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";
import {Button,Navbar} from 'react-bootstrap'
import { FaRegCaretSquareLeft,FaRegCaretSquareRight,FaRegCaretSquareUp,FaRegCaretSquareDown,FaRegSquare } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { BrowserRouter as Link } from "react-router-dom";

class  Index extends Component {
    render(){
      return (
        <>
            <div className='boxLeft-index'>
              <div className='sticky-top' style={{background:"white"}}>
              <Navbar bg="dark" variant="dark" className=''>
                <Navbar.Brand href="/profile">
                 <IoIosArrowBack size="1.5em" className="react-icons"/>
                  <img
                    alt=""
                    src="/profile.jpeg"
                    width="30"
                    height="30"
                    className="d-inline-block align-center round-image"
                  />{' '}
                  <b>Mr. Doug</b>
                </Navbar.Brand>
              </Navbar>
              <Navbar className='sticky'>
                <Navbar.Brand ><u>Match</u></Navbar.Brand>
              </Navbar>
            </div>
            <div className=''>
              {data.map(item => (
                <>
                <img className='box-image' key={item} src={item.pics} />
                </>
              ))}
            </div>
            </div>
            <div id='s' className='boxRight-index'>
                <Deck/>
                <div className='boxRight-body'>
                  <div><Button style={{borderRadius:"50%",height:"60px",width:"60px",background:"white",border:"none",margin:"none"}}><img style={{height:"40px",width:"40px"}}src="./refresh.png"/></Button></div>
                  <div><Button style={{borderRadius:"50%",height:"80px",width:"80px",background:"white",border:"none"}}>berak</Button></div>
                  <div><Button style={{borderRadius:"50%",height:"60px",width:"60px",background:"white",border:"none"}}>berak</Button></div>
                  <div><Button style={{borderRadius:"50%",height:"80px",width:"80px",background:"white",border:"none"}}>berak</Button></div>
                  <div><Button style={{borderRadius:"50%",height:"60px",width:"60px",background:"white",border:"none"}}>berak</Button></div>
                </div>
                <div className='boxRight-Footer'>
                  <div style={{flex:2}}><Button size="sm"variant="secondary btn-pill"block><b>Hide</b></Button></div>
                  <div style={{flex:1.5}}><FaRegCaretSquareLeft size="2em" className="react-icons"/><b>NO</b></div>
                  <div style={{flex:1.5}}><FaRegCaretSquareRight size="2em" className="react-icons"/><b>YES</b></div>
                  <div style={{flex:3}}><FaRegCaretSquareUp size="2em" className="react-icons"/><b>OPEN PROFILE</b></div>
                  <div style={{flex:3}}><FaRegCaretSquareDown size="2em" className="react-icons"/><b>CLOSE PROFILE</b></div>
                  <div style={{flex:2}}><Button size="sm" variant="outline-secondary"block disabled style={{height:"20px",borderWidth:"3px"}}></Button></div>
                  <div style={{flex:2}}><b>NEXT PHOTO</b></div>
                </div>
            </div>
        </>
      );
    }

  }


  export default Index;
