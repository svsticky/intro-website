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
      <main ref="background">
        <Menu />

        <div className="ui main container">
          <a href="/inschrijven" className="ui fixed bottom attached inverted yellow segment container">
            <p className="ui huge black header">Schrijf je in!</p>
          </a>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/_nCyMKGLcvk" title="themabekendmakingsvideo" frameBorder="0"></iframe>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="ui center aligned huge header anchor" id="welkom">Introductie Informatica, Informatiekunde en Gametechnologie 2020</p>
              {getText(data.introduction)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="ui center aligned large header anchor" id="programma">Programma</p>
              {getProgram(data.program)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="ui center aligned large header anchor" id="verenigingen">Verenigingen</p>
              {getAssociation(data.Associations)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="ui center aligned large header anchor" id="faq">FAQ</p>
              {getFAQ(data.FAQ)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="ui center aligned large header anchor" id="contact">Contact</p>
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
    console.log(scrollHeight);
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
