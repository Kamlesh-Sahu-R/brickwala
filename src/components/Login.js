import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:8080/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('userRole', res.data.user.role);
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;