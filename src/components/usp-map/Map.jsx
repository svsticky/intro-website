import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { latLngBounds } from "leaflet";

// Custom components
import Sidebar from "./Sidebar";
import Location from "./Location";

// Locations & Paths
import data from "../../assets/objects.json";

class MapPage extends Component {
  constructor() {
    super();
    
    this.coords = {
      lat: 52.086332,
      lng: 5.175657,
      zoom: 16
    }

    this.state = {
      title: "Test",
      content: "Content",
      hidden: true
    }

    this.pointOfInterest = this.pointOfInterest.bind(this)
  }

  pointOfInterest(title, content) {
    this.setState({
      title: title,
      content: content,
      hidden: (title === this.state.title || this.state.hidden) ? !this.state.hidden : this.state.hidden
    });
  }
  
  render() {
    const position = [this.coords.lat, this.coords.lng];
    const bounds = new latLngBounds([52.076361, 5.150056], [52.097342, 5.199981]);
    const locations = data.points.map(point => {
      return <Location
        key={point.title}
        position={point.location}
        title={point.title}
        content={point.content}
        handler={this.pointOfInterest}
      />
    });

    return (
      <main>
        <article>
          <h2>Ontdek de USP</h2>
        </article>
        <Sidebar title={this.state.title} content={this.state.content} hidden={this.state.hidden} />
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
          {locations}
        </Map>
      </main>
    );
  }
}

export default MapPage;