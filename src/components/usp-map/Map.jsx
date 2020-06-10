import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MapPage extends Component {
  constructor() {
    super();
    
    this.coords = {
      lat: 52.086332,
      lng: 5.175657,
      zoom: 16
    }
  }
  
  render() {
    const position = [this.coords.lat, this.coords.lng]

    return (
      <main>
        <article>
          <h2>Ontdek de USP</h2>
        </article>
        <Map 
          center={position} 
          zoom={this.coords.zoom}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </Map>
      </main>
    );
  }
}

export default MapPage;