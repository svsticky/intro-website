import React from 'react';

const Text = ({ text }) => (
    <div className="ui row">
<<<<<<< HEAD
        <div>
            <p className="ui large header">{text.name}</p>
        </div>
        <div>
            <p>{text.text}</p>
        </div>

=======
        <div className="ui collumn">
            <h2 className="ui left aligned large header">{text.name}</h2>
            <p>{text.text}</p>
        </div>
>>>>>>> 6d7249bb31e62179f14617ab28bd04a4ce18fda5
    </div>
);
export default Text;
