import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.handleAddress = this.handleAddress.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }
  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleAddress(e) {
    this.setState({ address: e.target.value });
  }

  handleCity(e) {
    this.setState({ city: e.target.value });
  }
  handleState(e) {
    this.setState({ state: e.target.value });
  }
  handleZip(e) {
    this.setState({ zipcode: e.target.value });
  }
  addHouse() {
    axios.post('/api/newhouse', 
    { name: this.state.name, 
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode
    })
      .then(res => {this.setState({name: '', address: '', city: '', state: '', zipcode: ''})
    });
  }

  render() {

    return (
      <div className="Wizard">
        <div className="newlisting">
          <h1>Add New Listing</h1>
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>
        </div>
        <div className="propertyname">
          <h3>Property Name</h3>
          <input value ={this.state.name} onChange={this.handleName} type="text" />
        </div>
        <div className="address">
          <h3>Address</h3>
          <input value ={this.state.address} onChange={this.handleAddress} type="text" />
        </div>
        <div className="city">
          <h3>City</h3>
          <input value ={this.state.city} onChange={this.handleCity} type="text" />
        </div>
        <div className="state">
          <h3>State</h3>
          <input value ={this.state.state} onChange={this.handleState} type="text" />
        </div>
        <div className="zip">
          <h3>Zip</h3>
          <input value ={this.state.zipcode} onChange={this.handleZip} type="text" />
        </div>
        <div className="complete">
            <Link to={"/"}>
          <button onClick={this.addHouse}>Complete</button>
            </Link>
        </div>
      </div>
    );
  }
}

export default Wizard;
