import React, { Component } from 'react';
class ActiveCity extends Component { 
  constructor(props) { 
  super(props);

  }

  
  render() {
    if (!this.props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }
    return (
      <div className="active-city">
        <h3>{this.props.activeCity.name}</h3>
        <p>{this.props.activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`} width="100%" />
      </div> 
    );

  }
}

export default ActiveCity;


// import React from 'react';
// import { connect } from 'react-redux';

// const ActiveCity = (props) => {


//   const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

//   return (
//     <div className="active-city">
//       <h3>{props.activeCity.name}</h3>
//       <p>{props.activeCity.address}</p>
//       <img src={url} width="100%" />
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   return {
//     activeCity: state.activeCity
//   };
// }

// export default connect(mapStateToProps)(ActiveCity);