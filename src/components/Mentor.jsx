import React from 'react';

const Mentor = ({ mentor }) => (
    <div className="ui segment mentor">
        <h2 className="ui left aligned large header">{mentor.name}</h2>
        <img className="ui right floated medium spaced image" src={require('../assets/mentoren/' + mentor.photo)} alt={mentor.name}/>
	    <h3>{mentor.real_name}</h3>
        <p className="formatted-text">{mentor.text}</p>
    </div>
);

export default Mentor;
