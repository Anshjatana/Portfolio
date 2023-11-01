import React, { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
  };
  const handlebuttonclick = () => {
    alert("Form submitted successfully");
  };
  return (
    <div id="contact">
      <h3
        className="text-white text-[30px] font-semibold uppercase text-center my-10"
        id="heading"
      >
        Get in touch
      </h3>
      <div
        className="flex items-center justify-evenly mx-[290px] "
        id="contacts"
      >
        <p className="text-[22px] font-medium font-[sans-serif]   underline items-center justify-center mt-2 text-white flex">
          <Mail size={30} color="paleturquoise" id="icon" />
          anshjatana1111@gmail.com
        </p>
        <p className="text-[24px] font-medium font-[sans-serif]  items-center justify-center mt-4 text-white flex">
          <PhoneCall color="paleturquoise" size={30} id="icon" />
          +918168318198
        </p>
      </div>

      <form 
        name="contact" method="POST" data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-4 my-10 flex flex-col items-center "
      >
        <div>
          <label
            htmlFor="name"
            className="block text-[20px] text-white font-medium"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your Fullname"
            onChange={handleChange}
            className="border rounded-md p-2 w-[450px]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-white text-[20px] font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your Email"
            onChange={handleChange}
            className="border rounded-md p-2 w-[450px]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-[20px] text-white font-medium"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            placeholder="Enter Subject here"
            onChange={handleChange}
            className="border rounded-md p-2 w-[450px]"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-white text-[20px] font-medium"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message here"
            className="border rounded-md p-2 w-[450px] h-32"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mb-10 hover:bg-blue-600"
            onClick={handlebuttonclick}
          >
            Lets Talk!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
