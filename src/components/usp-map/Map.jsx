import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { latLngBounds } from "leaflet";

// Custom components
import Sidebar from "./Sidebar";
import Location from "./Location";

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
          <Location
            position={[52.085855, 5.171957]}
            title="Educatorium"
            content="Welkom bij het Educatorium! Dit gebouw wordt vooral door INCA en INKU studenten gebruikt voor het afnemen van tentamens."
            handler={this.pointOfInterest}
          />
          <Location
            position={position}
            title="Test punt"
            content="Hey hoi! Dit is een test punt. Met dit punt kan er namelijk getest worden of het klikken op points of interests werkt! :)"
            handler={this.pointOfInterest}
          />
        </Map>
      </main>
    );
  }
}

export default MapPage;