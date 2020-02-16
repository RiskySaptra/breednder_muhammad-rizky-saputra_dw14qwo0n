import React, {Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Modal,Form,Container} from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";


export default function LoginModal() {
  const [Register, setRegister] = useState(false);
    return (
      <Fragment>
        <Button onClick={() => setRegister(true)} className='btn-secondary'>Register</Button>
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
          <Button className='rounded-pill' variant="secondary" type="submit" size="sm" href='/index' block>
          Register
          </Button>
        </Modal.Footer>
      </Modal>
      </Fragment>
    );
}
