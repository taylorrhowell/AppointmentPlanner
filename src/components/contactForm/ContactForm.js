import React from "react";

const phoneRegex = '[1-9]{2}[0-9]{2}[1-9][0-9]{2}[0-9]{4}'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const nameChange = ({target}) => {
    setName(target.value);
  };
  const phoneChange = ({target}) => {
    setPhone(target.value);
  };
  const emailChange = ({target}) => {
    setEmail(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='name'>Name</label>
      <input id='name' type='text' value={name} onChange={nameChange} required></input>
      <label for='phone'>Phone (format: XXXXXXXXXX)</label>
      <input id='phone' type='tel' value={phone} pattern={phoneRegex} onChange={phoneChange} required></input>
      <label for='email'>Email</label>
      <input id='email' type='email' value={email} onChange={emailChange} required></input>
      <button>Submit</button>
    </form>
  );
};
