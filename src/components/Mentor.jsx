import React from 'react';

const Mentor = ({ mentor }) => (
    <div className="ui segment">
        <h2 className="ui left aligned large header">{mentor.name}</h2>
        <img className="ui right floated medium spaced image mentor" src={require('../assets/logos/' + mentor.photo)} alt={mentor.name}/>
	<h3>{mentor.study}</h3>
        <p>{mentor.text}</p>
	<footer>{mentor.contactInfo}</footer>
    </div>

);
export default Mentor;
