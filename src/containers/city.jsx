import React, { Component } from 'react';

class City extends Component { 
 constructor(props) {
 super(props);
  this.state = { clicked: false }
 }
  handleClick = () => {
    if (this.props.selectCity) {
      this.props.selectCity(this.props.city);
    };
  }
 render() {
    return (
    <li
    className={`list-group-item ${this.state.clicked ? "clicked" : ""}`} onClick={this.handleClick}>{this.props.city.name}</li>
    );
  }
}

export default City;
