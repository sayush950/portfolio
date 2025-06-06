'use client'
import React, { useState } from 'react';
import { FaUser, FaLinkedin, FaGithub, FaMailBulk } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'sayush950@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSent(true);
      setLoading(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Wait 2 seconds before refresh
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
      setLoading(false);
    }
  };


  return (
    <div id="contact" className="min-h-[80vh] flex flex-col justify-between">
      <div className="flex justify-center items-center py-12">
        <form onSubmit={handleSubmit} className="p-10 rounded-xl w-full max-w-4xl bg-white dark:bg-[#2f2f2f] text-black dark:text-white shadow-lg border border-gray-500 dark:border-zinc-700">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
            <FaUser className="mr-2" /> Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" required className="bg-transparent border-b border-gray-400 py-2 px-4 focus:outline-none" />
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required className="bg-transparent border-b border-gray-400 py-2 px-4 focus:outline-none" />
          </div>
          <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject (optional)" className="w-full bg-transparent border-b border-gray-400 py-2 px-4 mt-6 focus:outline-none" />
          <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Message..." required className="w-full bg-transparent border-b border-gray-400 py-2 px-4 mt-6 focus:outline-none" />

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white text-xl font-bold px-6 py-2 rounded-full mt-6">
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>

          {sent && <p className="text-green-400 mt-4 text-center text-2xl font-bold">Message sent successfully!</p>}
          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        </form>
      </div>
      <div className="flex justify-between items-center px-10 pb-0">
        <div>
          <p className="bg-pink-600 text-white ml-20 px-4 py-1 inline-block mb-2 font-bold">AYUSH SINGH</p> <br />
          <p className="bg-pink-600 text-white ml-20 px-4 py-1 inline-block font-bold">A FULL-STACK DEVELOPER</p>
        </div>
        <div className="text-center">
          <p className="font-semibold text-[15px] underline-offset-2 mb-2 mr-20">You can find me here ✌️</p>
          <div className="flex gap-4 justify-center mr-20">
            <a href="https://www.linkedin.com/in/ayush-singh-a70a07156/" target="_blank" rel="noreferrer" className=" text-xl rounded-full p-2 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 shadow-md border border-gray-300 dark:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition"><FaLinkedin /></a>
            <a href="https://github.com/sayush950" target="_blank" rel="noreferrer" className="text-pink-500 text-xl shadow-md border border-gray-300 dark:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition rounded-full p-2"><FaGithub /></a>
            <a href="mailto:sayush950@gmail.com" className="text-xl rounded-full p-2 dark:bg-zinc-900 text-gray-800 dark:text-gray-200 shadow-md border border-gray-300 dark:border-zinc-700 hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition"><FaMailBulk /></a>
          </div>
        </div>
      </div>
      <hr
  style={{
    width: '90%',
    margin: '2rem auto',
    border: 'none',
    borderTop: '2px solid #ccc',
  }}
/>

      
    </div>
  );
}
