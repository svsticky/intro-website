import React, { Component } from "react";
import ContactPerson from './ContactPerson.jsx';
import ConfidentialContactPerson from './ConfidentialContactPerson';
import Date from './Date.jsx';
import data from './data.json';
import Mentor from './Mentor.jsx';
import Question from './Question.jsx';
import Text from './Text.jsx';
import Association from './Association.jsx';
import Menu from './Menu.jsx';
import '../assets/home.css';
// import banner_logo from '../assets/logos/banner.png'
import Social from "./Social";
import {StaticImage} from "gatsby-plugin-image";

class Home extends Component {
  render() {
    return (
      <main ref="background">
        <Menu />
        <div className="ui main container">
          {/*<div className="video-container">*/}
          {/*<iframe width="315" height="560"*/}
          {/*  src="https://www.youtube.com/embed/cIDGDxRnxnE"*/}
          {/*  title="Themabekendmakingsvideo"*/}
          {/*  frameBorder="0"*/}
          {/*  allow="encrypted-media; picture-in-picture; web-share"*/}
          {/*  allowfullscreen*/}
          {/*></iframe>*/}
          {/*</div>*/}
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="welkom"></p>
              <p className="ui center aligned huge header">Introductie Informatica, Informatiekunde en Gametechnologie
                2025-2026</p>
              {/*<StaticImage src="../assets/logos/banner.png" alt="Introduction banner"*/}
              {/*             className="ui image"></StaticImage>*/}
              <StaticImage src="https://public.svsticky.nl/logos/logo_outline_kleur.png" className="ui image" />

              <h2 className="ui left aligned large header">{data.introduction[0].name}</h2>
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
              <div dangerouslySetInnerHTML={{__html: data.register[0].text}}/>

              <div className="ui center aligned">
                <a href="https://pretix.svsticky.nl/intro/intro-2024-2025/" target="_blank">
                  <button className="ui button large" style={{backgroundColor: "#197052", color: "#FFF"}}>
                    Ga naar de shop
                  </button>
                </a>
              </div>
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
              <p className="anchor" id="vertrouwenscontactpersonen"></p>
              <p className="ui center aligned large header">Vertrouwenscontactpersonen</p>
              {getConfidentialContactPersons(data.confidentialContactPersons)}
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
          <div className="ui fluid card">
            <div className="card content">
              <p className="anchor" id="terms-and-conditions"></p>
              <p className="ui center aligned large header" id="terms-and-conditions">Voorwaarden</p>
              <p>
                De algemene voorwaarden van de introductie kun je <a href="https://raw.githubusercontent.com/svsticky/intro-website/master/src/assets/terms_and_conditions.md">hier</a> vinden.<br/>
                De privacy statement van de introductie kun je <a href="https://raw.githubusercontent.com/svsticky/intro-website/master/src/assets/privacy-statement.md">hier</a> vinden.<br/>
                De gedragsregels van Studievereniging Sticky kun je <a href="https://public.svsticky.nl/Code%20of%20Conduct%20[Nederlands].pdf">hier</a> vinden.
              </p>
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

const getConfidentialContactPersons = confidentialContactPersons => {
  return (
    <div className="ui centered four doubling cards">
      {
        confidentialContactPersons.map((confidentialContactPerson, index) => (
          <ConfidentialContactPerson confidentialContactPerson={confidentialContactPerson} key={index}/>
        ))
      }
    </div>
  )
}

const getContactPersons = contactPersons => {
  return (
    <div className="ui centered four doubling cards">
      {
        contactPersons.map((contactPerson, index) => (
          <ContactPerson contactPerson={contactPerson} key={index}/>
        ))
      }
    </div>
  )
}


export default Home;
