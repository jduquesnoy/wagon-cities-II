import React, { Component } from 'react';
import City from './city';

class CityList extends Component { 
  constructor(props) { 
  super(props);

  }
  render() {
    return (
      <div className="cities">
        <ul className= "list-group-item">
            {this.props.cities.map((city) => {
              return <City key={city.name} city={city}/>;
            })}
        </ul>
      </div> 
    );
  }
}

export default CityList;
