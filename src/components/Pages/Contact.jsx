import React, { useState } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const initiaFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initiaFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const formSpreeEndpoint = "https://formspree.io/f/xoqgayoj";
    try {
      const response = await fetch(formSpreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Thank you for contacting us!",
          showConfirmButton: false,
          timer: 1500,
        });
        setFormData(initiaFormData);
        console.log("Form submitted successfully");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error submitting form",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.error("Form submission failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error submitting form",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form
        action="https://formspree.io/f/xoqgayoj"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
