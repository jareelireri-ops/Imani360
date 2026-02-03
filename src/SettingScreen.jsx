import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsScreen = () => {
  const navigate = useNavigate();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('English');
  const [fontSize, setFontSize] = useState('Medium');
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(null); // 'rate', or 'help'

  const handleInvite = () => {
    alert('Invite link copied! Share: https://yourapp.com/invite');
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
      {/* Header */}
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
            SETTINGS
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Adjusted to Match PrayersScreen Style */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: '#06b6d4', // Cyan
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
            backgroundColor: 'black', // Black
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

      {/* Glowing Cross */}
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

      {/* Settings Buttons (4 Buttons in a Grid) - Increased Visibility */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-16 px-4">
        <div className="grid grid-cols-1 gap-8 w-full max-w-md">
          <button
            className="flex items-center justify-center p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black"
          >
            🔔 Notifications
          </button>
          <button
            className="flex items-center justify-center p-8 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg hover:from-green-600 hover:to-green-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black"
          >
            🌍 Font Size & Language
          </button>
          <button
            onClick={() => setShowModal('rate')}
            className="flex items-center justify-center p-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:from-purple-600 hover:to-purple-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black"
          >
            ⭐ Rate Us / Invite Member
          </button>
          <button
            onClick={() => setShowModal('help')}
            className="flex items-center justify-center p-8 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:from-red-600 hover:to-red-800 transition duration-300 shadow-2xl border-4 border-white/50 text-xl font-black"
          >
            ❓ Help & Support
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
            {showModal === 'rate' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Rate Us</h3>
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <button onClick={handleInvite} className="bg-purple-500 text-white px-4 py-2 rounded mb-4 w-full">Invite a New Member</button>
                <button onClick={() => setShowModal(null)} className="bg-purple-500 text-white px-4 py-2 rounded">Close</button>
              </div>
            )}
            {showModal === 'help' && (
              <div>
                <h3 className="text-lg font-bold mb-4">Help & Support</h3>
                <p className="text-sm mb-2">Email: Imani360@gmail.com</p>
                <p className="text-sm mb-4">Phone: +123-456-7890</p>
                <button onClick={() => setShowModal(null)} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsScreen;