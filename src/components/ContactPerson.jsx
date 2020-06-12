import React from 'react';

const ContactPerson = ({ contactPerson }) => (
<div className="ui four wide column">
    <div className="ui centered card">
        <div className="ui card content">
            <p>{contactPerson.name}</p>
            <p>{contactPerson.email}</p>
            <p>{contactPerson.mobile}</p>
            <p>{contactPerson.type}</p>
        </div>
    </div>
</div>
);

export default ContactPerson;