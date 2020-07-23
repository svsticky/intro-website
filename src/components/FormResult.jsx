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
    let resultTitle = parameters.get('formResult');
    let resultDescription = parameters.get('message');
    let resultCode = parseInt(parameters.get('code'));

    document.getElementById("resultHeader").innerText = resultTitle;
    document.getElementById("resultMessage").innerText = resultDescription;

    if(resultCode === 0){
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/";
        document.getElementById("yellowLinkText").innerText = "HOME"
    }
    else if(resultCode === 1){
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/";
        document.getElementById("yellowLinkText").innerText = "OPNIEUW PROBEREN"
    }
    else {
        let linkElement = document.getElementById("yellowLink");
        linkElement.href = "/#Contact";
        document.getElementById("yellowLinkText").innerText = "NAAR CONTACTGEGEVENS"
    }


  }

}
export default FormResult;

