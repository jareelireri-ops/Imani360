import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrayersScreen = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('main'); // 'main', 'details', 'thankyou'
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleShareWithDetails = () => setCurrentView('details');
  const handleShareAnonymously = () => setCurrentView('thankyou');
  const handleSend = () => setCurrentView('thankyou');

  // Custom back function: Go back within views, not to previous page
  const handleBack = () => {
    if (currentView === 'details' || currentView === 'thankyou') {
      setCurrentView('main'); // Go back to main prayer screen
    } else {
      navigate(-1); // Fallback to previous page if needed
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
      {/* Header Container - Standardized */}
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

      {/* Navigation Buttons - Standardized */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <button
          onClick={handleBack} // Custom back: Goes back within views
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

      {/* Metallic Cross - Standardized */}
      <div className="mb-12 relative" style={{ textAlign: 'center' }}>
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

      {/* Content Based on Current View */}
      {currentView === 'main' && (
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-white text-2xl font-bold mb-8">PRAYER REQUEST/ MESSAGE TO THE REVEREND 🙏</h1>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your prayer request or message..."
            className="w-full h-96 p-4 bg-gray-300 text-black rounded-lg mb-8 resize-none" // Doubled height to h-96 (384px)
          />
          <div className="space-y-4">
            <button
              onClick={handleShareWithDetails}
              style={{
                backgroundColor: '#dc2626', // Bright red
                color: 'white',
                width: '100%',
                padding: '16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
            >
              SHARE WITH MY DETAILS 📩
            </button>
            <button
              onClick={handleShareAnonymously}
              style={{
                backgroundColor: '#fb923c', // Coral/salmon
                color: 'white',
                width: '100%',
                padding: '16px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f97316'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#fb923c'}
            >
              SHARE ANONYMOUSLY📩
            </button>
          </div>
        </div>
      )}

      {currentView === 'details' && (
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-white text-2xl font-bold mb-8">PRAYER REQUEST/ MESSAGE TO THE REVEREND 🙏</h1>
          <div className="space-y-4 mb-8">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name :"
              className="w-full p-4 bg-gray-300 text-black rounded-lg"
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number :"
              className="w-full p-4 bg-gray-300 text-black rounded-lg"
            />
          </div>
          <button
            onClick={handleSend}
            style={{
              backgroundColor: '#dc2626', // Bright red
              color: 'white',
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}
          >
            SEND 📩
          </button>
        </div>
      )}

      {currentView === 'thankyou' && (
        <div className="w-full max-w-2xl text-center">
          <div className="mb-12 relative" style={{ textAlign: 'center' }}>
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
          </div>
          <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>THANK YOU</h1>
          <p className="text-white text-xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Your message/prayer has been sent 😊</p>
        </div>
      )}
    </div>
  );
};

export default PrayersScreen;