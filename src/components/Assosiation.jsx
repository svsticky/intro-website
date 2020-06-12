import React from 'react';

const Assosiation = ({ assosiation }) => (
    <div className="ui row">
        <div className="ui fluid horizontal card">
            <div className="ui card content">
                <h2 className="ui left aligned large header">{assosiation.name}</h2>
                <p>{assosiation.text}</p>
            </div>
            <div className="content">
                <img className="ui right floated small image" src={require('../assets/' + assosiation.photo)}/>
            </div>
        </div>
    </div>
);
export default Assosiation;