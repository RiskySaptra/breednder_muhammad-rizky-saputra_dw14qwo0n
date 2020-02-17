import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";
import {Button,Navbar} from 'react-bootstrap'
import { FaRegCaretSquareLeft,FaRegCaretSquareRight,FaRegCaretSquareUp,FaRegCaretSquareDown,FaRegSquare } from 'react-icons/fa';
import { BrowserRouter as Link } from "react-router-dom";

class  Index extends Component {
  state = { showing: true,text : "Hide" };
    render(){
      const { showing } = this.state;
      return (
        <>
          <div className='boxLeft-index'>
            <div className='sticky-top' style={{background:"white"}}>
            <Navbar bg="dark" variant="dark" className=''>
              <Navbar.Brand href="/profile">
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
                <div><div className="buttons"><img src="./refresh.png"/></div></div>
                <div><div className="buttons" style={{width:"80px",height:"80px"}}><img style={{width:"45px",height:"45px"}}src="./nope.png"/></div></div>
                <div><div className="buttons" style={{width:"80px",height:"80px"}}><img style={{width:"60px",height:"60px"}}src="./luv.png"/></div></div>
                <div><div className="buttons"><img src="./lightning.png"/></div></div>
              </div>
              <div className='boxRight-Footer'>
                <div style={{flex:2,maxWidth:"200px"}}><Button onClick={() => this.setState({ showing: !showing })} size="sm"variant="secondary btn-pill"block><b>Hide</b></Button></div>
                  <div style={{flex:10,display: (showing ? 'flex' : 'none')}}>
                      <div style={{flex:1.5}}><FaRegCaretSquareLeft size="2em" className="react-icons"/><b>NO</b></div>
                      <div style={{flex:1.5}}><FaRegCaretSquareRight size="2em" className="react-icons"/><b>YES</b></div>
                      <div style={{flex:3}}><FaRegCaretSquareUp size="2em" className="react-icons"/><b>OPEN PROFILE</b></div>
                      <div style={{flex:3}}><FaRegCaretSquareDown size="2em" className="react-icons"/><b>CLOSE PROFILE</b></div>
                      <div style={{flex:2,marginRight:"10px"}}><Button size="sm" variant="outline-secondary"block disabled style={{height:"28px",borderWidth:"3px"}}></Button></div>
                      <div style={{flex:2}}><b>NEXT PHOTO</b></div>
                  </div>
              </div>
          </div>
        </>
      );
    }

  }


  export default Index;
