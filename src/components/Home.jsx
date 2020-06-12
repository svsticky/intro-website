import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import Date from './Date';
import data from './data.json';
import Question from './Question';
import Text from './Text';
import assosiation from './Assosiation';
import Assosiation from "./Assosiation";
class Home extends Component {
  render() {
    return (
      <main>
        <div className="ui container">
          <p className="ui center aligned huge header">INCA / INKU Introductie</p>
          {getText(data.introduction)}
          <p className="ui center alinged large header">Programma</p>
          {getProgram(data.program)}
          <h3 className="ui center aligned large header">Verenigingen</h3>
          {getText(data.Assosiations)}
          <h3 className="ui center alinged large header">FAQ</h3>
          {getFAQ(data.FAQ)}
          <h3 className="ui center alinged large header">Contact</h3>
          {getContactPersons(data.contactPersons)}
        </div>
      </main>      
    );
  }
}
const getText = texts =>{
  return(
    <div className="ui grid">
      {
        texts.map(text=>(
          <Text text={text}/>
        ))
      }
    </div>
  )
}
const getProgram = dates =>{
  return(
    <div className="ui grid">
      {
        dates.map(date => (
          <Date date={date}/>
        ))
      }
    </div>
  )
}
const getFAQ = FAQ =>{
  return(
    <div className="ui celled grid">
      {
        FAQ.map(question=>(
          <Question question={question}/>
        ))
      }
    </div>
  )
}
const getContactPersons = contactPersons=>{
  return (
    <div className="ui four column doubling stackable grid">
      {
        contactPersons.map(contactPerson=>(
          <ContactPerson contactPerson={contactPerson}/>
        ))
      }
    </div>
  )
}

export default Home;