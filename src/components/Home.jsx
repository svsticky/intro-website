import React, { Component } from "react";
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
      <main class="home">
        {getMenu(data.sections)}

        <a className="anchor" name = "top" href="anchor0" ref="anchor0"/>
        <a className="anchor" name="Title" href="anchor1" ref="anchor1"/>
        <a className="anchor" name="Programma" href="anchor2" ref="anchor2"/>
        <a className="anchor" name="Verenigingen" href="anchor3" ref="anchor3"/>
        <a className="anchor" name="FAQ" href="anchor4" ref="anchor4"/>
        <a className="anchor" name="Contact" href="anchor5" ref="anchor5"/>
        <div className="ui main container" href="container" ref="container">
          <div className="parallax" href="parallax" ref="parallax">
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/_nCyMKGLcvk" title="themabekendmakingsvideo" frameborder="0"></iframe>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <p className="ui center aligned huge header" ref="seg1">Introductie Informatica, Informatiekunde en Gametechnologie 2020</p>
                {getText(data.introduction)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <p className="ui center aligned large header" ref="seg2">Programma</p>
                {getProgram(data.program)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <p className="ui center aligned large header" ref="seg3">Verenigingen</p>
                {getAssociation(data.Associations)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <p className="ui center aligned large header" ref="seg4">FAQ</p>
                {getFAQ(data.FAQ)}
              </div>
            </div>
            <div className="ui fluid card seg">
              <div className="card content">
                <p className="ui center aligned large header" ref="seg5">Contact</p>
                <p className="ui centered grid">Bij voorkeur mailen vanwege wisselende telefonische beschikbaarheid in de zomer</p>
                {getContactPersons(data.contactPersons)}
              </div>
            </div>
          </div>
          <div className="ui fixed yellow inverted segment" href="fixed" ref="fixed">
          <a href="/inschrijven"><p className="ui center aligned huge header">Schrijf je in!</p></a>
          </div>
        </div>
      </main>
    );
  }
  //parallax setup with window correction
  componentDidMount = () => {
    window.addEventListener('scroll', this.parallax);
    window.addEventListener('resize',this.setSize)
    this.par = this.refs.parallax;
    this.anchors = [this.refs.anchor1,
    this.refs.anchor2,
    this.refs.anchor3,
    this.refs.anchor4,
    this.refs.anchor5];
    this.segments = [this.refs.seg1,
    this.refs.seg2,
    this.refs.seg3,
    this.refs.seg4,
    this.refs.seg5];
    this.fixed = this.refs.fixed;
    this.setSize();
    console.log(this.fixed);
  }
  setSize = () =>{
    $('main').height($(this.refs.parallax).height() * (1.55 - $(window).height() / 5260));
    $(this.refs.container).height($(this.refs.container).height() / 2.1);
    $(this.refs.fixed).width($(this.refs.container).width() - 28);
    for(let i = 0; i < 5; ++i){
      this.top = $(this.segments[i]).offset().top;
      $(this.anchors[i]).css('top', this.top * (1.19 + this.top*this.top / 65000000));
    }
  }
  //parallax scrolling
  parallax = () =>{
    $(this.refs.parallax).css("top",$(document).scrollTop()/4 + 58);
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
