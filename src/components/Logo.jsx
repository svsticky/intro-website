import React from 'react';

const Logo = () => (
    <div className="ui centered grid">
        <img
            className="ui medium image"
            src={require('../assets/logo.svg')}
            alt="logo"
        />
    </div>
);

export default Logo;
