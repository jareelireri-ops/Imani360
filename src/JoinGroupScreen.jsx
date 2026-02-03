import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinGroupScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', number: '', groups: [] });
  const [errors, setErrors] = useState({});

  // Church groups
  const groups = [
    'Praise and Worship',
    'Men',
    'Women',
    'Media Team',
    'Junior Youth',
    'Senior Youth',
    'Sunday School',
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // Handle group checkbox
  const handleGroupChange = (group) => {
    setFormData({
      ...formData,
      groups: formData.groups.includes(group)
        ? formData.groups.filter((g) => g !== group)
        : [...formData.groups, group],
    });
  };

  // Submit with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.number.trim()) newErrors.number = 'Number is required.';
    if (formData.groups.length === 0) newErrors.groups = 'Select at least one group.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Submitted to Admin:', formData);
      alert(`Thank you ${formData.name}. We look forward to your active participation. Be blessed.`);
      setFormData({ name: '', number: '', groups: [] });
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      {/* Header Container */}
      <div className="w-full max-w-2xl mb-8">
        <div
          className="w-full relative overflow-hidden"
          style={{
            boxSizing: 'border-box',
            height: '80px',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div
            style={{
              fontFamily: "'Crimson Text', serif",
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '1.3',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
              zIndex: 1,
              position: 'relative',
            }}
          >
            CHRISTIAN CHURCH INTERNATIONAL LIGHT SANCTUARY
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#06b6d4',
            color: 'white',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#06b6d4'}
          title="Back"
        >
          ←
        </button>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
          title="Home"
        >
          🏠
        </button>
      </div>

      {/* Metallic Cross */}
      <div className="mb-12 relative">
        <div
          style={{
            fontSize: 'clamp(36px, 8vw, 54px)',
            color: '#ffffff',
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.8),
              0 0 40px rgba(255, 215, 0, 0.6),
              0 0 60px rgba(255, 215, 0, 0.4),
              0 0 80px rgba(255, 215, 0, 0.2)
            `,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
            lineHeight: '1',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          ✝
        </div>
        <style>{`
          @keyframes glow {
            from { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1); }
            to { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1); }
          }
        `}</style>
      </div>

      {/* Join Group Form */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Join a Group</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-white font-semibold mb-2">Number</label>
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Enter your number"
              />
              {errors.number && <p className="text-red-400 text-sm mt-1">{errors.number}</p>}
            </div>
          </div>

          {/* Groups */}
          <div>
            <label className="block text-white font-semibold mb-4">Select Groups (Choose as many as apply)</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {groups.map((group) => (
                <label key={group} className="flex items-center space-x-3 cursor-pointer hover:bg-white/10 p-2 rounded transition">
                  <input
                    type="checkbox"
                    checked={formData.groups.includes(group)}
                    onChange={() => handleGroupChange(group)}
                    className="w-5 h-5 text-cyan-400 bg-white/20 border-white/30 rounded focus:ring-cyan-400"
                  />
                  <span className="text-white">{group}</span>
                </label>
              ))}
            </div>
            {errors.groups && <p className="text-red-400 text-sm mt-2">{errors.groups}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-cyan-800 transition shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroupScreen;