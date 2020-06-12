import React from 'react';

const Assosiation = ({ assosiation }) => (
    <div className="ui row">
        <div className="ui fluid horizontal colored card">
            <div className="ui card content">
                <h2 className="ui left aligned large header">{assosiation.name}</h2>
                <p>{assosiation.text}</p>
            </div>
            <image className="content">
                <a href={assosiation.link}><img className="ui right floated small image" src={require('../assets/' + assosiation.photo)}/></a>
            </image>
            <div className="extra meta">
                <a href={assosiation.link}><p>{assosiation.link}</p></a>
            </div>
        </div>
    </div>
);
export default Assosiation;