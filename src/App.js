import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Row,Col,Modal,Form} from 'react-bootstrap';


function App() {
  const [Login, setLogin] = useState(false);
  return (
    <div>
      <div>
      <Container>
        <Row className='mt-5'>
          <Col><h2 className="float-left">Breednder</h2></Col>
          <Col xs='2'><Button onClick={() => setLogin(true)} className='btn-secondary rounded-pill'  block>Login</Button></Col>
          <Col xs='2'><Button className='btn-secondary rounded-pill'  block>Register</Button></Col>
        </Row>
        <Row>
          <Col><h1 className='text-center'>Swipe Right to make Your Pet happy</h1></Col>
        </Row>
        <Row>
          <Col xs='3'></Col>
          <Col><p className='text-center' lg='2'>by clicking enter, you agree to our terms, Learns how we process your data in our Privacy Policy and Cookies Policies</p></Col>
          <Col xs='3'></Col>
        </Row>
      </Container>
      <>
      <Modal size="sm" show={Login} onHide={() => setLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal-sizes-title-sm">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className='rounded-pill' variant="secondary" type="submit" size="sm" block>
            Login
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
      </>
      </div>
    </div>
  );
}

export default App;
