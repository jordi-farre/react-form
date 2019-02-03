import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Text } from 'react-form';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {holderName: '', cardNumber: '', expirationMonth: '', expirationYear: '', cvc: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "holderName") {
      this.setState({holderName: event.target.value});
    }
    if (event.target.id === "cardNumber") {
      this.setState({cardNumber: event.target.value});
    }
    if (event.target.id === "expirationMonth") {
      this.setState({expirationMonth: event.target.value});
    }
    if (event.target.id === "expirationYear") {
      this.setState({expirationYear: event.target.value});
    }
    if (event.target.id === "cvc") {
      this.setState({cvc: event.target.value});
    }
    
  }

  handleSubmit(event) {
    console.log('A form was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="holderName" placeholder="Holder name" type="text" value={this.state.holderName} onChange={this.handleChange} />
        <input id="cardNumber" placeholder="Card number" type="text" value={this.state.cardNumber} onChange={this.handleChange} />
        <select id="expirationMonth" value={this.state.expirationMonth} onChange={this.handleChange}>
          <option value="" selected>Month</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select id="expirationYear" value={this.state.expirationMonth} onChange={this.handleChange}>
          <option value="" selected>Year</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
        </select>
        <input id="cvc" placeholder="CVC" type="text" value={this.state.cvc} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
