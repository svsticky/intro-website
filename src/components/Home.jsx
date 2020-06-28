import React, { Component } from "react";
import {findDOMNode} from 'react-dom';
import ContactPerson from './ContactPerson';
import Date from './Date';
import data from './data.json';
import Question from './Question';
import Text from './Text';
import Association from "./Association";
import Menu from "./Menu";
import '../assets/home.css';
import $ from "jquery";

class Home extends Component {
  render() {
    return (
      <main>
        {getMenu(data.sections)}

        <a className="anchor" name = "top" ref="anchor0"/>
        <div className="ui main container" ref="container">
          <div className="parallax" ref="parallax">
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/ar9WRwCiSr0" title="themabekendmakingsvideo" frameborder="0"></iframe>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <a className="anchor" name="Title" ref="anchor1"/><p className="ui center aligned huge header">INCA / INKU Introductie</p>
                {getText(data.introduction)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <a className="anchor" name="Programma" ref="anchor2"/><p className="ui center aligned large header">Programma</p>
                {getProgram(data.program)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <a className="anchor" name="Verenigingen" ref="anchor3"/><p className="ui center aligned large header">Verenigingen</p>
                {getAssociation(data.Associations)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <a className="anchor" name="FAQ" ref="anchor4"/><p className="ui center aligned large header">FAQ</p>
                {getFAQ(data.FAQ)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <a className="anchor" name="Contact" ref="anchor5"/><p className="ui center aligned large header">Contact</p>
                <p className="ui centered grid">Bij voorkeur mailen vanwege wisselende telefonische beschikbaarheid in de zomer</p>
                {getContactPersons(data.contactPersons)}
              </div>
            </div>
          </div>
        </div>
        
      </main>
    );
  }
  //parallax setup with window correction
  componentDidMount = () => {
    window.addEventListener('scroll', this.parallax);
    window.addEventListener('resize',this.setSize)
    this.par = findDOMNode(this.refs.parallax);
    this.container = findDOMNode(this.refs.container);
    this.anchor = [findDOMNode(this.refs.anchor0),
    findDOMNode(this.refs.anchor1),
    findDOMNode(this.refs.anchor2),
    findDOMNode(this.refs.anchor3),
    findDOMNode(this.refs.anchor4),
    findDOMNode(this.refs.anchor5)]
    this.setSize();
  }
  setSize = () =>{
    $('main').height($(this.par).height() * (1.562 - $(window).height() / 5260));
    $(findDOMNode(this.container)).height($(findDOMNode(this.container)).height() / 2.1);
  }
  //parallax scrolling
  parallax = () =>{
    $(this.par).css("top",$(document).scrollTop()/4);
    //for(let i = 0; i < 6; ++i){
      //$(this.anchor[i]).css("top", this.normal[i]*($(document).scrollTop() / $(document).height() - 10)); //needs a better calculation
    //}
  }
}

const getMenu = items =>{
  return(
    <div className="ui inverted fixed pointing menu">
      <div className="ui center aligned container">
        <a className="item" href="#top">
          <img
              className="ui mini image"
              src={require('../assets/logo.svg')}
              alt="logo"
          />
        </a>
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
