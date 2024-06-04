import React, { Component } from "react";
import ContactPerson from './ContactPerson.jsx';
import Date from './Date.jsx';
import data from './data.json';
import Mentor from './Mentor.jsx';
import Question from './Question.jsx';
import Text from './Text.jsx';
import Association from './Association.jsx';
import Menu from './Menu.jsx';
import '../assets/home.css';
import full_logo from '../assets/logos/logo.png'
import Social from "./Social";
import {StaticImage} from "gatsby-plugin-image";

class Home extends Component {
  render() {
    return (
      <main ref="background">
        <Menu />
        <div className="ui main container">
          {/*<div className="video-container">*/}
          {/* <iframe src="https://www.youtube.com/embed/2QVqjSWKahA" title="themabekendmakingsvideo" frameBorder="0"></iframe>*/}
          {/*</div>*/}
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="welkom"></p>
              <p className="ui center aligned huge header">Introductie Informatica, Informatiekunde en Gametechnologie
                2024-2025</p>
              {/*<StaticImage src="../assets/logos/logo.png" alt="Full Introduction logo" className="ui image"></StaticImage>*/}
              <h2 className="ui left aligned large header">{ data.introduction[0].name }</h2>
              <div dangerouslySetInnerHTML={{__html: data.introduction[0].text}}/>
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="kamp"></p>
              {getText(data.kamp)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="socials"></p>
              <p className="ui center aligned large header">Bekijk ook onze social media</p>
              <p className="ui center aligned">{data.socials.description}</p>
              {getSocials(data.socials.items)}
            </div>
          </div>
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="inschrijven"></p>
              <p className="ui center aligned large header">Inschrijven</p>

              {getText(data.register)}
              {/*<pretix-widget event="https://pretix.svsticky.nl/intro/2023/"></pretix-widget>*/}
              {/*<noscript>*/}
              {/*  <div className="pretix-widget">*/}
              {/*        <div className="pretix-widget-info-message">*/}
              {/*            JavaScript is disabled in your browser. To access our ticket shop without JavaScript,*/}
              {/*            please <a target="_blank" href="https://pretix.svsticky.nl/intro/2023/">click here</a>.*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</noscript>*/}
              {/*<p>*/}
              {/* Je kunt onze privacy statement <a href="https://raw.githubusercontent.com/svsticky/intro-website/intro-2023/src/assets/privacy-statement.md">hier</a> vinden.*/}
              {/*</p>*/}
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
              <p className="anchor" id="vereniging"></p>
              <p className="ui center aligned large header">De vereniging</p>
              {getAssociation(data.Associations)}
            </div>
          </div>
          {/*<div className="ui fluid card">*/}
          {/*  <div className="card content">*/}
          {/*    <p className="anchor" id="hoofdmentoren"></p>*/}
          {/*    <p className="ui center aligned large header">Hoofdmentoren</p>*/}
          {/*    {getMentors(data.Mentors)}*/}
          {/*  </div>*/}
          {/*</div>*/}
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
              <p className="ui centered grid">Bij voorkeur mailen vanwege wisselende telefonische beschikbaarheid in de zomer.</p>
              {getContactPersons(data.contactPersons)}
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  componentDidMount() {
    this.background = React.createRef();

    // Pretix
    const script = document.createElement('script');
    script.src = "https://pretix.eu/widget/v1.en.js";
    script.async = true;

    const link = document.createElement('link');
    link.href = "https://pretix.eu/demo/democon/widget/v1.css";
    link.rel = "stylesheet";
    link.type = "text/css";

    document.body.appendChild(link);
    document.body.appendChild(script);
  }
}

const getSocials = socials => {
  return (
      <div className="ui row center aligned">
        {
          socials.map((social, index) => (
              <Social social={social} key={index}></Social>
          ))
        }
      </div>
  )
}

const getText = texts => {
  return(
    <div className="ui">
      {
        texts.map((text, index)=>(
          <Text text={text} key={index} />
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
