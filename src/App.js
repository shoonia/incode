import React, { Component } from 'react';

const URL = 'https://raw.githubusercontent.com/shoonia/incode/master/__task__/clients.json';

class App extends Component {
  state = {
    clients: []
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

  render() {
    return (
      <div className="container mt-3">
          <div className="row">
            <div className="col-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-8">block</div>
          </div>
      </div>
    );
  }
}

export default App;
