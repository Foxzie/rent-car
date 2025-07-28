import React, { Suspense, lazy, useState } from "react";
import "aos/dist/aos.css"; // Ensure you import AOS CSS
import AOS from "aos"; // Import AOS
import emailjs from "emailjs-com"; // Import EmailJS

// Initialize AOS
AOS.init();

const Contact = () => {
  const Footer = lazy(() => import("../components/footer"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Send email using EmailJS
      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
        .then((response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          alert("Form submitted successfully!");
          // Reset form
          setFormData({ name: "", email: "", message: "" });
          setErrors({});
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          alert("Failed to send the email. Please try again later.");
        });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-700 py-10 px-4 sm:px-6 lg:px-8">
        <br />
        <div className="container mx-auto max-w-7xl mt-20">
          <h1
            className="text-4xl font-bold text-amber-400 mb-10 text-center"
            data-aos="fade-down"
          >
            Contact Us
          </h1>
          <p
            className="text-lg text-gray-300 text-center mb-10"
            data-aos="fade-up"
          >
            If you have any questions, feel free to reach out!
          </p>
        </div>
        <div
          className="container mx-auto max-w-2xl mt-10 p-8 bg-white rounded-3xl shadow-2xl text-zinc-800"
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="block font-medium text-gray-900 mb-2 text-2xl"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            <label
              htmlFor="email"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            <label
              htmlFor="message"
              className="block font-medium text-gray-900 mb-2 text-2xl mt-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg bg-gray-100 border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 p-3 transition duration-200 ease-in-out ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              className="mt-6 w-full px-6 py-3 bg-amber-400 text-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-medium cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Contact;
