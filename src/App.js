import React, { Component } from 'react';

import CardsList from './components/cards/CardsList';
import Profile from './components/profile/Profile';

const URL = 'https://raw.githubusercontent.com/shoonia/incode/master/__task__/clients.json';

class App extends Component {
  state = {
    clients: [],
    value: '',
    currentCard: {}
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

  handleClick = currentCard => {
    this.setState({ currentCard })
  };

  searchfilter = (clients, value) => {
    const pattern = value.toLowerCase();
    return clients.filter(item => {
      const keys= Object.keys(item);
      return keys.some(subItem => {
        return Object.values(item[subItem]).some(str => {
          return str.toLowerCase().includes(pattern);
        });
      });
    });
  };

  isEmptyObject (obj) {
    for (let key in obj) return false;
    return true;
  }

  render() {
    const {clients, value, currentCard} = this.state;
    const clientsFilter = (value.trim() === '') ? clients : this.searchfilter(clients, value);

    return (
      <article className="container mt-3">
          <div className="row">
            <div className="col-4">
              <div className="mb-3 pt-3 pb-3 sticky-top">
                <input
                  type="text"
                  value={value}
                  onChange={this.handleOnChange}
                  className="form-control"
                  placeholder="search"
                  autoFocus
                />
              </div>
              <CardsList
                clients={clientsFilter}
                onClick={this.handleClick}
              />
            </div>
            <div className="col-8">
              { this.isEmptyObject(currentCard)
                ? <span className="text-muted mt-1">Profile</span>
                : <Profile {...currentCard} />
              }
            </div>
          </div>
      </article>
    );
  }
}

export default App;
