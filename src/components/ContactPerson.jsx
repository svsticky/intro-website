import React from 'react';

const ContactPerson = ({ contactPerson }) => (
    <div className="card">
        <div className="content">
            <p>{contactPerson.name}</p>
            <p>{contactPerson.email}</p>
            <p>{contactPerson.mobile}</p>
            <p>{contactPerson.type}</p>
        </div>
    </div>
);

export default ContactPerson;
