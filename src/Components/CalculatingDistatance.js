import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

function CalculatingDistatance() {
  const [distance, updateDistance] = useState({
    walking: "0",
    driving: "0",
    flight: "0",
    value: 0,
  });

  let walkingSpeed = 3.6;
  let drivingSpeed = 100;
  let flightSpeed = 800;

  const updateValue = (ev) => {
    updateDistance({
      value: [ev.target.value],
      walking: +ev.target.value * 60 / walkingSpeed.toFixed(2),
      driving: +ev.target.value * 60  / drivingSpeed.toFixed(2),
      flight: +ev.target.value * 60 / flightSpeed.toFixed(2),
    })
  };

  function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = ((hours - rhours) * 60);
    var rminutes = Math.round(minutes);
    return  rhours + " hour(s) and " + rminutes + " minute(s)";
    }

  return (
    <div id="container">
      <Card style={{ width: "30%", margin: "auto" }}>
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
              <CardText>Avarage time to reach your destination in minutes</CardText>
              {/* <Button disabled>00:{   : distance.walking} Munutes</Button> */}
              <Button disabled>{typeof distance.walking === "number" ? timeConvert(distance.walking): Math.round(distance.walking)}</Button>

            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle style={{ fontSize: "2rem" }}>Driving</CardTitle>
              <CardText>Avarage time to reach your destination in minutes</CardText>
              <Button disabled>{typeof distance.driving === "number" ? timeConvert(distance.driving) : Math.round(distance.driving)  }</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <CardTitle style={{ fontSize: "2rem" }}>Flight</CardTitle>
              <CardText>Avarage time to reach your destination in minutes</CardText>
              <Button disabled>{typeof distance.flight === "number" ? timeConvert(distance.flight) : Math.round(distance.flight)}</Button>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default CalculatingDistatance;
