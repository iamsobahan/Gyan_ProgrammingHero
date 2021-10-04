import React from "react";
import { Card, Col } from "react-bootstrap";

const Course = (props) => {
  // getting data from Home component via props
  const { name, price, details, img } = props.course;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{details.slice(0, 70)}</Card.Text>
          <Card.Title>${price}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;
