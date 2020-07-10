import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className={this.props.hidden ? "hidden" : "ui card buildingInfo"}>
        <section className="closeSection">
          <div className="closeButton" onClick={this.props.close}>
            X
          </div>
        </section>
        <div className="image">
          <img src={this.props.image}/>
        </div>
        <div className="content">
          <a className="header">{this.props.title}</a>
          <div className="meta">
            <span className="date">Subtext</span>
          </div>
          <div className="description">
            {this.props.content}
          </div>
        </div>
        <div className="extra content">
          <a>
            Extra informatie
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar;