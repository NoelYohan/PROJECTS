import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/auth/register', formData);
    alert('Registered successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Username' onChange={(e) => setFormData({...formData, username: e.target.value})} />
      <input type='email' placeholder='Email' onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type='password' placeholder='Password' onChange={(e) => setFormData({...formData, password: e.target.value})} />
      <button type='submit'>Register</button>
    </form>
  );
}

export default Register;