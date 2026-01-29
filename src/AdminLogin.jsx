import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic validation (replace with real auth logic later)
    if (username === 'admin' && password === 'password') { // Example credentials
      alert('Login successful!'); // Replace with actual navigation or state update
      // navigate('/admin-dashboard'); // Uncomment to go to a dashboard after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header */}
      <div className="w-full max-w-md mb-8">
        <div
          style={{
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h1 className="text-white font-black text-2xl drop-shadow-md">ADMIN LOGIN</h1>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-full hover:from-gray-600 hover:to-gray-800 transition duration-300 shadow-2xl border-2 border-white/30"
          title="Back"
        >
          ←
        </button>
        <button
          onClick={() => navigate('/')}
          className="flex items-center justify-center w-16 h-16 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 shadow-2xl border-2 border-white/30"
          title="Home"
        >
          🏠
        </button>
      </div>

      {/* Login Form */}
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-2xl">
        <div className="mb-4">
          <label className="block text-white font-bold mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white font-bold mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-2 px-4 rounded-md hover:from-purple-600 hover:to-purple-800 transition duration-300"
        >
          LOG IN
        </button>
      </form>

      {/* Back Button */}
      <button
        onClick={() => navigate('/more')}
        className="mt-6 text-white underline hover:text-gray-300"
      >
        Back to More
      </button>
    </div>
  );
};

export default AdminLogin;