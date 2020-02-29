import React, {Component} from 'react';

// redux
import { connect } from "react-redux";
//action
import { getUserPets } from "../_actions/pet";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import {Button,Navbar} from 'react-bootstrap'
import { FaRegCaretSquareLeft,FaRegCaretSquareRight,FaRegCaretSquareUp,FaRegCaretSquareDown} from 'react-icons/fa';

class  Index extends Component {
  componentDidMount() {
    this.props.getUserPets();
  }
  state = { showing: true, text : true };
    render(){
      const { showing,text } = this.state;
      const { pet } = this.props;
      console.log("yoooooo",pet.data);
      return (
        <>
          <div className='boxLeft-index'>
            <div className='sticky-top' style={{background:"white"}}>
            <Navbar bg="dark" variant="dark" className=''>
              <Navbar.Brand href="/profile">
                <img
                  alt=""
                  src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg"
                  width="30"
                  height="30"
                  className="d-inline-block align-center round-image"
                  alt={pet.data.photo}
                />{' '}
                <b>{pet.data.name}</b>
              </Navbar.Brand>
            </Navbar>
            <Navbar className='sticky'>
              <Navbar.Brand ><u>Match</u></Navbar.Brand>
            </Navbar>
          </div>
          {/* <div className=''>
            {dataD.map((item,index) => (
              <img className='box-image' key={index} src={item.pics} />
            ))}
          </div> */}
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
                <div style={{flex:2,maxWidth:"200px"}}><Button onClick={() => this.setState({ showing: !showing, text: !text })} size="sm"variant="secondary btn-pill"block><b>{(text ? 'Hide' : 'Show')}</b></Button></div>
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

  const mapStateToProps = state => {
    return {
      // species: state.species,
      auth: state.auth,
      pet: state.pet
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      // getPets: () => dispatch(getPets())
      getUserPets: () => dispatch(getUserPets())
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(Index);
