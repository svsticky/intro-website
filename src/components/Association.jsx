import React from 'react';

const Association = ({ association }) => (
    <div className="ui row">
        <div className="ui fluid horizontal colored card">
            <div className="ui card content">
                <div className="ui grid">
                    <div className="ten wide column">
                        <h2 className="ui left aligned large header">{association.name}</h2>
                        <p>{association.text}</p>
                    </div>
                    <div className="six wide column">
                        <a href={association.link}><img className="ui right floated small image" src={require('../assets/logos/' + association.photo)}/></a>
                    </div>
                </div>
            </div>
            <div className="extra meta">
                <a href={association.link}><p>{association.link}</p></a>
            </div>
        </div>
    </div>
);
export default Association;
