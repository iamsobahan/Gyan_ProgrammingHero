import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Teacherdetails.css";

const Teacherdetails = (props) => {
  // This is click hander function and using usehistory for creating route path
  const history = useHistory();
  const clickhandler = () => {
    history.push("/home");
  };

  // getting data from Teacher Component via props
  const { name, position, details, img } = props.teacher;
  return (
    <Col>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>Position :{position}</Card.Text>
          <Card.Text>{details.slice(0, 50)}</Card.Text>
          <Button onClick={clickhandler} variant="warning">
            Go homepage
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Teacherdetails;
