import React from 'react';

const Text = ({ text }) => (
    <div>
        <a className="anchor" name={text.name} />
        <h2 className="ui left aligned large header">{text.name}</h2>
        <p>{text.text}</p>
    </div>
);
export default Text;
