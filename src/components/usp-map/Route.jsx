import React, { Component } from "react";

class RouteInfo extends Component {
  render() {
    return (
      <article className={this.props.hidden ? "hidden" : "route"}>
        <span 
          className="close"
          onClick={this.props.close}
        >
          X
        </span>
        <section className="content">
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
        </section>
      </article>
    )
  }
}

export default RouteInfo;