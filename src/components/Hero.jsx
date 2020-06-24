import React from 'react';

const Hero = () => (
    <div className="ui menu image">
        <img
            className="fluid image"
            src={require('../assets/hero/hero-xl.jpg')}
            alt=""
        ></img>
        <div className="ui centered grid float-top">
            <img
                className="medium image"
                src={require('../assets/logo.svg')}
                alt="logo"
            />
            <a className="ui button" href="#Kamp">
                Meer informatie
            </a>
        </div>
    </div>
);

export default Hero;
