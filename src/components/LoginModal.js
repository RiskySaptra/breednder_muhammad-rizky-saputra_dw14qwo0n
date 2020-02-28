import React, {Fragment} from 'react';

// redux 
import { connect } from "react-redux";
import { login } from "../_actions/auth";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal,Form,Alert} from 'react-bootstrap';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isopen: false, email: "", password: "" };
  }

  componentDidMount() {
    // console.log("component did mount");
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = () => {
    console.log("login");
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    this.props.login(data);
  };

  handleClose = () => {
    this.setState({ isopen: false });
  };

  render() {
    // console.log("Cek auth", this.props.auth);
    const { error, loading } = this.props.auth;
    return (
      <Fragment>
        <Button onClick={() => this.setState({ isopen: true })} className='default-btn' size='sm' variant="outline-light">Login</Button>
        <Modal size="sm" show={this.state.isopen} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title id="modal-sizes-title-sm">
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control id="email" type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="RememberMe">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button onClick={!loading ? this.handleLogin : null} className='.default-btn' variant="secondary" type="submit" size="sm" block>
                {loading ? "Login..." : "Login"}
              </Button>
          </Modal.Footer>
          {error && <Alert severity="error">{error}</Alert>}
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModal);
