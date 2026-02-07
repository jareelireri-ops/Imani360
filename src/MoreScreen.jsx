import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // 1. Hook into the Memory Bank

const MoreScreen = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); // 2. Grab user state and logout power

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4 text-white"
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
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              lineHeight: '1.3',
              color: '#ffffff', // Changed to white for better contrast
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
      <div className="w-full max-w-2xl flex justify-between items-center mb-4 px-2">
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
          }}
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
          }}
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
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 215, 0, 0.6)',
            animation: 'glow 2s ease-in-out infinite alternate',
          }}
        >
          ✝
        </div>
        {/* Glow Animation Keyframes */}
        <style>{`
          @keyframes glow {
            from {filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));}
            to {filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));}
          }
        `}</style>
      </div>

      {/* Main Grid */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-8 px-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full justify-items-center">
          {[
            { icon: '💰', text: 'PLEDGES', route: '/pledges' },
            { icon: '📖', text: 'PREVIOUS\nSERMONS', route: '/previous-sermons' },
            //we use "\n" in the text to create a line break, and "whitespace-pre-line" in the card text style to make it work.
            { icon: '🤝', text: 'MEMBERS\nCONNECT', route: '/members-connect' },
            { icon: '⚙️', text: 'SETTINGS', route: '/settings' },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 group"
              style={{
                width: 'clamp(100px, 22vw, 150px)',
                height: 'clamp(100px, 22vw, 150px)',
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              }}
              onClick={() => navigate(card.route)}
            >
              <div className="mb-2 text-[clamp(22px, 6vw, 28px)] group-hover:animate-bounce">{card.icon}</div>
              <div className="text-center font-black text-white text-[clamp(10px, 2.5vw, 14px)] whitespace-pre-line">
                {card.text}
              </div>
            </div>
          ))}
        </div>

        {/* --- THE STEALTH SWITCH SLOT --- */}
        <div className="flex flex-col items-center justify-center mt-12">
          {!user ? (
            /* SHOW LOGIN CARD IF GUEST */
            <div
              className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-2 group"
              style={{
                width: 'clamp(140px, 30vw, 180px)',
                height: 'clamp(80px, 15vw, 90px)',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), 0 0 15px rgba(139, 92, 246, 0.4)',
                borderRadius: '12px',
              }}
              onClick={() => navigate('/admin')}
            >
              <div className="mb-1 text-[clamp(20px, 5vw, 24px)] group-hover:animate-pulse">🔒</div>
              <div className="text-center font-black text-white text-[clamp(8px, 2vw, 11px)] uppercase">
                Log In As Admin
              </div>
            </div>
          ) : (
            /* SHOW STAFF HUB CARD IF LOGGED IN */
            <div className="flex flex-col items-center">
               <div
                className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 group"
                style={{
                  width: 'clamp(140px, 30vw, 180px)',
                  height: 'clamp(80px, 15vw, 90px)',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)', // Match your Green-500 logic
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                  borderRadius: '12px',
                }}
                onClick={() => navigate('/staff-tools')}
              >
                <div className="mb-1 text-[24px] group-hover:animate-spin">🛠</div>
                <div className="text-center font-black text-white text-[11px] uppercase tracking-tighter">
                  Staff Tools
                </div>
              </div>
              
              {/* Subtle Logout Link */}
              <button 
                onClick={() => { logout(); navigate('/'); }}
                className="mt-6 text-white/40 text-[10px] font-bold tracking-widest hover:text-red-400 transition-colors uppercase"
              >
                Sign Out: {user.name}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreScreen;