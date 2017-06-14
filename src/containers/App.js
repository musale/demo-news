import React, { Component } from 'react';
import Header from '../components/Header';
import LHSMenu from '../components/LHSMenu';
import '../css/App.css';
const items = [
  {name: 'Jeff'},
  {name: 'Koinange'},
  {name: 'Keff'},
  {name: 'Joinange'},
  {name: 'Jay'},
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid row">
          <div className="col-md-3">
            <LHSMenu sources={items} />
          </div>
          <div className="col-md-9">Articles</div>
        </div>
      </div>
    );
  }
}

export default App;
