import React from 'react';

const Association = ({ association }) => (
    <div className="ui segment">
        <h2 className="ui left aligned large header">{association.name}</h2>
        <a href={association.link}>
            <img className="ui right floated medium spaced image association" src='https://public.svsticky.nl/logos/logo_compact_outline_kleur.svg' alt={association.name}/>
        </a>
        <div dangerouslySetInnerHTML={{ __html: association.text}} />
    </div>

);
export default Association;
