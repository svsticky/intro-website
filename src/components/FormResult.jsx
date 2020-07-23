import React, { Component } from "react";
import $ from "jquery";
import '../assets/inschrijven.css';
import data from "./data";

class FormResult extends Component {
  render() {
      return(
        <main>

            <div className="ui main container">

                <div className="ui fluid card seg">
                    <div className="ui content">
                        <p className="ui center aligned huge header" id={"resultHeader"}></p>
                        <p id={"resultMessage"}> </p>

                    </div>
                </div>
                <div className="ui yellow inverted segment" href="fixed" ref="fixed">
                    <a href="/" id={"yellowLink"}><p className="ui center aligned huge header" id={"yellowLinkText"}></p></a>
                </div>
            </div>

        </main>
      )
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.setSize);
    this.setSize();
    this.setMessage();
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

  setMessage = () => {
    let parameters = (new URL(window.location)).searchParams;
    let resultTitle = "Page was not loaded correctly";
    let resultDescription = "Page was not loaded correctly";
    let resultCode = parseInt(parameters.get('code'));


    if(resultCode === 0){
        resultTitle = "Je bent ingeschreven!";
        resultDescription = "Gefeliciteerd, je bent ingeschreven voor de introductie! <br />" +
            "Je gaat een geweldige tijd tegemoet. Geniet van je zomer en tot snel! ";
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/";
        document.getElementById("yellowLinkText").innerText = "HOME"
    }
    else if(resultCode === 1){
        resultTitle = "Er is iets mis gegaan :(";
        resultDescription = "Er is bij het verwerken van je inschrijving iets mis gedaan. Probeer het alsjeblieft opnieuw. <br />" +
            "Als het de volgende keer weer mis gaat, probeer het dan over een paar uur nog een keer.";
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/";
        document.getElementById("yellowLinkText").innerText = "OPNIEUW PROBEREN"
    }
    else if(resultCode === 3){
        resultTitle = "Oeps, je hebt iets gedaan wat niet mag...";
        resultDescription = "Ai, er zit een fout in je formulier. Volgens onze server klopt het volgende niet aan je formulier: <br />" +
            " ".concat(parameters.get('message'));
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/";
        document.getElementById("yellowLinkText").innerText = "OPNIEUW PROBEREN"
    }
    else {
        resultTitle = "Volgens mij kennen we je al";
        resultDescription = "Jouw studentennummer komt al in onze database voor, weet je zeker dat je je niet al een keer opgegeven hebt voor deze intro?<br />" +
            "Mocht je zeker weten dat jij je nog niet ingeschreven hebt, neem dan concat op met de commissie, zij kunnen je inschrijven en uitzoeken wat er mis is gegaan.";
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/#Contact";
        document.getElementById("yellowLinkText").innerText = "NAAR CONTACTGEGEVENS"
    }
      document.getElementById("resultHeader").innerHTML = resultTitle;
      document.getElementById("resultMessage").innerHTML = resultDescription;




  }

}
export default FormResult;

