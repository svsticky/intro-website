import React, { Component } from "react";
import ContactPerson from './ContactPerson';
import Date from './Date';
import data from './data.json';
import Mentor from './Mentor';
import Question from './Question';
import Text from './Text';
import Association from "./Association";
import Menu from "./Menu";
import '../assets/home.css';

class Home extends Component {
  render() {
    return (
      <main ref="background">
        <Menu />

        <div className="ui main container">
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="welkom"></p>
              <p className="ui center aligned huge header">Introductie Informatica, Informatiekunde en Gametechnologie 2020</p>
              {getText(data.introduction)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="programma"></p>
              <p className="ui center aligned large header">Programma</p>
              {getText(data.programDisclaimer)}<br/>
              {getProgram(data.program)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="verenigingen"></p>
              <p className="ui center aligned large header">Verenigingen</p>
              {getAssociation(data.Associations)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="hoofdmentoren"></p>
              <p className="ui center aligned large header">Hoofdmentoren</p>
              {getMentors(data.Mentors)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="faq"></p>
              <p className="ui center aligned large header">FAQ</p>
              {getFAQ(data.FAQ)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="contact"></p>
              <p className="ui center aligned large header" id="contact">Contact</p>
              <p className="ui centered grid">Bij voorkeur mailen vanwege wisselende telefonische beschikbaarheid in de zomer</p>
              {getContactPersons(data.contactPersons)}
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.parallax, true);
    this.background = React.createRef();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  //handle parallax scrolling
  parallax = () => {
    var scrollHeight = window.scrollY;
    var parallax = this.refs.background;
    parallax.style["margin-top"] = -scrollHeight/10 + "px";
    parallax.style["padding-top"] = scrollHeight/10 + "px";
  }
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
const getMentors = mentors=>{
  return (
    <div className="ui centered four doubling cards">
      {
        mentors.map((mentor, index)=>(
          <Mentor mentor={mentor} key={index}/>
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
    <div className="ui centered four doubling cards">
      {
        contactPersons.map((contactPerson, index)=>(
          <ContactPerson contactPerson={contactPerson} key={index}/>
        ))
      }
    </div>
  )
}


export default Home;
