import React, { Component } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import { latLngBounds } from "leaflet";

class Sidebar extends Component {
  render() {
    return (
      <article className="sidebar" >
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.content}
        </p>
      </article>
    )
  }
}

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
      content: "Content"
    }
    this.title = "Test";
    this.content = "Content"
  }

  pointOfInterest(title, content) {
    console.log(title);

    this.setState({
      title: title,
      content: content
    })
  }
  
  render() {
    const position = [this.coords.lat, this.coords.lng];
    const bounds = new latLngBounds([52.076361, 5.150056], [52.097342, 5.199981]);
    const educ = [52.085855, 5.171957];

    return (
      <main>
        <article>
          <h2>Ontdek de USP</h2>
        </article>
        <Sidebar title={this.state.title} content={this.state.content} />
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
            center={educ}
            radius={25}
            onclick={() => this.pointOfInterest(
              "Educatorium", 
              "Welkom bij het Educatorium! Dit gebouw wordt vooral door INCA en INKU studenten gebruikt voor het afnemen van tentamens."
            )}
          >
          </Circle>
          <Circle
            center={position}
            radius={25}
            onclick={() => this.pointOfInterest(
              "Test punt", 
              "Hey hoi! Dit is een test punt. Met dit punt kan er namelijk getest worden of het klikken op points of interests werkt! :)"
            )}
          >
          </Circle>
        </Map>
      </main>
    );
  }
}

export default MapPage;