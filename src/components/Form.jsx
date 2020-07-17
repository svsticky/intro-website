import React, { Component } from "react";
import Menu from "./Menu";
import $ from "jquery";
import data from './data.json';
import '../assets/inschrijven.css';

class Form extends Component {
  render() {
      return(
        <main>
            <div className="ui inverted fixed pointing menu">
              <div className="ui center aligned container">
                <a className="center aligned item" href="/">
                  <img
                      className="ui mini image"
                      src={require('../assets/logo.svg')}
                      alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="ui main container">
                <div className="ui fluid card seg">
                    <div className="ui content">
                        <p className="ui center aligned huge header">Inschrijven</p>
                        <form className = "ui form">
                            <div className="field">
                                <label for="fvoornaam">Voornaam</label>
                                <input type="text" id="fvoornaam" name="fvoornaam"/>
                            </div>
                            <div className="field">
                                <label for="fvoorletters">Voorletters</label>
                                <input type="text" id="fvoorletters" name="fvoorletters"/>
                            </div>
                            <div className="field">
                            <label for="ftussenvoegsel">Tussenvoegsel</label>
                            <input type="text" id="ftussenvoegsel" name="ftussenvoegsel"/>
                            </div>
                            <div className="field">
                            <label for="fachternaam">Achternaam</label>
                            <input type="text" id="fachternaam" name="fachternaam"/>
                            </div>
                            <div className="field">
                            <label for="fgeboortedatum">Geboortedatum</label>
                            <input type="date" id="fgeboortedatum" name="fgeboortedatum" min="1920-01-01" max="2016-01-01"/>
                            </div>
                            <div className="field">
                            <label for="fstudentnummer">Studentnummer <a className="hov">(?) </a><piv className="hid">Uitleg</piv></label>
                            <input type="number" id="fstudentnummer" name="fstudentnummer" min="1000000" max="9999999"/>
                            </div>
                            <div className="field">
                                <label for="fmobiel">Mobiel</label>
                                <input type="text" id="fmobiel" name="fmobiel"/>
                            </div>
                            <div className="field">
                                <label for="fstudie">Studie</label>
                                <select id="fstudie">
                                    <option value=""/>
                                    <option value="IC">Informatica</option>
                                    <option value="IK">Informatiekunde</option>
                                    <option value="IC/IK">Informatica en Informatiekunde</option>
                                </select>
                            </div>
                            <div className="field">
                                <label for="femail">Email</label>
                                <input type="email" id="femail" name="femail"/>
                            </div>
                            <button class="ui button" type="submit">Inschrijven</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
      )
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setSize);
    this.setSize();
  }
    //height fix
  setSize = () =>{
    if($(window).height() > $(document).height()){
        $('main').height($(window).height());
    }
    else{
        $('main').height($(document).height());
    }
  }
}
export default Form;