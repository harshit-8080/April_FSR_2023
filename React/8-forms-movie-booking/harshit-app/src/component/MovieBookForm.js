import React, { useCallback, useState } from "react";
import emailjs from "emailjs-com";

import "../styles/MovieBookingForm.css";

function MovieBookForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    time: "",
    tickets: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);

    const response = await emailjs.sendForm(
      "service_am4gelj",
      "template_qmm1aai",
      e.target,
      "LvgyCl0TIOVBOglYQ"
    );
    console.log("Email Sent successfully ", response);
    setSubmitted(true);
  }

  return (
    <div className={`movingBookingForm ${submitted ? "submitted" : " "}`}>
      <h2>Movie Booking Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Movie:</label>
        <input
          type="text"
          name="movie"
          value={formData.movie}
          onChange={handleChange}
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <label>Tickets:</label>
        <input
          type="number"
          name="tickets"
          value={formData.tickets}
          onChange={handleChange}
        />

        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default MovieBookForm;
