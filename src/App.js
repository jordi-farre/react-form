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
    this.setState({[event.target.id]: event.target.value});
    this.setState({holderNameError: ''});
    if (!event.target.value) {
      if (event.target.id === 'holderName') {
        console.log('error');
        this.setState({holderNameError: 'HolderName is required'});
      }
    }
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="holderName" placeholder="Holder name" type="text" value={this.state.holderName} onChange={this.handleChange} />
        <div>{this.state.holderNameError}</div>
        <input id="cardNumber" placeholder="Card number" type="text" value={this.state.cardNumber} onChange={this.handleChange} />
        <select id="expirationMonth" value={this.state.expirationMonth} onChange={this.handleChange}>
          <option value="">Month</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        <select id="expirationYear" value={this.state.expirationMonth} onChange={this.handleChange}>
          <option value="">Year</option>
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
