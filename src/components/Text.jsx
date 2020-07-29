import React from 'react';

const Text = ({ text }) => (
    <div>
        <br/>
        <p className="anchor" id={ text.anchor }></p>
        <h2 className="ui left aligned large header">{text.name}</h2>
        <p>{text.text}</p>
    </div>
);
export default Text;
