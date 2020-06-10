import React, { Component } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import { latLngBounds } from "leaflet";

class MapPage extends Component {
  constructor() {
    super();
    
    this.coords = {
      lat: 52.086332,
      lng: 5.175657,
      zoom: 16
    }
  }

  pointOfInterest(x) {
    console.log(x);
  }
  
  render() {
    const position = [this.coords.lat, this.coords.lng];
    const bounds = new latLngBounds([52.076361, 5.150056], [52.097342, 5.199981]);

    return (
      <main>
        <article>
          <h2>Ontdek de USP</h2>
        </article>
        <Map 
          center={position}
          zoom={this.coords.zoom}
          maxBounds={bounds}
          minZoom={15}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Circle
            center={position}
            radius={20}
            mouseover={this.pointOfInterest("Test")}
          >
          </Circle>
        </Map>
      </main>
    );
  }
}

export default MapPage;