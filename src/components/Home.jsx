import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import data from './data.json';
class Home extends Component {
  render() {
    return (
      <main>
        <article>
          <h2>INCA / INKU Introductie</h2>
          <div>
            {getContactPersons(data.contactPersons)}
          </div>
        </article>
      </main>      
    );
  }
}
const getContactPersons = contactPersons=>{
  return contactPersons.map(contactPerson=>(
  <ContactPerson contactPerson={contactPerson}/>
  ))
}

export default Home;