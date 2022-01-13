import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function CalculatingDistatance() {
  const [distance, updateDistance] = useState({
    walking: "00:00",
    driving: "00:00",
    flight: "00:00",
    value: 0,
  });

  let walkingSpeed = 3.6;
  let drivingSpeed = 80;
  let flightSpeed = 800;

  const updateValue = (ev) => {
    updateDistance({
      value: [ev.target.value],
      walking: +ev.target.value / walkingSpeed,
      driving: +ev.target.value / drivingSpeed.toFixed(2),
      flight: +ev.target.value / flightSpeed.toFixed(2),
    })
  };

  return (
    <div id="container">
      <small>Enter distance in km/h</small>
      <div id="box1">
        <input
          type="number"
          value={distance.value}
          onChange={updateValue}
          placeholder="Add distance in km/h"
        />
      </div>
      <br />
      <Card style={{ width: "30%", margin: "auto" }}>
        <Row
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            margin: "0 auto",
            width: "108rem",
          }}
        >
          <Col sm="4">
            <Card body>
              <CardTitle style={{ fontSize: "2rem" }}>Walking</CardTitle>
              <CardText>Avarage time to reach your destination </CardText>
              <Button disabled>{typeof distance.walking === "number" > 0 ?  Math.floor(distance.walking) : Math.ceil(distance.walking)}</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle style={{ fontSize: "2rem" }}>Driving</CardTitle>
              <CardText>Avarage time to reach your destination</CardText>
              <Button disabled>{distance.driving}</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle style={{ fontSize: "2rem" }}>Flight</CardTitle>
              <CardText>Avarage time to reach your destination</CardText>
              <Button disabled>{distance.flight}</Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CalculatingDistatance;
