import React from 'react';

const ContactPerson = ({ contactPerson }) => (
<div class="ui four wide column">
    <div class="ui card">
        <div class="ui card content">
            <p>{contactPerson.name}</p>
            <p>{contactPerson.email}</p>
            <p>{contactPerson.mobile}</p>
            <p>{contactPerson.type}</p>
        </div>
    </div>
</div>
);

export default ContactPerson;