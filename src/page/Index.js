import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Landing.css';

import Deck from "../components/Deck";
import data from "../data.js";

import { Image,Card,Button,CardDeck } from 'react-bootstrap';

class  Index extends Component {
    render(){
      return (
        <div className='container'>
            <div className='boxLeft'>
              <div className='card'>
                <div className='card-header'>
                  Header
                </div>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-4'>
                      <Card className="bg-dark text-white">

                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='s' className='boxRight test'>
              <Deck/>
            </div>
            <div className='boxFooter'>
              <p>
                beraks
              </p>

            </div>
        </div>
      );
    }
    
  }
  
  export default Index;