import React from 'react';

const Association = ({ association }) => (
    <div className="ui inverted segment">
        <h2 className="ui inverted left aligned large header">{association.name}</h2>
        <a href={association.link}><img className="ui right floated medium spaced image association" src={require('../assets/logos/' + association.photo)} alt={association.name}/></a>
        <p>{association.text}</p>
    </div>

);
export default Association;
