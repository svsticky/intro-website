import React from 'react';

const Text = ({ text }) => (
    <div>
        <br/>
        <p className="anchor" id={text.anchor}></p>

        {
            text.name != null &&
            <h2 className="ui left aligned large header">{ text.name }</h2>
        }

        <p className="formatted-text">
            <span style={ (text.bold?? false) ? { fontWeight: 'bold' } : { fontWeight: 'normal'} }>
                {text.text}
            </span>
        </p>
    </div>
);
export default Text;
