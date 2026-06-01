import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { AuthProvider } from './context/AuthContext';

// Home Screens
import HomeScreen from './screens/home/HomeScreen'; 
import MoreScreen from './screens/home/MoreScreen'; 

// Feature Screens
import NoticesScreen from './screens/features/NoticesScreen'; 
import EventsScreen from './screens/features/EventsScreen';
import PrayersScreen from './screens/features/PrayerScreen'; // Matched your sidebar spelling
import GivingScreen from './screens/features/GivingScreen';
import PreviousSermonsScreen from './screens/features/PreviousSermonScreen'; // Matched your sidebar spelling
import MembersConnectScreen from './screens/features/MembersConnectScreen';

// Admin Screens
import AdminLogin from './screens/admin/AdminLogin'; // Assuming you moved this to admin
import SettingScreen from './screens/admin/SettingScreen'; // Found this in your admin folder
import StaffToolsScreen from './screens/admin/StaffToolsScreen';

// 1. PLACEHOLDERS FOR ADMIN TOOLS - These will be fleshed out with real functionality later
const AdminFinances = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Finance Desk Coming Soon...</div>;
const AdminPrayers = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Prayer Management Coming Soon...</div>;
const AdminAnnouncements = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Announcements Manager Coming Soon...</div>;
const AdminEvents = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Events Manager Coming Soon...</div>;
const AdminSermonUpload = () => <div className="min-h-screen bg-black flex items-center justify-center text-white p-20">Sermon Upload Desk Coming Soon...</div>;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} /> 
          <Route path="/more" element={<MoreScreen />} /> 
          <Route path="/admin" element={<AdminLogin />} /> 
          <Route path="/notices" element={<NoticesScreen />} />
          <Route path="/events" element={<EventsScreen />} />
          <Route path="/prayers" element={<PrayersScreen />} />
          <Route path="/giving" element={<GivingScreen />} />
          <Route path="/previous-sermons" element={<PreviousSermonsScreen />} />
          <Route path="/members-connect" element={<MembersConnectScreen />} />
          <Route path="/settings" element={<SettingScreen />} />
          
          {/* STAFF TOOLS MAIN MENU */}
          <Route path="/staff-tools" element={<StaffToolsScreen />} />

          {/* ADMIN ACTION SUB-ROUTES */}
          <Route path="/admin/finances" element={<AdminFinances />} />
          <Route path="/admin/prayers" element={<AdminPrayers />} />
          <Route path="/admin/announcements" element={<AdminAnnouncements />} />
          <Route path="/admin/events" element={<AdminEvents />} />
          <Route path="/admin/sermon-upload" element={<AdminSermonUpload />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;