User Management System
This project is a user management system built with React. It provides features such as user authentication, CRUD operations on users, and token-based session management.

Features
Token Persistence:

Stores login tokens in local storage for maintaining sessions across page reloads.
Redirection:

Automatically redirects to the login page if the token is missing or invalid.
User Management:

View, edit, and delete users.
Includes pagination for better navigation of the user list.
Dynamic Feedback:

Displays success or error messages for actions (e.g., User deleted successfully! shown for 1 second with green background and white text).
Prerequisites
Before running the project, ensure you have:

Node.js (version 14 or higher)
npm or yarn package manager
Installation and Setup

1. Clone the Repository

git clone https://github.com/your-username/your-repo-name.git  
cd your-repo-name  
2. Install Dependencies
Run the following command to install all the required dependencies:

npm install  
3. Start the Development Server
Start the development server using:

npm start  
The app will be available at: http://localhost:3000

Project Structure
graphql

src  
│  
├── components # Contains reusable components (e.g., Header, Footer, LogoutButton)  
├── pages # Contains page components (e.g., Login, UsersList)  
├── styles # Contains CSS files for styling  
├── utils # Utility functions for token management and API requests  
├── App.js # Main application file  
└── index.js # Entry point for the React application  
Running in Production
Build the Application
Build the app for production using:

npm run build  
This will create an optimized build in the build/ folder.

Serve the Build
You can deploy the build/ folder to any static hosting service (e.g., Netlify, Vercel, or your custom server).

Assumptions and Considerations
The project uses Reqres API for demo purposes. Replace it with your backend endpoints in a production environment.
Success and error messages are styled dynamically using CSS classes.
Author
Developed by Aashish Verma
For queries, reach out at aashishverma1272@gmail.com.
