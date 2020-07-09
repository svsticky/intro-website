import React, { Component } from "react";
import { Circle } from "react-leaflet";

class Location extends Component {
  render() {
    return (
      <Circle
        center={this.props.position}
        radius={25}
        onclick={() => this.props.handler(
          this.props.title,
          this.props.content,
          this.props.image
        )}
      />
    )
  }
}

export default Location;