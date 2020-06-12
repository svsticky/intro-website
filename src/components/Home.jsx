import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import Date from './Date';
import data from './data.json';
import Question from './Question';
import Text from './Text';
import Assosiation from "./Assosiation";
class Home extends Component {
  render() {
    return (
      <main>
        <div className="ui container">
          <p className="ui center aligned huge header">INCA / INKU Introductie</p>
          {getText(data.introduction)}
          <p className="ui center aligned large header">Programma</p>
          {getProgram(data.program)}
          <p className="ui center aligned large header">Verenigingen</p>
          {getAssosiation(data.Assosiations)}
          <p className="ui center aligned large header">FAQ</p>
          {getFAQ(data.FAQ)}
          <p className="ui center aligned large header">Contact</p>
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
        texts.map((text, index)=>(
          <Text text={text} key={index}/>
        ))
      }
    </div>
  )
}
const getProgram = dates =>{
  return(
    <div className="ui grid">
      {
        dates.map((date, index) => (
          <Date date={date} key={index}/>
        ))
      }
    </div>
  )
}
const getAssosiation = assosiations =>{
  return(
    <div className="ui grid">
      {
        assosiations.map((assosiation, index)=>(
          <Assosiation assosiation={assosiation} key={index}/>
        ))
      }
    </div>
  )
}
const getFAQ = FAQ =>{
  return(
    <div className="ui celled grid">
      {
        FAQ.map((question, index)=>(
          <Question question={question} key={index}/>
        ))
      }
    </div>
  )
}
const getContactPersons = contactPersons=>{
  return (
    <div className="ui centered four column doubling stackable grid">
      {
        contactPersons.map((contactPerson, index)=>(
          <ContactPerson contactPerson={contactPerson} key={index}/>
        ))
      }
    </div>
  )
}

export default Home;