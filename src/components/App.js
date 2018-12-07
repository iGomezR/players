import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import { Header } from './header';
import Filters from './filters';
import Datatable from './table';

import { fetchPlayerList } from '../actions';
import { calculateAge } from '../util';
import { filter } from '../util/filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: null,
        position: null,
        age: null
    };
  }

  componentDidMount() {
    this.props.fetchPlayerList();
  }

  renderRows = () => {
    let players = [];

    players = filter(this.props.players, this.state);

    return players.map((value, idx) => (
      <tr key={value.jerseyNumber}>
        <td>{idx}</td>
        <td>{value.name}</td>
        <td>{value.position}</td>
        <td>{value.nationality}</td>
        <td>{calculateAge(value.dateOfBirth)}</td>
      </tr>
  ));
  }

  handleFilter = (id, value) => {
    this.setState({
      [id]: value
    })
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();
    this.props.fetchPlayerList();
  }

  render() {
    return (
      <div>
        <Header color='primary' />
        <Container style={Styles.Container}>
          <Filters 
            onSubmit={this.handleFilterSubmit}
            handleFilter={this.handleFilter}
            positions={this.props.positions}
          />
          <Datatable>
            { this.renderRows() }
          </Datatable>
        </Container>
      </div>
    );
  }
}

const Styles = {
  Container: {
    marginTop: 15
  }
}

const mapStateToProps = state => {
  const { players, positions, name, position, age } = state;
  return { players, positions, name, position, age };
}

export default connect(mapStateToProps, {
  fetchPlayerList
})(App);
