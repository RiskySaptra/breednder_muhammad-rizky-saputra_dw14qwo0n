import React, { Fragment, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Modal, Form } from "react-bootstrap";

export default function PaymentModal() {
  const [Payment, setPayment] = useState(false);
  return (
    <Fragment>
      <Button
        onClick={() => setPayment(true)}
        variant="dark"
        className="btn-add-pet"
      >
        Add Pet
      </Button>
      <Modal
        className="text-center"
        show={Payment}
        onHide={() => setPayment(false)}
        scrollable
        centered
      >
        <div style={{ padding: "15px" }}>
          <h1>Premium</h1>
          <h3>
            Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO</b>
          </h3>
          <Form>
            <Form.Control type="text" placeholder="No.Rek Kamu" />
          </Form>
          <div className="box-image "> </div>
          <Button className="btn-default" variant="dark" block>
            Kirim
          </Button>
        </div>
      </Modal>
    </Fragment>
  );
}
