import React, { Component } from 'react';
import './App.css';
import DataFetchingWithEffect from './components/DataFetchingWithEffect';

class App extends Component {
  render() {
    return (
      <div classname="container">
        <DataFetchingWithEffect/>
      </div>
    );
  }
}
export default App;
