"use client"
import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /> <br />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
