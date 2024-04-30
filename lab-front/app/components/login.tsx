"use client"
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import CSS file

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const response = await axios.get(`http://localhost:5000/registration/login/${formData.email}`);
      const user = response.data;

      if (user && user.Password === formData.password) {
        console.log('Login successful');
        
        sessionStorage.setItem('userEmail', formData.email);
        console.log(sessionStorage)

        window.location.href = '/Profile';
      } else {
        console.error('Invalid email or password');
       
      }
    } catch (error) {
      console.error('Login failed:', error);
      
    }
  };

  return (
    <div className="container"> {/* Center the form horizontally and vertically */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input-field appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="input-field appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
