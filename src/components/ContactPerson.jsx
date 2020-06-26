import React from 'react';

const ContactPerson = ({ contactPerson }) => (
<div className="ui four wide column">
    <div className="ui centered card">
        <div className="ui card content">
            <p><b>{contactPerson.name}</b></p>
            <p><i>{contactPerson.type}</i></p>
            <p>{contactPerson.email}</p>
            <p>{contactPerson.mobile}</p>
        </div>
    </div>
</div>
);

export default ContactPerson;
