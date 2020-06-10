import React, { Component } from "react";

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

export default Sidebar;