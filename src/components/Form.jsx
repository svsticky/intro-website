import React, { Component } from "react";
import $ from "jquery";
import '../assets/inschrijven.css';

class Form extends Component {
  render() {
      return(
        <main>
            <div className="ui main container">
                <div className="ui fluid card seg">
                    <div className="ui content">
                        <p className="ui center aligned huge header">Inschrijven</p>
                        <form className = "ui form" action="/submitRegistration" method="post">
                            <div className="required field">
                                <label for="fvoornaam">Voornaam</label>
                                <input type="text" id="fvoornaam" name="fvoornaam"/>
                            </div>
                            <div className="fields">
                                <div className="required six wide field">
                                    <label for="fvoorletters">Voorletters</label>
                                    <input type="text" id="fvoorletters" name="fvoorletters"/>
                                </div>
                                <div className="four wide field">
                                    <label for="ftussenvoegsel">Tussenvoegsel</label>
                                    <input type="text" id="ftussenvoegsel" name="ftussenvoegsel"/>
                                </div>
                                <div className="required six wide field">
                                    <label for="fachternaam">Achternaam</label>
                                    <input type="text" id="fachternaam" name="fachternaam"/>
                                </div>
                            </div>
                            <div className="required field">
                                <label for="fgeboortedatum">Geboortedatum</label>
                                <input type="date" id="fgeboortedatum" name="fgeboortedatum" min="1920-01-01" max="2016-01-01"/>
                            </div>
                            <div className="required field">
                                <label for="fstudentnummer">Studentnummer</label>
                                <input type="number" id="fstudentnummer" name="fstudentnummer" min="1000000" max="9999999"/>
                            </div>
                            <div className="required field">
                                <label for="fmobiel">Mobiel</label>
                                <input type="text" id="fmobiel" name="fmobiel"/>
                            </div>
                            <div className="required field">
                                <label for="fstudie">Studie</label>
                                <select id="fstudie">
                                    <option value=""/>
                                    <option value="IC">Informatica</option>
                                    <option value="IK">Informatiekunde</option>
                                    <option value="IC/IK">Informatica en Informatiekunde</option>
                                </select>
                            </div>
                            <div className="required field">
                                <label for="femail">Email</label>
                                <input type="email" id="femail" name="femail"/>
                            </div>
                            <button class="ui button" type="submit">Inschrijven</button>
                        </form>
                    </div>
                    <div className="extra content">
                        <a href="/privacy.pdf">
                            Privacy
                        </a>
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

