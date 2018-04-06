import React, {Component} from 'react';

import CardList from './components/cards/CardList';
import Profile from './components/profile/Profile';

const URL = 'https://raw.githubusercontent.com/shoonia/incode/master/__task__/clients.json';

class App extends Component {
  state = {
    value: '',
    clients: [],
    currentCard: null
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

  searchFilter = (clients, value) => {
    const substring = value.toLowerCase();
    return clients.filter(item => {
      const keys = Object.keys(item);
      return keys.some(subItem => {
        return Object.values(item[subItem]).some(string => {
          return string.toLowerCase().includes(substring);
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
    const clientList = (value.trim() === '') ? clients : this.searchFilter(clients, value);

    return (
      <div className="container mt-3">
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
            <CardList
              clients={clientList}
              onClick={this.handleClick}
            />
          </div>
          <div className="col-8">
            <div className="sticky-top">
              { this.isEmptyObject(currentCard)
                ? <div className="text-light display-1">Profile ...</div>
                : <Profile {...currentCard} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
