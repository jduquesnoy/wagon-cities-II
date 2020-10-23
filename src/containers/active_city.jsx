import React, { Component } from 'react';

class ActiveCity extends Component { 
  constructor(props) { 
  super(props);

  }

  render() {
    return (
      <div className="active-city">
        <h3>Paris</h3>
        <p>16 Villa Gaudelet, 75011 Paris</p>
        <img src="https://kitt.lewagon.com/placeholder/cities/paris" width="100%" />
      </div>    
    );
  }
}

export default ActiveCity;


// import React from 'react';
// import { connect } from 'react-redux';

// const ActiveCity = (props) => {
//   if (!props.activeCity) {
//     return (
//       <div className="active-city">
//         <p>Select a city...</p>
//       </div>
//     );
//   }

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