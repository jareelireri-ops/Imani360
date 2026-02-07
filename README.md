# Imani360
It is an all-in-one digital platform designed to strengthen the relationship between churches and their congregations in today’s fast-paced, digital world.
The app provides a centralized, secure, and user-friendly space for spiritual engagement, communication, and church administration—eliminating the need for fragmented tools such as texts, social media, or paper-based systems.
---

## How It Works
1. User Access
-Members log in to the app using secure authentication.
2. Spiritual Engagement
-Access sermons, notices, announcements, and church events.
3. Giving and Pledges
-Members view clear instructions and channels for tithes, offerings, donations, and pledges.
4. Communication
-Members submit prayer requests or messages anonymously or with their identity visible.
5. Administration
Church administrators manage events, announcements, and member engagement from a central platform.
---

## Users
-Church members seeking digital access to church services and communication

-Church administrators and leaders managing announcements, events, and engagement

-Congregations needing a unified digital fellowship experience
---

## ## Benefits of the project
-Centralized church communication in one platform
- Improved member participation and engagement
- Secure and private communication channels
- Reduced reliance on fragmented tools (texts, social media, paper)
- Stronger sense of fellowship and community

---
## Goals of the project
- Demonstrate real-world application development using React Native
- Showcase modern UI styling with Tailwind
- Build a scalable and user-friendly digital community platform
- Improve digital transformation in religious institutions

## Technologies Used
- React Native
- Tailwind CSS
- JavaScript

## Setup Instructions
1 clone the Repositorty
```bash
git clone git@github.com:jareelireri-ops/Imani360.git
cd Imani360

2 Install Dependencies
npm install

3 Install Tailwind 
 -npm install tailwindcss @tailwindcss/vite

4 Run the Development Server
npm run dev

### For Church Members

- Open the application in your web browser.
- Navigate through the **Home** screen to view:
  - Notices and announcements
  - Church events
- Use the **Giving** section to view payment instructions and submit tithes or offerings.
- Submit prayer requests via the **Prayer** screen, either anonymously or with your identity visible.

### For Administrators

- Access the **Admin Login** screen.
- Log in using authorized admin credentials.
- Manage:
  - Notices and announcements
  - Church events
  - Church communications

---

##  Custom Hooks Breakdown

### useAuth

**Purpose:**  
Manages authentication state across the application.

**Responsibilities:**
- Tracks the logged-in user
- Handles login and logout
- Protects restricted routes

---

### useFormState

**Purpose:**  
Manages form data for prayers, giving, and messages.

**Responsibilities:**
- Stores input values
- Handles input changes
- Resets form after submission

---

### useClipboard

**Purpose:**  
Enables copying of giving and payment details.

**Responsibilities:**
- Copies text to the clipboard
- Provides user feedback on success or failure

---

### useNavigationFlow

**Purpose:**  
Controls step-based navigation between screens.

**Responsibilities:**
- Tracks the current screen
- Prevents invalid navigation states


## Component Tree
.
├── AdminLogin.jsx
├── App.css
├── App.jsx
├── assets
│   └── react.svg
├── EventsScreen.jsx
├── GivingScreen.jsx
├── HomeScreen.jsx
├── index.css
├── main.jsx
├── MoreScreen.jsx
├── NoticesScreen.jsx
└── PrayerScreen.jsx

2 directories, 12 files

 ## Author
 This project was developed by :
 1.Asumpta2640
 2.jareelireri-ops

#License

This Project is licensed under the MIT License