import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventoryList: [{
        img: '',
        name: 'T-shirt',
        price: '$14.99'
      }, 
      {
        img: '',
        name: 'Shoes',
        price: '$59.99'
      },
      {
        img: '',
        name: 'Jacket',
        price: '$199.99'
      }]
    }
  }


  render() {
    return (
      <div className="App">
        <Dashboard list={this.state.inventoryList}/>

        <Form />

        <Header />
      </div>
    );
  }
}

export default App;
