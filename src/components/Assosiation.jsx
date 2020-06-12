import React from 'react';

const Assosiation = ({ assosiation }) => (
    <div className="ui row">
        <div className="ui large header">
            <p>{assosiation.name}</p>
        </div>
        <div>
            <p>{assosiation.text}</p>
        </div>
    </div>
);
export default Assosiation;