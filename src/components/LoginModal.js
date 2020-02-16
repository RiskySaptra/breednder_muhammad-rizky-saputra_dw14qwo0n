import React, {Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Button,Modal,Form, Container} from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

export default function LoginModal() {
  const [Login, setLogin] = useState(false);
    return (
      <Fragment>
        <Button onClick={() => setLogin(true)} className='btn-secondary'>Login</Button>
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
              <Button className='rounded-pill' variant="secondary" type="submit" size="sm" href='/index' block>
                Login
              </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
}
