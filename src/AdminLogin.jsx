import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // <--- ADD THIS IMPORT

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // <--- GET THE LOGIN FUNCTION FROM CONTEXT

  const handleLogin = (e) => {
    e.preventDefault();
    
   // Call the login function from AuthContext with the entered credentials
    const result = login(username, password);

    if (result.success) {
      alert(`Welcome ${result.name}`);
      navigate('/'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-500"
      style={{
       background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
       fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header - Refined */}
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-white font-black text-4xl tracking-tighter drop-shadow-2xl">
          STAFF <span className="text-indigo-300">PORTAL</span>
        </h1>
        <div className="h-1 w-20 bg-indigo-400 mx-auto mt-2 rounded-full opacity-50"></div>
      </div>

      {/* Glassmorphic Form Container */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20">
        
        {/* Navigation - Integrated inside the card for a cleaner look */}
        <div className="flex justify-between mb-8">
          <button onClick={() => navigate(-1)} className="text-white/60 hover:text-white transition-colors">← Back</button>
          <button onClick={() => navigate('/')} className="text-white/60 hover:text-white transition-colors">Home 🏠</button>
        </div>
{/*we use form because it has a built in "Enter" key submission and better accessibility.
 The handleLogin function will be called when the form is submitted, which will call the login function from AuthContext with the entered credentials.*/}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label className="text-xs font-bold text-indigo-200 uppercase tracking-widest ml-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all mt-1"
              placeholder="Enter your admin ID"
              required
            />
          </div>

          <div className="relative">
            <label className="text-xs font-bold text-indigo-200 uppercase tracking-widest ml-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 transition-all mt-1"
              placeholder="••••••••"
              required
            />
          </div>

          <button
  type="submit"
  style={{ backgroundColor: '#22c55e' }} // Emerald green for a positive action
  //we cannot use tailwind classes for the button because we aim to use the "bg-green-500" color and it is not available in Tailwind by default,
  //so we use inline styles for that specific color.
  className="w-full text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
>
  AUTHORIZE ACCESS
</button>
        </form>
      </div>

      {/* Subtle Footer */}
      <button
        className="mt-8 text-white/40 text-sm hover:text-white transition-colors"
      >
        Secure System v2.0
      </button>
    </div>
  );
};

export default AdminLogin;