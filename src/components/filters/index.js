import React from "react";

import { Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Filters = props => {
  return (
    <Row>
      <Col>
        <Form className="filters-form" inline style={Styles.Form}>
          <FormGroup>
            <Input
              placeholder="Player name"
              style={Styles.Select}
              type="text"
              id="name"
              onBlur={event => props.handleFilter(event.target.id, event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Position"
              style={Styles.Select}
              type="select"
              id="position"
              defaultValue={null}
              onChange={event => props.handleFilter(event.target.id, event.target.value)}
            >
              <option value={''}>Position</option>
              { props.positions.map(value => <option key={value} value={value}>{value}</option>) }
            </Input>
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Age"
              style={Styles.Select}
              type="number"
              id="age"
              min="18"
              max="40"
              value={props.age}
              onBlur={event => props.handleFilter(event.target.id, event.target.value)}
            />
          </FormGroup>
          <Button className="button" color="success" onClick={e => e.preventDefault()}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

const Styles = {
  Select: {
    width: 300
  },
  Form: {
    justifyContent: "space-between",
    marginBottom: 15
  }
};

export default Filters;
