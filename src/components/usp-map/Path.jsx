import React, { Component } from "react";
import { Polygon } from "react-leaflet";

class Path extends Component {
  render() {
    return (
      <Polygon
        positions={this.props.positions}
        weight="5"
        onclick={() => this.props.handler(
          this.props.title,
          this.props.content,
          this.props.video
        )}
      />
    )
  }
}

export default Path;