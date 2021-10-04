import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = (props) => {
  let history = useHistory();
  const clickhander = () => {
    history.push("/home");
  };
  const { name, img, course, details } = props.service;
  return (
    <Col>
      <Card>
        <Card.Img className="img" variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <small>conduct by : </small> {name}{" "}
          </Card.Title>
          <Card.Text>{details.slice(0, 45)}</Card.Text>
          <Card.Title>Course title : {course}</Card.Title>

          <Button onClick={clickhander} variant="warning">
            Go to home
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDetails;
