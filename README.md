## HealthSync

HealthSync is a comprehensive telemedicine platform enabling secure video consultations, electronic health records, and prescription management. The system is built with a React frontend and a Node.js/Express backend, utilizing MongoDB for data storage. It supports features essential for remote healthcare, including video calls between patients and doctors, patient record management, and digital prescription issuance.

# Features

- **Video Consultations**: Real-time video calls for virtual consultations between doctors and patients.
- **Patient Management**: CRUD functionality to manage patient data, including health records.
- **Prescription Management**: Secure digital prescriptions with dosage details and issuance dates.
- **Authentication**: Secure user authentication and authorization using JWT.
- **Data Storage**: MongoDB to store patient information, prescriptions, and appointment records.


# Prerequisites

- **Node.js** and **npm**: To run the backend and frontend applications.
- **MongoDB**: For storing data.
- **Docker** (optional): To containerize the application for easier deployment.
- **NGINX** (optional): For load balancing and server configuration.

# Set up environment variables:

- Create .env files in both the client and server directories based on the .env.example files.
- Add MongoDB URI, JWT secret, and any other necessary API keys.
- Install dependencies:

# For the server:
- cd server
- npm install

# For the client:
- cd ../client
- npm install

# Start the development servers:

# Start the backend server (in the server directory):
- npm start

# Start the frontend development server (in the client directory):
- npm start

# Usage
- Visit http://localhost:3000 in your browser to access the frontend application.
- Backend server should be running on http://localhost:5000.
- Use the authentication page to log in or register.
- Explore video consultations, manage patient profiles, and create/view prescriptions.

# API Endpoints

# Authentication Routes
- POST /api/auth/login: Logs in a user.
- POST /api/auth/register: Registers a new user.

# Patient Routes
- GET /api/patients/:id: Fetches a patient's information.
- PUT /api/patients/:id: Updates a patient's information.

# Prescription Routes
- GET /api/prescriptions?patientId=<id>: Fetches prescriptions for a patient.
- POST /api/prescriptions: Creates a new prescription.

# Video Routes
- POST /api/video/start/:appointmentId: Starts a video call.
- POST /api/video/end/:appointmentId: Ends a video call.
