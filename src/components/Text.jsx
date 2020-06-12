import React from 'react';

const Text = ({ text }) => (
    <div className="ui row">
        <div>
            <p className="ui large header">{text.name}</p>
        </div>
        <div>
            <p>{text.text}</p>
        </div>

    </div>
);
export default Text;