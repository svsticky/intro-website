import React from 'react';

const Assosiation = ({ assosiation }) => (
    <div className="ui row grid">
        <div className="ui row">
            <p className="ui header">{assosiation.name}</p>
        </div>
        <div className="ui row">
            <p className="ui item">{assosiation.text}</p>
        </div>
    </div>
);
export default Assosiation;