import React from 'react';

const Social = ({ social }) => (
    <div className="ui">
        <a href={social.linkTo}>
            <img width="64" height="64" src={social.icon} alt={social.name}></img>
        </a>
    </div>

);

export default Social;