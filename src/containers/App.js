import React, { Component } from 'react';
import Header from '../components/Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container-fluid row">
          <div className="col-md-4">Menu</div>
          <div className="col-md-8">Articles</div>
        </div>
      </div>
    );
  }
}

export default App;
