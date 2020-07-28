import React from 'react';

const Text = ({ text }) => (
    <div>
        <br/>
        <h2 className="ui left aligned large header anchor"
            id={ text.anchor }>{text.name}</h2>
        <p>{text.text}</p>
    </div>
);
export default Text;
