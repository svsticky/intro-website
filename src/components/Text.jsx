import React from 'react';

const Text = ({ text }) => (
    <div className="ui row grid">
        <div className="ui row">
            <p className="ui large header">{text.name}</p>
        </div>
        <div className="ui row">
            <p>{text.text}</p>
        </div>
    </div>
);
export default Text;