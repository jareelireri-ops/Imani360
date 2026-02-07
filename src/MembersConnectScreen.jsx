import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MembersConnectScreen = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '', groups: [], share: false });
  const [errors, setErrors] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for members (all set to share: true for testing)
  const [mockMembers, setMockMembers] = useState([
    { name: 'Jareel Ireri', number: '123-456-7890', groups: ['Praise and Worship'], share: true },
    { name: 'Rev. Kagwa', number: '987-654-3210', groups: ['Men', 'Media Team'], share: true },
    { name: 'Solomon Elder', number: '555-123-4567', groups: ['Sunday School'], share: true },
    { name: 'Juliah Wanjiru', number: '111-222-3333', groups: ['Women', 'Junior Youth'], share: true },
  ]);

  // Mock group stats 
  const [groupStats, setGroupStats] = useState({
    'Praise and Worship': 15,
    'Men': 10,
    'Women': 12,
    'Media Team': 8,
    'Junior Youth': 20,
    'Senior Youth': 18,
    'Sunday School': 25,
  });

  // Handle search (prefix matching for flexibility)
  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = mockMembers.filter(
      (member) =>
        member.share &&
        (member.name.toLowerCase().startsWith(query) ||
         member.groups.some((group) => group.toLowerCase().startsWith(query)))
    );
    setSearchResults(results);
    setHasSearched(true);
  };

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setErrors({ ...errors, [name]: '' });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.number.trim()) newErrors.number = 'Number is required.';
    if (formData.groups.length === 0) newErrors.groups = 'Select at least one group.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Update group stats dynamically
      setGroupStats(prevStats => {
        const updatedStats = { ...prevStats };
        formData.groups.forEach(group => {
          if (updatedStats[group] !== undefined) {
            updatedStats[group] += 1;
          }
        });
        return updatedStats;
      });

      // Add to mock members if sharing
      if (formData.share) {
        setMockMembers(prevMembers => [...prevMembers, { ...formData, share: true }]);
      }

      console.log('Submitted to Admin:', formData);
      alert('Thank you for sharing! We look forward to greater fellowship with our fellow members. Be blessed! 🙏');
      setFormData({ name: '', number: '', groups: [], share: false });
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div
            style={{
              fontFamily: "'Crimson Text', serif",
              fontWeight: '700',
              fontSize: 'clamp(18px, 4vw, 24px)',
              color: '#FFFFFF',
              textAlign: 'center',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            CHRISTIAN CHURCH INTERNATIONAL LIGHT SANCTUARY
          </div>
        </div>
      </div>

      {/* Nav Buttons */}
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

      {/* Cross */}
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
         {/* Glow Animation Keyframes */}
        <style>{`
          @keyframes glow {
            from {filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));}
            to {filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1));}
          }
        `}</style>
      </div>

      {/* Welcoming Message - Styled Card */}
      <div className="w-full max-w-2xl mb-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
        <h2 className="text-white text-2xl font-bold mb-2 text-center">Hey there, church family! ✝️</h2>
        <p className="text-white text-lg mb-2 text-center">Ready to connect and build stronger bonds?</p>
        <p className="text-white/80 text-base text-center">Share your details below and let's fellowship like never before!</p>
      </div>

      {/* Group Stats - Styled Cards */}
      <div className="w-full max-w-2xl mb-6">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">Group Stats</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(groupStats).map(([group, count]) => (
            <div key={group} className="bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 p-4 rounded-lg text-center border border-cyan-400/30 shadow-md">
              <p className="text-white font-bold">{group}</p>
              <p className="text-cyan-300">{count} members</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search Section - Styled Card */}
      <div className="w-full max-w-2xl mb-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">Find Members</h3>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by name or group"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-500 text-white px-4 py-3 rounded-lg hover:bg-cyan-600 transition shadow-md"
          >
            Search
          </button>
        </div>
        <div className="space-y-2">
          {searchResults.map((member, index) => (
            <div key={index} className="bg-white/10 p-4 rounded-lg flex justify-between items-center border border-white/20 shadow-sm">
              <div>
                <p className="text-white"><strong>{member.name}</strong> - {member.number}</p>
                <p className="text-cyan-300">Groups: {member.groups.join(', ')}</p>
              </div>
              <button
                onClick={() => window.location.href = `tel:${member.number}`}
                className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition text-sm shadow-md"
                title="Call"
              >
                📞 Call
              </button>
            </div>
          ))}
          {hasSearched && searchResults.length === 0 && searchQuery && <p className="text-white/70">No members found. Try another search!</p>}
        </div>
      </div>

      {/* Form - Styled Card */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
        <h3 className="text-white text-xl font-semibold mb-4 text-center">Share Your Details</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Your name"
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
                placeholder="Your number"
              />
              {errors.number && <p className="text-red-400 text-sm mt-1">{errors.number}</p>}
            </div>
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Groups (Auto-filled if joined)</label>
            <p className="text-white/70 text-sm">Select groups you're in:</p>
            <div className="grid grid-cols-2 gap-2">
              {['Praise and Worship', 'Men', 'Women', 'Media Team', 'Junior Youth', 'Senior Youth', 'Sunday School'].map((group) => (
                <label key={group} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.groups.includes(group)}
                    onChange={() => setFormData({
                      ...formData,
                      groups: formData.groups.includes(group)
                        ? formData.groups.filter((g) => g !== group)
                        : [...formData.groups, group],
                    })}
                    className="w-4 h-4 text-cyan-400 bg-white/20 border-white/30 rounded focus:ring-cyan-400"
                  />
                  <span className="text-white text-sm">{group}</span>
                </label>
              ))}
            </div>
            {errors.groups && <p className="text-red-400 text-sm mt-1">{errors.groups}</p>}
          </div>
          {/* Permission Checkbox - Highlighted */}
          <div className="bg-cyan-500/20 p-4 rounded-lg border border-cyan-400/50">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="share"
                checked={formData.share}
                onChange={handleInputChange}
                className="w-5 h-5 text-cyan-400 bg-white/20 border-white/30 rounded focus:ring-cyan-400"
              />
              <span className="text-white font-semibold">Allow other church members to see my details</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-cyan-800 transition shadow-lg"
          >
            Submit
          </button>
        </form>
        <p className="text-white/60 text-sm mt-4 text-center">Privacy: Your details go to admins. Sharing with members is optional.</p>
      </div>
    </div>
  );
};

export default MembersConnectScreen;