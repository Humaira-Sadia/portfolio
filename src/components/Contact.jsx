import React, { useState } from "react";

const Contact = () => {
  // Define state variables to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="contact h-screen flex items-end">
      <div className="body w-full flex h-[92%]">
        <div className="w-2/3 flex justify-end items-center p-5">
          {/* <img src="/portfolio/assets/contact.gif" alt="connect" /> */}
          <div className="outline w-[90%] flex items-center justify-center -mt-20 h-1/2">Links</div>
        </div>
        <div className="right flex flex-col justify-center w-full p-10">
          <h1 className="font-bold text-5xl p-5">Connect With Me</h1>
          <form
            className="outline p-10 flex flex-col justify-center "
            onSubmit={handleSubmit}
          >
            <div className="sm:flex">
              <div className="input-box">
                <input
                  type="text"
                  id="fname"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <span>First name</span>
              </div>
              <div className="input-box">
                <input
                  type="text"
                  id="lname"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <span>Last name</span>
              </div>
            </div>
            <div className="sm:flex">
              <div className="input-box">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <span>Email</span>
              </div>
              <div className="input-box">
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="off"
                />
                <span>Phone No.</span>
              </div>
            </div>
            <div className="input-box w-[725px]">
              <textarea
                className="resize-none h-40"
                type="text"
                id="msg"
                name="msg"
                value={formData.msg}
                onChange={handleInputChange}
                required
                autoComplete="off"
              />
              <span>Message</span>
            </div>

            <div className="flex justify-end p-3 mr-10">
              <div className="w-auto bg-[#1d2b3a] rounded-lg">
                <button className="bg-[#3A3838] gradient__text font-bold text-2xl p-2 ">
                  Submit
                </button>
              </div>
            </div>

            {/* <button
              className="bg-[#3A3838] p-2 text-[#ae7ae2] font-bold rounded btn w-1/5"
              type="submit"
            >
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
