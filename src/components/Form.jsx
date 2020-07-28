import React, { Component } from "react";
import $ from "jquery";
import '../assets/inschrijven.css';

class Form extends Component {
  render() {
      return(
        <main>
            <div className="ui main container">
                <div className="ui fluid card">
                    <div className="ui content">
                        <p className="ui center aligned huge header">Inschrijven</p>
                        <form className = "ui form" action="/submitRegistration" method="post">
                            <h4 class="ui dividing header">Jouw gegevens</h4>
                            <div className="required field">
                                <label for="fvoornaam">Voornaam</label>
                                <input type="text" id="fvoornaam" name="fvoornaam" placeholder="Jan" required/>
                            </div>
                            <div className="fields">
                                <div className="required two wide field">
                                    <label for="fvoorletters">Voorletters</label>
                                    <input type="text" id="fvoorletters" name="fvoorletters" placeholder="J" required/>
                                </div>
                                <div className="two wide field">
                                    <label for="ftussenvoegsel">Tussenvoegsel</label>
                                    <input type="text" id="ftussenvoegsel" name="ftussenvoegsel" placeholder="van de"/>
                                </div>
                                <div className="required twelve wide field">
                                    <label for="fachternaam">Achternaam</label>
                                    <input type="text" id="fachternaam" name="fachternaam" placeholder="Jansen" required/>
                                </div>
                            </div>
                            <div className="required field">
                                <label for="fgeboortedatum">Geboortedatum</label>
                                <input type="date" id="fgeboortedatum" name="fgeboortedatum" min="1920-01-01" max="2016-01-01" required/>
                            </div>
                            <h4 class="ui dividing header">Studiegegevens</h4>
                            <div className="required field">
                                <label for="fstudentnummer">Studentnummer</label>
                                <input type="number" id="fstudentnummer" name="fstudentnummer" min="1000000" max="9999999" placeholder="1234567" required  title="7 cijferig studentnummer"/>
                            </div>
                            <div className="required field">
                                <label for="fstudie">Studie</label>
                                <select id="fstudie" name="fstudie">
                                    <option value="IC">Informatica</option>
                                    <option value="IK">Informatiekunde</option>
                                    <option value="IC/IK">Informatica en Informatiekunde</option>
                                </select>
                            </div>
                            <h4 class="ui dividing header">Contactgegevens</h4>
                            <div className="required field">
                                <label for="fmobiel">Mobiel</label>
                                <input type="tel" id="fmobiel" name="fmobiel" pattern="[0-9]{10}" placeholder="0612345678" required title="10 cijferig telefoonnummer"/>
                            </div>
                            
                            <div className="required field">
                                <label for="femail">Email (mag niet je studenten mail zijn)</label>
                                <input type="email" id="femail" name="femail" placeholder="jan@example.com" required/>
                            </div>
                            <h4 class="ui dividing header">Maaltijden</h4>
                            <div className="required field">
                                <label for="feetvoorkeur">Heb je voorkeur voor vegetarische of veganistische maaltijden?</label>
                                <select id="feetvoorkeur" name="feetvoorkeur">
                                    <option value="geen">Nee</option>
                                    <option value="vega">Ja, vegetarisch</option>
                                    <option value="vegan">Ja, veganistisch</option>
                                </select>
                            </div>
                            <div className="field">
                                <label for="fallergien">Heb je allergiën of medische aandoeningen waar we rekening mee moeten houden?</label>
                                <input id="fallergien" name="fallergien"/>
                            </div>
                            <h4 class="ui dividing header">Contactgegevens voor noodgevallen</h4>
                            <div className="required field">
                                <label for="fnoodnaam">Met wie kunnen we contact opnemen in geval van nood?</label>
                                <input type="text" id="fnoodnaam" name="fnoodnaam" placeholder="Jan Jansen" required/>
                            </div>
                            <div className="required field">
                                <label for="fnoodmobiel">Hoe kunnen we deze persoon bereiken (telefoonnummer)?</label>
                                <input type="tel" id="fnoodmobiel" name="fnoodmobiel" pattern="[0-9]{10}" placeholder="0612345678" required  title="10 cijferig telefoonnummer"/>
                            </div>
                            <h4 class="ui dividing header">Adresgegevens</h4>
                            <p>Deze gegevens zijn niet verplicht</p>
                            <div className="fields">
                                <div className="eleven wide field">
                                    <label for="fstraat">Straat</label>
                                    <input type="text" id="fstraat" name="fstraat" placeholder="Amsterdamsestraatweg"/>
                                </div>
                                <div className="five wide field">
                                    <label for="fhuisnummer">Huisnummer</label>
                                    <input type="text" id="fhuisnummer" name="fhuisnummer" placeholder="1"/>
                                </div>
                            </div>
                            <div className="fields">
                                <div className="five wide field">
                                    <label for="fpostcode">Straat</label>
                                    <input type="text" id="fpostcode" name="fpostcode" placeholder="1234AB" pattern="/[1-9][0-9]{4} ?[A-Z]{2}$/" title="postcode van 4 cijfers en twee letters"/>
                                </div>
                                <div className="eleven wide field">
                                    <label for="fplaats">Plaats</label>
                                    <input type="text" id="fplaats" name="fplaats" placeholder="Utrecht"/>
                                </div>
                            </div>
                            <p class="ui dividing header"/>
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

