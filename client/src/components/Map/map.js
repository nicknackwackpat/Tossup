import React, { Component } from 'react';
import './map.css';
import USAMap from "react-usa-map";

class Map extends Component {

  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    return (
      <div className="map">
        <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
      </div>
    );
  }
}

export default Map;