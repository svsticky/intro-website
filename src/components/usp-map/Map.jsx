import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import { latLngBounds } from "leaflet";

// Custom components
import Sidebar from "./Sidebar";
import Location from "./Location";
import Path from "./Path";
import RouteInfo from "./Route"

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
      title: "",
      content: "",
      video: "",
      hiddenSidebar: true,
      hiddenRoute: true
    }

    this.pointOfInterest = this.pointOfInterest.bind(this)
    this.route = this.route.bind(this)
    this.close = this.close.bind(this)
  }

  pointOfInterest(title, content) {
    this.setState({
      title: title,
      content: content,
      hiddenSidebar: (title === this.state.title || this.state.hiddenSidebar) ? !this.state.hiddenSidebar : this.state.hiddenSidebar
    });
  }

  route(title, content, video) {
    this.setState({
      title: title,
      content: content,
      video: video,
      hiddenRoute: (title === this.state.title || this.state.hiddenRoute) ? !this.state.hiddenRoute : this.state.hiddenRoute
    });
  }

  close() {
    this.setState({
      hiddenRoute: true
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
    const paths = data.paths.map(path => {
      return <Path
        key={path.title}
        positions={path.positions}
        title={path.title}
        content={path.content}
        video={path.video}
        handler={this.route}
      />
    });

    return (
      <main>
        <article>
          <article className="header">
            <h2>Ontdek de USP</h2>
          </article>
          <RouteInfo 
            title={this.state.title}
            content={this.state.content}
            video={this.state.video}
            hidden={this.state.hiddenRoute}
            close={this.close}
          />
          <Sidebar title={this.state.title} content={this.state.content} hidden={this.state.hiddenSidebar} />
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
            {paths}
          </Map>
        </article>
      </main>
    );
  }
}

export default MapPage;