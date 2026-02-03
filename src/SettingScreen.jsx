import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsScreen = () => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => JSON.parse(localStorage.getItem('notificationsEnabled')) || true);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'English');
  const [fontSize, setFontSize] = useState(() => localStorage.getItem('fontSize') || 'Medium');
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(null);
  const fontSizeMultiplier = fontSize === 'Small' ? 0.8 : fontSize === 'Large' ? 1.2 : 1;

  const updateSetting = (key, value) => {
    localStorage.setItem(key, typeof value === 'boolean' ? JSON.stringify(value) : value);
    console.log(`${key} updated to:`, value);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
    updateSetting('language', value);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
    updateSetting('fontSize', value);
  };

  const handleNotificationsChange = (enabled) => {
    setNotificationsEnabled(enabled);
    updateSetting('notificationsEnabled', enabled);
  };

  const buttonStyle = (bg) => ({
    backgroundColor: bg,
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
  });

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    maxWidth: '400px',
    width: '100%',
    color: '#333',
    textAlign: 'center'
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: `${16 * fontSizeMultiplier}px`,
      }}
    >
      <div className="w-full max-w-2xl mb-8">
        <div
          className="w-full relative overflow-hidden"
          style={{
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
          <div
            style={{
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            SETTINGS
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          style={buttonStyle('#06b6d4')}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0891b2'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#06b6d4'}
          title="Back"
        >
          ←
        </button>
        <button
          onClick={() => navigate('/')}
          style={buttonStyle('black')}
          onMouseOver={(e) => e.target.style.backgroundColor = '#333'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'black'}
          title="Home"
        >
          🏠
        </button>
      </div>

      <div className="mb-12 relative">
        <div
          style={{
            fontSize: 'clamp(36px, 8vw, 54px)',
            color: '#ffffff',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)',
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
            lineHeight: '1',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          ✝
        </div>
        <style>{`@keyframes glow { from { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1); } to { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1); } }`}</style>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center mb-16 px-4">
        <div className="grid grid-cols-1 gap-8 w-full max-w-md">
          <button onClick={() => setShowModal('notifications')} className="flex items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black">🔔 Notifications</button>
          <button onClick={() => setShowModal('language')} className="flex items-center justify-center p-8 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg hover:from-green-600 hover:to-green-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black">🌍 Font Size & Language</button>
          <button onClick={() => setShowModal('rate')} className="flex items-center justify-center p-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black">⭐ Rate Us / Invite Member</button>
          <button onClick={() => setShowModal('help')} className="flex items-center justify-center p-8 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black">❓ Help & Support</button>
        </div>
      </div>

      {showModal && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            {showModal === 'notifications' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Notifications</h3>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <input type="checkbox" checked={notificationsEnabled} onChange={(e) => handleNotificationsChange(e.target.checked)} style={{ marginRight: '10px' }} />
                  Enable Notifications
                </label>
                <button onClick={() => setShowModal(null)} style={{ backgroundColor: '#3b82f6', color: 'white', padding: '10px', borderRadius: '8px', width: '100%', border: 'none', cursor: 'pointer' }}>Close</button>
              </div>
            )}
            {showModal === 'language' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Font Size & Language</h3>
                <label style={{ display: 'block', marginBottom: '10px' }}>Language:</label>
                <select value={language} onChange={(e) => handleLanguageChange(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }}>
                  <option>English</option>
                  <option>Swahili</option>
                </select>
                <label style={{ display: 'block', marginBottom: '10px' }}>Font Size:</label>
                <select value={fontSize} onChange={(e) => handleFontSizeChange(e.target.value)} style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
                <button onClick={() => setShowModal(null)} style={{ backgroundColor: '#10b981', color: 'white', padding: '10px', borderRadius: '8px', width: '100%', border: 'none', cursor: 'pointer' }}>Close</button>
              </div>
            )}
           {showModal === 'rate' && (
  <div>
    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Rate Us</h3>
    <div style={{ marginBottom: '20px' }}>
      
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => {
            setRating(star);
          }}
          style={{
            cursor: 'pointer',
            fontSize: '32px',
            color: star <= rating ? '#f59e0b' : '#d1d5db',
            margin: '0 5px'
          }}
        >
          ★
        </span>
      ))}
    </div>
    
    <button 
      onClick={() => {
        // Using the Navigator Clipboard API to copy link
        const inviteLink = "https://yourapp.com";
        navigator.clipboard.writeText(inviteLink)
          .then(() => alert("Invite link copied! Share it with your friends."))
          .catch((err) => console.error("Could not copy text: ", err));
      }} 
      style={{ backgroundColor: '#a855f7', color: 'white', padding: '12px', borderRadius: '8px', width: '100%', marginBottom: '10px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
    >
      Invite a New Member 🔗
    </button>

    <button 
      onClick={() => setShowModal(null)} 
      style={{ backgroundColor: '#6b7280', color: 'white', padding: '10px', borderRadius: '8px', width: '100%', border: 'none', cursor: 'pointer' }}
    >
      Close
    </button>
  </div>
)}

            {showModal === 'help' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px' }}>Help & Support</h3>
                <p style={{ marginBottom: '10px' }}>Email: <strong>Imani360@gmail.com</strong></p>
                <p style={{ marginBottom: '20px' }}>Phone: <strong>+123-456-7890</strong></p>
                <button onClick={() => setShowModal(null)} style={{ backgroundColor: '#ef4444', color: 'white', padding: '10px', borderRadius: '8px', width: '100%', border: 'none', cursor: 'pointer' }}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsScreen;