# Aero-Tix: An Online Air Ticket Booking App

## Project Description

**Aero-Tix** is a modern online air ticket booking application. It is designed to handle all essential operations such as user authentication, flight scheduling, and ticket booking with a focus on security and performance. Leveraging Node.js and Express.js for a fast and responsive API, Aero-Tix ensures seamless communication between the frontend and the database. MongoDB is utilized for flexible and efficient data storage, while JSON Web Token (JWT) provides secure user sessions and access control. This project delivers a reliable backend system that supports the core functions needed for an efficient air ticket booking service.

## Project Features

- **User Authentication:** 
  - Secure user registration and login using JSON Web Token (JWT).
  - Password hashing for secure storage.
- **Flight Management:** 
  - CRUD operations for managing flight details.
- **Booking System:** 
  - Booking flights, managing reservations, and viewing booking history.
- **Payment Gateway Integration:**
  - (Optional: Include details if payment handling is implemented in the backend.)
- **Database Management:**
  - MongoDB is used to manage all user and flight-related data.
  
## Tools and Technologies

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web framework for building RESTful APIs.
- **JSON Web Token (JWT):** For secure authentication and authorization.
- **MongoDB:** NoSQL database for storing and managing data.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kajal-rekha/aero-tix.git
    cd aero-tix
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add the following variables:
     ```plaintext
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Start the server:**
    ```bash
    npm run dev
    ```

   The server will start on `http://localhost:5000`.

## Conclusion

**Aero-Tix** is a comprehensive backend solution for an online air ticket booking platform. With its secure authentication, efficient booking system, and robust data management, it lays the foundation for building a fully functional and scalable air ticket booking application.

Feel free to contribute or raise issues if you encounter any bugs or have suggestions for improvements.
