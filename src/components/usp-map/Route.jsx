import React, { Component } from "react";

class RouteInfo extends Component {
  render() {
    return (
      <div className={this.props.hidden ? "hidden" : "route"}>
        <section className="closeSection">
          <div className="closeButton" onClick={this.props.close}>
            X
          </div>
        </section>
        <div className="ui card routeBody">
          <section className="routeVideo">
            <iframe
              height="100%"
              width="100%"
              title={this.props.title}
              src={"https://www.youtube.com/embed/"+this.props.video} 
              frameBorder="0" 
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </section>
          <section className="routeInfo">
            <section className="text">
              <h1>{this.props.title}</h1>
              <p>
                {this.props.content}
              </p>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default RouteInfo;