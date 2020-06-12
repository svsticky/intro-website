import React from 'react';

const Text = ({ text }) => (
    <div className="ui row">
        <div className="ui collumn">
            <h2 className="ui left aligned large header">{text.name}</h2>
            <p>{text.text}</p>
        </div>
    </div>
);
export default Text;
