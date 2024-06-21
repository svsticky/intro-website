import React from 'react';

const ConfidentialContactPerson = ({ confidentialContactPerson }) => (
  <div className="ui segment confidentialContactPerson">
    <h2 className="ui left aligned large header">{confidentialContactPerson.name}</h2>
    <p className="ui left">
      Telefoon: <a href={"tel:" + confidentialContactPerson.tel}
                   className="ui left aligned">{confidentialContactPerson.tel}</a>
    </p>
    <img className="ui right floated medium spaced image confidentialContactPersonImage"
         src={'/confidentialContactPersons/' + confidentialContactPerson.image} alt={confidentialContactPerson.name} width="300"/>
    <p className="formatted-text">{confidentialContactPerson.text}</p>
  </div>
)

export default ConfidentialContactPerson;