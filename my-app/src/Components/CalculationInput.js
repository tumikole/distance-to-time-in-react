import React, { Component } from "react";
import "../App.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import AvarageSpeed from "./AvarageSpeed";

class CalculationInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      walking: "",
      driving:"",
      flight:""
     
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

 

  handleSubmit = (event) => {
    event.preventDefault();
    const { walking, driving, flight } = this.state;

    let newState = {
      walking,
      driving,
      flight,
    };
    if (walking && driving && flight !== "") {
      this.setState({
        list: [...this.state.list, newState],
      });
    }
    this.setState({
      walking: "",
      driving: "",
      flight: "",
     
    });
  };

  render() {
    const { walking, driving, flight } = this.state;
    return (
      
          <div>
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleName">Walking</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Walking"
                    value={walking}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSurname">Driving</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="driving"
                    placeholder="driving"
                    value={driving}
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
                <Label for="exampleId">Flight</Label>
                  <Input
                    type="number"
                    name="flight"
                    placeholder="flight"
                    value={flight}
                    onChange={this.handleChange}
                  />

                  <input type="submit" value="Calculate" />
              
            </Form>
          <AvarageSpeed
            list={this.state.list}
          />
        
      </div>
    );
  }
}

export default CalculationInput;
