import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  const changeContact = ({ target }) => {
    setContact(target.value);
  };
  return (
    <div>
      <label for="contact-list">Contact</label>
      <select name="contact" id="contact-list" onChange={changeContact}>
        <option value="" key='-1' selected="selected">--Please choose an option--</option>
        {contacts.map( (contact, contactIdx) => {
          return <option key={contactIdx} value={contact.name}>{contact.name}</option>
        })}
      </select>
    </div>
  );
};
