import React, { Component } from "react";
import '../assets/inschrijven.css';

class Enrollment extends Component {
  render() {
      return (
        <iframe className="responsive-iframe" title="Enrollment" src={process.env.REACT_APP_ENROLLMENT_DELEGATE_WEBSITE_URL}/>
      );
  }
}

export default Enrollment;
