import React, { useState } from "react";
import { Mail } from "lucide-react";

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
    // Form submission will be handled by Formsubmit.co
    alert("Form submitted successfully");
    setFormData(initialFormData);
  };
  
  return (
    <div id="contact" className="z-20" >
      <h3
        className="text-white text-[30px] font-semibold uppercase text-center my-10"
        id="heading"
      >
        Get in touch
      </h3>
      <div
        className="flex items-center gap-4 justify-center mx-auto "
        id="contacts"
      >
        <a href="mailto:anshjatana1111@gmail.com" className="text-[22px] font-medium font-[sans-serif]  items-center justify-center mt-2 text-white flex">
          <Mail size={30} color="paleturquoise" id="icon" className="mr-2" />
          anshjatana1111@gmail.com
        </a>
      </div>

      <form
        name="contact"
        action="https://formsubmit.co/anshjatana1111@gmail.com"
        method="POST"
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
            placeholder="John Doe"
            onChange={handleChange}
            className="bg-slate-900 text-white focus:border-none active:border-none rounded-md p-2 w-[450px]"
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
            placeholder="doe.john11@gmail.com"
            onChange={handleChange}
            className="bg-slate-900 text-white focus:border-none active:border-none rounded-md p-2 w-[450px]"
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
            placeholder="Hey, Are you open for work?"
            onChange={handleChange}
            className="bg-slate-900 text-white focus:border-none active:border-none rounded-md p-2 w-[450px]"
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
            placeholder="Lets connect for a quick call @11AM tomorrow!"
            className="bg-slate-900 text-white focus:border-none active:border-none rounded-md p-2 w-[450px] h-32"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Lets Talk!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
