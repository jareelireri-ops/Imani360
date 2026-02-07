import React, { createContext, useState, useContext } from 'react';

// This is the "Badge" system for staff authentication and role-based access control
const AuthContext = createContext();

//the {children} are the screens that will be wrapped by this provider in App.jsx
export const AuthProvider = ({ children }) => {
  // This 'user' state is the "Badge" that stays in the staff member's pocket
  const [user, setUser] = useState(null);

  // THE STAFF DIRECTORY (Your Mock Data)
  
  const staffDirectory = [
    { 
      name: "Jareel Ireri", 
      username: "jareel", 
      password: "Jahisreal", 
      role: "MEDIA",
      // These are the specific rooms Jareel can tweak or access data
      permissions: ['live_buttons', 'sermons', 'announcements', 'events']
    },
    { 
      name: "David Kagwa", 
      username: "david", 
      password: "kipipiri", 
      role: "SUPER", 
      //David ni Super Admin has access to (Everything)
      permissions: ['all']
    }
  ];

 // THE LOGIN verification function that checks 
 // the "Badge" (credentials) against the staff directory and gives them the right permissions

  const login = (username, password) => {
    const foundUser = staffDirectory.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setUser(foundUser); // Save the badge in memory
      return { success: true, name: foundUser.name };
    }
    
    return { success: false };
  };

  /**
   * Logging out is like taking off the badge.
   * Removes the badge and makes the "Staff Tools" button disappear
   */
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 //This hook is a shortcut to access the "Badge" (user) and the go ahead (login/logout) to/from any screen.
 * This is the "Shortcut" we use in our screens to check if 
 * the user is logged in and what their permissions are.**/

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};