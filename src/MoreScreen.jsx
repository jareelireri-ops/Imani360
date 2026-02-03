import React from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const MoreScreen = () => {
  const navigate = useNavigate(); // Add this hook

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-4"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(99, 102, 241, 0.8) 0%, rgba(37, 40, 153, 0.9) 50%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        margin: 0,
        fontFamily: "'Montserrat', sans-serif", // Modern, professional font
      }}
    >
      {/* Header Container */}
      <div className="w-full max-w-2xl mb-8">
        <div
          className="w-full relative overflow-hidden"
          style={{
            boxSizing: 'border-box',
            height: '80px',
            background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)', // Professional blue gradient
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
          }}
        >
          {/* Subtle animated background effect */}
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
          onClick={() => navigate(-1)} // Or custom handleBack for PrayersScreen
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

      {/* Metallic Cross - Enhanced Glow */}
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
        {/* CSS Animation for glow */}
        <style>{`
          @keyframes glow {
            from { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1); }
            to { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.4)) brightness(1.1); }
          }
        `}</style>
      </div>

      {/* More Cards - RESPONSIVE 2x2 Grid */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-16 px-4">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-16 w-full justify-items-center">
          {[
            { icon: '👥', text: 'JOIN A<br />GROUP', route: '/join-group' },
            { icon: '📖', text: 'PREVIOUS<br />SERMONS', route: '/previous-sermons' },
            { icon: '🤝', text: 'MEMBERS<br />CONNECT', route: '/members-connect' },
            { icon: '⚙️', text: 'SETTINGS', route: '/settings' },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{
                width: 'clamp(100px, 22vw, 150px)',
                height: 'clamp(100px, 22vw, 150px)',
                background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)', // Professional cyan gradient
                border: '2px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: 'clamp(8px, 2vw, 12px)',
              }}
              onClick={() => navigate(card.route)} // Navigate to respective route
            >
              <div className="mb-2 text-[clamp(22px, 6vw, 28px)] group-hover:animate-bounce">{card.icon}</div>
              <div 
                className="text-center font-black text-white leading-[1.2] drop-shadow-md px-1"
                style={{
                  fontSize: 'clamp(10px, 2.5vw, 16px)',
                  fontWeight: 'bolder',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'pre-line',
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: card.text }} />
              </div>
            </div>
          ))}
        </div>

        {/* LOG IN AS ADMIN Button - Distinct but Blending Design */}
        <div className="flex justify-center mt-8">
          <div
            className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-6 group"
            style={{
              width: 'clamp(120px, 25vw, 160px)', // Slightly wider for text
              height: 'clamp(70px, 15vw, 80px)',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)', // Distinct purple gradient
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 0 15px rgba(139, 92, 246, 0.4)',
              borderRadius: '12px', // Rectangular with rounded corners
              padding: 'clamp(8px, 2vw, 10px)',
            }}
            onClick={() => navigate('/admin')} // Enabled navigation to /admin
          >
            <div className="mb-1 text-[clamp(20px, 5vw, 24px)] group-hover:animate-pulse">🔒</div>
            <div className="text-center font-black text-white text-[clamp(8px, 2vw, 10px)] drop-shadow-md leading-[1.1]">
              LOG IN AS<br />ADMIN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreScreen;