import React from 'react';

const Text = ({ text }) => (
    <div className="ui row">
        <p className="ui large header">{text.name}</p>
        <p>{text.text}</p>
    </div>
);
export default Text;