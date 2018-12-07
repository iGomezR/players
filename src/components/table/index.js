import React from "react";
import { Table } from "reactstrap";

const Datatable = props => (
  <Table bordered hover>
    <thead>
      <tr>
        <th>Order</th>
        <th>Player</th>
        <th>Position</th>
        <th>Team</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>{props.children}</tbody>
  </Table>
);

export default Datatable;
