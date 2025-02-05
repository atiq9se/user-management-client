# User Management

A web-based **User Management System** that allows administrators to manage users, authentication, and roles efficiently. The system provides an **admin dashboard** for user control and authentication via **Firebase Auth** and **JWT**.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **User Management** system is designed for organizations and applications that require **secure user authentication, role management, and an admin dashboard** for user operations. It is built with **Node.js, Firebase, and MongoDB**, ensuring **scalability and security**.

## Features

- **User Authentication:** Firebase Auth & JWT-based authentication
- **Role Management:** Assign roles and permissions
- **Admin Dashboard:** Manage users, roles, and authentication settings
- **State Management:** Uses **Context API** for global state handling
- **Database:** Supports both **MongoDB and Firebase**
- **Deployment:** Hosted on **Vercel** for seamless scalability

## Technologies Used

- **Backend:** Node.js, Firebase
- **State Management:** Context API
- **Authentication:** Firebase Auth, JWT
- **Database:** MongoDB, Firebase
- **Deployment:** Vercel

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/user-management.git
   cd user-management

2. Install dependencies:
    npm install

3. Set up your environment variables in a .env file:
   MONGODB_URI=your_mongodb_connection_string
   FIREBASE_API_KEY=your_firebase_api_key
   JWT_SECRET=your_jwt_secret_key

4. Start the development server:
   npm run dev

Configuration

    Ensure Firebase authentication is correctly set up.
    Update the .env file with Firebase and MongoDB credentials.
    Modify necessary settings in config.js as per your requirements.

Usage

    Admin Dashboard:
        View, create, edit, and delete users
        Assign roles and permissions
    User Authentication:
        Register and log in using Firebase authentication
        Secure sessions with JWT
    Database Management:
        Store user information in MongoDB or Firebase

