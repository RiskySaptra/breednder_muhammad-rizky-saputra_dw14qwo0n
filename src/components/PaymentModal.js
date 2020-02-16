import React, {Fragment,useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button,Modal,Form,Container} from 'react-bootstrap';
import { BrowserRouter as Link } from "react-router-dom";


export default function PaymentModal() {
  const [Payment, setPayment] = useState(false);
    return (
      <Fragment>
        <Button onClick={() => setPayment(true)} variant='dark' className='rounded-pill btn-add-pet'>Add Pet</Button>
        <Modal className='text-center' show={Payment} onHide={() => setPayment(false)} scrollable centered>
        <h1>Premium</h1>
        <h3>Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO</b></h3>
        <Form>
        <Form.Control type="text" placeholder="No.Rek Kamu" />
        </Form>
        <div className='box-image '> </div>
        <Button className='rounded-pill' variant="dark" block>Kirim</Button>
        </Modal>
      </Fragment>
    );
}
