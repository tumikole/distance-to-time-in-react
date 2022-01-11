
import React, { useState }from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function GradConverter(){
  const [distance, updateDistance] = useState({ walking: 0, driving: 0, flight:0, value:0 })
  
  let walkingSpeed = 5;
  let drivingSpeed = 120 ;
  let flightSpeed = 900;

  const updateValue = ev => updateDistance({
     value:[ev.target.value],
     walking: (((+ev.target.value / 60) * 60) / walkingSpeed),
     driving: (((+ev.target.value / 60) * 60) / drivingSpeed),
     flight: (((+ev.target.value / 60) * 60) / flightSpeed)

  })
  

  
    return(
      <div id="container">
    <div id="box1">
  <h1>Add distance in km/h</h1>
  <input
      type = "number"
      value = {distance.value}
      onChange = {updateValue} 
      />
</div>
<br />
<Card>
       
<Row>
      <Col sm="4">
        <Card body>
          <CardTitle style={{fontSize:"2rem"}}>Walking</CardTitle>
          <CardText></CardText>
          <Button disabled>{distance.walking}</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle style={{fontSize:"2rem"}}>Driving</CardTitle>
          <CardText></CardText>
          <Button disabled>{distance.driving}</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle style={{fontSize:"2rem"}}>Flight</CardTitle>
          <CardText></CardText>
          <Button disabled>{distance.flight}</Button>
        </Card>
      </Col>
    </Row>

    </Card>

      </div>
    )};

      export default GradConverter