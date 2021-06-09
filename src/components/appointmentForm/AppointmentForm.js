import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const changeTitle = ({ target }) => {
    setTitle(target.value);
  };
  const changeDate = ({ target }) => {
    setDate(target.value);
  } 
  const changeTime = ({ target }) => {
    setTime(target.value);
  }

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>Title</label>
      <input id='title' type='text' value={title} onChange={changeTitle} required></input>
      <label for='date'>Date</label>
      <input id='date' type='date' value={date}  onChange={changeDate} min={getTodayString()} required></input>
      <label for='time'>Time</label>
      <input id='time' type='time' value={time} onChange={changeTime} required></input>
      <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
      <button>Submit</button>
    </form>
  );
};
