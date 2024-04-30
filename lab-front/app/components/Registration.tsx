"use client"
import React, { useState } from 'react';
import axios from 'axios';
import './registration.css'; // Import CSS file

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.Password !== formData.confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/registration', formData);
      console.log('Registration successful:', response.data);
      window.location.href = 'http://http://localhost:3000/login'; 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} required className="input-field" />
        <input type="email" name="Email" placeholder="Email" value={formData.Email} onChange={handleChange} required className="input-field" />
        <input type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handleChange} required className="input-field" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required className="input-field" />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
