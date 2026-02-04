import React from 'react';
import { useNavigate } from 'react-router-dom';

const GivingScreen = () => {
  const navigate = useNavigate();

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {

    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied: ${text}`);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      //alert('Failed to copy. Please try again.');
    });
  };

  // Main render,
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
            background: 'linear-gradient(135deg, #0c2a7e 0%, #3b82f6 50%, #1e40af 100%)',
            border: '2px solid rgba(145, 49, 49, 0.2)',
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
              color: 'rgb(26, 24, 24)',
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

      {/* Main Content Block */}
     <div className="w-full max-w-2xl text-left mb-8" style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 'bold', fontSize: '20px', color: 'white' }}> 
      <p>How to Give :</p>
       <br /> 

       <p>For tithes/offerings/thanksgiving use</p> 
       <p style={{ color: '#28FB36' }}>M-Pesa</p>
        <p style={{ color: '#28FB36' }}>Buy goods Till Number:
           <span style={{ color: 'white', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => copyToClipboard('123456')}
            >
            123456
            </span>
            </p> 
            <br/> 

           <p>For honoring pledges/donations to church projects use</p>
            <p style={{ color: '#28FB36' }}>Mpesa</p> 
            <p style={{ color: '#28FB36' }}>PAYBILL:</p>

        <p>Business Number:{' '} 
          <span
            onClick={() => copyToClipboard('654321')}
            className="underline cursor-pointer"
          >
            654321
          </span>
        </p>

        <p>Account Number:{' '} 
          <span onClick={() => copyToClipboard('CHURCH001')}
            className="underline cursor-pointer"
          >
            CHURCH001
          </span>
        </p>
      </div>


      {/* Thank You Message */}
      <div className="w-full max-w-2xl text-center" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '26px', color: '#86e717ea' }}>
        <p>Thank You for your generous giving .</p>
        <p>Be Blessed 🤍</p>
      </div>
    </div>
  );
};

export default GivingScreen;