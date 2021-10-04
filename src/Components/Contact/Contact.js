import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <Container className="eliment_Top_margin">
      <div className="title">
        <h2>Keep in touch</h2>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
