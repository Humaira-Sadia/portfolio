import React, { useState } from "react";

const Form = () => {
  // Define state variables to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission (e.g., sending data to a server).
    // For now, we'll just log the form data.
    console.log(formData);
  };

  return (
    <div className="contact h-screen md:flex items-end bg-amber-200">
      <div className="body w-full flex h-[92%]">
        <div className="left w-2/3 flex justify-center items-center bg-amber-300">
          <img src="/portfolio/assets/connectGif.gif" alt="connect" />
        </div>
        <div className="right w-full bg-amber-400">
          <h1 className="font-bold text-5xl p-5">Connect With Me</h1>
          <form onSubmit={handleSubmit}>
            <div className="p-5">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-5">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="p-5">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
