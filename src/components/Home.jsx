import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import data from './data.json';
class Home extends Component {
  render() {
    return (
      <main>
        <div class="ui container">
          <h2 class="ui center aligned header">INCA / INKU Introductie</h2>
          {getContactPersons(data.contactPersons)}
        </div>
      </main>      
    );
  }
}
const getContactPersons = contactPersons=>{
  return (
  <div class="ui four column doubling stackable grid">
    {
      contactPersons.map(contactPerson=>(
      <ContactPerson contactPerson={contactPerson}/>
      ))
    }
  </div>
  )
}

export default Home;