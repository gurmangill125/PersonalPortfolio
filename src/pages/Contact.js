import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tdihdud', 'template_ikubtyl', form.current, 'e43Zo5MqNL6NA4Ou-')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
    e.target.reset(); // Reset form after sending
  };

  return (
    <div className="container mx-auto px-4 pt-16">
      <div className="bg-gradient-to-r from-violet-500 to-violet-400 rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-4">Contact Me</h2>
        <p className="block mb-2 text-white">Please contact me directly at gurmangill125@gmail.com or through this form.</p>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-white">Name</label>
            <input type="text" name="user_name" required className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-300"/>
          </div>
          <div>
            <label className="block mb-2 text-white">Email</label>
            <input type="email" name="user_email" required className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-300"/>
          </div>
          <div>
            <label className="block mb-2 text-white">Message</label>
            <textarea name="message" required className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-300" rows="4"></textarea>
          </div>
          <button type="submit" className="inline-block w-full bg-white dark:bg-gray-800 text-violet-500 dark:text-white font-bold rounded-md px-6 py-2 text-xl hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2">
            Send
            </button></form>
      </div>
    </div>
  );
}

export default Contact;