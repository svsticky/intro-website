import React from 'react';

const ContactPerson = ({ contactPerson }) => (
    <div className="ui centered card">
        <div className="ui card content">
            <p><b>{contactPerson.name}</b></p>
            <p><i>{contactPerson.type}</i></p>
            <p><a href={`mailto:${contactPerson.email}`}>{contactPerson.email}</a></p>
            <p>{contactPerson.mobile}</p>
        </div>
    </div>
);

export default ContactPerson;
