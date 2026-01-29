import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoticesScreen = () => {
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState([
    // Mock data - replace with real data later (e.g., from API or Firebase)
    { id: 1, title: 'Sunday Service Update', date: '2023-10-15', description: 'Join us for our special service this Sunday at 10 AM. We will have guest speakers and music.' },
    { id: 2, title: 'Community Outreach', date: '2023-10-20', description: 'Volunteers needed for the food drive next week. Sign up in the foyer or contact the office.' },
    { id: 3, title: 'Youth Group Meeting', date: '2023-10-22', description: 'Weekly youth meeting on Friday at 7 PM. All ages welcome!' },
  ]);
  const [isAdmin, setIsAdmin] = useState(false); // Placeholder - set to true if admin is logged in (we can add auth check later)
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Function to get current date
  const getCurrentDate = () => new Date().toISOString().split('T')[0];

  // Function to check if date is within last 14 days
  const isWithinTwoWeeks = (dateString) => {
    const announcementDate = new Date(dateString);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return announcementDate >= twoWeeksAgo;
  };

  // Filtered and sorted announcements (latest first, within 2 weeks)
  const filteredAnnouncements = announcements
    .filter((announcement) => isWithinTwoWeeks(announcement.date))
    .filter((announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date descending (latest first)

  const handleAddAnnouncement = () => {
    if (newTitle && newDescription) {
      const newAnnouncement = {
        id: announcements.length + 1,
        title: newTitle,
        date: getCurrentDate(),
        description: newDescription,
      };
      setAnnouncements([...announcements, newAnnouncement]);
      setNewTitle('');
      setNewDescription('');
      setShowForm(false);
    }
  };

  const handleRefresh = () => {
    // For now, just re-filter and re-sort (replace with API call later)
    setAnnouncements([...announcements]);
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
            CHURCH NOTICES (ANNOUNCEMENTS)
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
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

      {/* Search Bar and Refresh Button */}
      <div className="w-full max-w-2xl mb-8 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search announcements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-md"
        />
        <button
          onClick={handleRefresh}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:from-blue-600 hover:to-blue-800 transition duration-300"
        >
          Refresh
        </button>
      </div>

      {/* Announcements List */}
      <div className="w-full max-w-2xl flex flex-col items-center mb-16 px-4 max-h-96 overflow-y-auto">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="w-full mb-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20"
            >
              <h3 className="text-white font-black text-lg mb-2">{announcement.title}</h3>
              <p className="text-white/80 text-sm mb-2">Date: {announcement.date}</p>
              <p className="text-white leading-relaxed">{announcement.description}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No announcements found.</p>
        )}
      </div>

      {/* Admin Add Button */}
      {isAdmin && (
        <div className="w-full max-w-2xl flex justify-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-2 px-6 rounded-md hover:from-purple-600 hover:to-purple-800 transition duration-300"
          >
            {showForm ? 'Cancel' : 'Add Announcement'}
          </button>
        </div>
      )}

      {/* Add Announcement Form (Admin Only) */}
      {showForm && isAdmin && (
        <div className="w-full max-w-2xl mb-8 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
          <h4 className="text-white font-black mb-4">Add New Announcement</h4>
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            onClick={handleAddAnnouncement}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-2 px-4 rounded-md hover:from-green-600 hover:to-green-800 transition duration-300"
          >
            Add Announcement
          </button>
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-gray-500 to-gray-700 text-white font-bold py-2 px-6 rounded-md hover:from-gray-600 hover:to-gray-800 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NoticesScreen;