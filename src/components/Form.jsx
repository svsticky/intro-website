import React, { Component } from "react";
import Menu from "./Menu";
import data from './data.json';
import '../assets/home.css';

class Form extends Component {
  render() {
      return(
        <main>
            {getMenu(data.sections)}
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
                            <label for="fgeslacht">Geslacht</label>
                            <select id="fgeslacht" name="fgeslacht">
                                <option value=""/>
                                <option value="man">Man</option>
                                <option value="vrouw">Vrouw</option>
                                <option value="anders">Anders of onbekend</option>
                            </select>
                            </div>
                            <div className="field">
                            <label for="fgeboortedatum">Geboortedatum</label>
                            <input type="date" id="fgeboortedatum" name="fgeboortedatum" min="1920-01-01" max="2016-01-01"/>
                            </div>
                            <div className="field">
                            <label for="fstudentnummer">Studentnummer</label>
                            <input type="number" id="fstudentnummer" name="fstudentnummer" min="1000000" max="9999999"/>
                            </div>
                            <div className="field">
                            <label for="fstraat">Straat</label>
                            <input type="text" id="fstraat" name="fstraat"/>
                            </div>
                            <div className="field">
                                <label for="fhuisnummer">Huisnummer</label>
                                <input type="number" id="fhuisnummer" name="fhuisnummer"/>
                            </div>
                            <div className="field">
                                <label for="fhuisnummertoevoegsel">Toevoegsel</label>
                                <input type="text" id="fhuisnummertoevoegsel" name="fhuisnummertoevoegsel"/>
                            </div>
                            <div className="field">
                                <label for="fpostcode">Postcode</label>
                                <input type="text" id="fpostcode" name="fpostcode"/>
                            </div>
                            <div className="field">
                                <label for="fplaats">Plaats</label>
                                <input type="text" id="fplaats" name="fplaats"/>
                            </div>
                            <div className="field">
                                <label for ="fland">Land</label>
                                <input type="text" id="fland" name="fland"/>
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
export default Form;