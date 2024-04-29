import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { TiDelete } from "react-icons/ti";

function CardWeather({ item, handleDelete }) {
  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Title>
            {item.location.name} / {item.location.country}
          </Card.Title>
          <div className="cursor-pointer">
            <TiDelete onClick={() => handleDelete(item)} size={25} />
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            Feels like: {item.current.feelslike_c} °C
          </ListGroup.Item>
          <ListGroup.Item>Humidity: {item.current.humidity}</ListGroup.Item>
          <ListGroup.Item>Temperature: {item.current.temp_c} °C</ListGroup.Item>
          <ListGroup.Item>Local Time: {item.location.localtime}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Card.Img variant="top" src={item.current.condition.icon}  />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardWeather;
