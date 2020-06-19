import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import Date from './Date';
import data from './data.json';
import Question from './Question';
import Text from './Text';
import Association from "./Association";
import Menu from "./Menu";
import '../assets/home.css';

class Home extends Component {
  render() {
    return (
      <main>
        {getMenu(data.sections)}
        <div className="ui main container">
          <div className="ui fluid card">
            <div className="card content">
              <a name="Title"/><p className="ui center aligned huge header">INCA / INKU Introductie</p>
              {getText(data.introduction)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <a name="Programma"/><p className="ui center aligned large header">Programma</p>
              {getProgram(data.program)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <a name="Verenigingen"/><p className="ui center aligned large header">Verenigingen</p>
              {getAssociation(data.Associations)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <a name="FAQ"/><p className="ui center aligned large header">FAQ</p>
              {getFAQ(data.FAQ)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <a name="Contact"/><p className="ui center aligned large header">Contact</p>
              {getContactPersons(data.contactPersons)}
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const getMenu = items =>{
  return(
    <div className="ui inverted fixed pointing menu">
      <div className="ui container">
        {
          items.map((item,index)=>(
            <Menu item={item} key={index}/>
          ))
        }
      </div>
    </div>
  )
}
const getText = texts =>{
  return(
    <div className="ui">
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
    <div className="ui">
      {
        dates.map((date, index) => (
          <Date date={date} key={index}/>
        ))
      }
    </div>
  )
}
const getAssociation = associations =>{
  return(
    <div className="ui">
      {
        associations.map((association, index)=>(
          <Association association={association} key={index}/>
        ))
      }
    </div>
  )
}
const getFAQ = FAQ =>{
  return(
    <div className="ui">
      {
        
        FAQ.map((question, index)=>(
          <Question question = {question} key = {index}/>
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
