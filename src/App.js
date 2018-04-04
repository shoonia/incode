import React, { Component } from 'react';

import CardsList from './components/cards/CardsList';

const URL = 'https://raw.githubusercontent.com/shoonia/incode/master/__task__/clients.json';

class App extends Component {
  state = {
    clients: [],
    value: ''
  }

  componentDidMount () {
    fetch(URL).then(res => res.json())
      .then(clients => {
        this.setState({ clients });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleOnChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  searchfilter = (clients, value) => {
    const pattern = value.toLowerCase();
    return clients.filter(item => {
      const elem1 = Object.keys(item);
      return elem1.some(subItem => {
        return Object.values(item[subItem]).some(str => {
          return str.toLowerCase().includes(pattern);
        });
      });
    });
  };

  render() {
    const {clients, value} = this.state;
    const clientsFilter = (value.trim() === '') ? clients : this.searchfilter(clients, value);

    return (
      <div className="container mt-3">
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <input
                  type="text"
                  value={value}
                  onChange={this.handleOnChange}
                  className="form-control"
                  placeholder="search"
                />
              </div>
              <CardsList clients={clientsFilter} />
            </div>
            <div className="col-8">block</div>
          </div>
      </div>
    );
  }
}

export default App;
