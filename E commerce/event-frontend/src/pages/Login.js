import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', formData);
    alert('Token: ' + res.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='email' placeholder='Email' onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input type='password' placeholder='Password' onChange={(e) => setFormData({...formData, password: e.target.value})} />
      <button type='submit'>Login</button>
    </form>
  );
}

export default Login;
