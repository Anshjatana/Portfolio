import React, { useState } from 'react';
import { Mail,PhoneCall } from 'lucide-react';

const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
      };
    const [formData, setFormData] = useState(initialFormData);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can access the form data in the `formData` state and perform actions, such as sending it to a server.
        console.log(formData);
        setFormData(initialFormData)
      };

  return (
    <div>
      <h3 className="text-white text-[30px] font-semibold uppercase text-center my-10">Contact me</h3>
      <p className="text-[18px] font-semibold  underline items-center justify-center mt-2 text-white flex"><Mail />{" "} anshjatana1111@gmail.com</p>
      <p className="text-[19
      
      px] font-semibold font-[sans-serif]  items-center justify-center mt-4 text-white flex"><PhoneCall />+918168318198</p>
      <form onSubmit={handleSubmit} className="space-y-4 my-10 flex flex-col items-center ">
        <div>
          <label htmlFor="name" className="block text-gray-200">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your Fullname"
            onChange={handleChange}
            className="border rounded-md p-2 w-[400px]"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-200">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your Email"
            onChange={handleChange}
            className="border rounded-md p-2 w-[400px]"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-200">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message here"
            className="border rounded-md p-2 w-[400px] h-32"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Lets Talk!
          </button>
        </div>
      </form>
      
     
    </div>
  )
}

export default Contact
