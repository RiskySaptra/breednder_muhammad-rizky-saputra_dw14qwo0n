import React, {Component,Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Container,Row,Col,Modal,Form} from 'react-bootstrap';


function App() {
  const [Login, setLogin] = useState(false);
  const [Register, setRegister] = useState(false);
  return (
    <div>
      <div>
      <Container>
        <Row className='mt-5'>
          <Col><h2 className="float-left">Breednder</h2></Col>
          <Col xs='2'><Button onClick={() => setLogin(true)} className='btn-secondary rounded-pill'  block>Login</Button></Col>
          <Col xs='2'><Button onClick={() => setRegister(true)} className='btn-secondary rounded-pill'  block>Register</Button></Col>
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
          <Form.Group controlId="Email">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="RememberMe">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-pill' variant="secondary" type="submit" size="sm" block>
            Login
        </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="sm" show={Register} onHide={() => setRegister(false)} scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title id="modal-sizes-title-sm">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="Breeder">
            <Form.Control type="text" placeholder="Breeder" />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group controlId="Password">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="Phone">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group controlId="Address">
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group controlId="Pet Name">
            <Form.Control type="text" placeholder="Pet Name" />
          </Form.Group>
          <Form.Group controlId="Pet Gender">
            <Form.Control type="text" placeholder="Pet Gender" />
          </Form.Group>
          <Form.Group controlId="Pet Species">
            <Form.Control as="select" >
              <option selected disabled>Pet Species</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Lizard</option>
              <option>Bird</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Pet Age">
            <Form.Control type="text" placeholder="Pet Age" />
          </Form.Group>
          <Form.Group controlId="RememberMe">
            <Form.Check type="checkbox" label="Agree to the terms of service" />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='rounded-pill' variant="secondary" type="submit" size="sm" block>
            Register
        </Button>
        </Modal.Footer>
      </Modal>
      </>
      </div>
    </div>
  );
}

export default App;
