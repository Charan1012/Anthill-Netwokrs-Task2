# Anthill-Netwokrs-Task2

Bus Booking System API Documentation
Base URL
http://localhost:3000

Authentication
All endpoints (except /api/auth/register and /api/auth/login) require authentication. Use the access token returned after login in the Authorization header.

Header:
Authorization: Bearer <accessToken>


Endpoints
1. User Registration
URL: /api/auth/register

Method: POST

Description: Register a new user.

Request Body:
{
  "name": "Charan",
  "email": "charan@example.com",
  "password": "password123",
  "role": "user"
}

Response:

{
  "message": "User registered successfully"
}

2. User Login
URL: /api/auth/login

Method: POST

Description: Log in as a user and get access and refresh tokens.

Request Body:
{
  "email": "charan@example.com",
  "password": "password123"
}
Response:
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

3. Add a Bus (Admin Only)
URL: /api/admin/buses

Method: POST

Description: Add a new bus (admin role required).

Request Body:
{
  "busNumber": "BUS123",
  "capacity": 50,
  "routes": ["64f8b1b2e4b0f5a9c8f8e8f9"]
}
Response:
{
  "message": "Bus added successfully",
  "bus": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f8",
    "busNumber": "BUS123",
    "capacity": 50,
    "routes": ["64f8b1b2e4b0f5a9c8f8e8f9"],
    "__v": 0
  }
}

4. Update a Bus (Admin Only)
URL: /api/admin/buses/:id

Method: PUT

Description: Update an existing bus (admin role required).

Request Body:
{
  "capacity": 60
}
Response:
{
  "message": "Bus updated successfully",
  "bus": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f8",
    "busNumber": "BUS123",
    "capacity": 60,
    "routes": ["64f8b1b2e4b0f5a9c8f8e8f9"],
    "__v": 0
  }
}

5. Add a Route (Admin Only)
URL: /api/admin/routes

Method: POST

Description: Add a new route (admin role required).

Request Body:
{
  "source": "City A",
  "destination": "City B",
  "distance": 200,
  "duration": 4
}
Response:
{
  "message": "Route added successfully",
  "route": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f9",
    "source": "City A",
    "destination": "City B",
    "distance": 200,
    "duration": 4,
    "__v": 0
  }
}

6. Update a Route (Admin Only)
URL: /api/admin/routes/:id

Method: PUT

Description: Update an existing route (admin role required).

Request Body:
{
  "distance": 250,
  "duration": 5
}
Response:
{
  "message": "Route updated successfully",
  "route": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f9",
    "source": "City A",
    "destination": "City B",
    "distance": 250,
    "duration": 5,
    "__v": 0
  }
}

7. Search Buses
URL: /api/buses

Method: GET

Description: Search for buses by source and destination.

Query Parameters:

source: Source city (required).

destination: Destination city (required).

Example URL:
/api/buses?source=CityA&destination=CityB

Response:
[
  {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f8",
    "busNumber": "BUS123",
    "capacity": 50,
    "routes": [
      {
        "_id": "64f8b1b2e4b0f5a9c8f8e8f9",
        "source": "City A",
        "destination": "City B",
        "distance": 200,
        "duration": 4,
        "__v": 0
      }
    ],
    "__v": 0
  }
]

8. Book a Bus
URL: /api/bookings

Method: POST

Description: Book a bus.

Request Body:
{
  "busId": "64f8b1b2e4b0f5a9c8f8e8f8",
  "seats": 2
}

Response:
{
  "message": "Bus booked successfully",
  "booking": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f9",
    "user": "64f8b1b2e4b0f5a9c8f8e8f7",
    "bus": "64f8b1b2e4b0f5a9c8f8e8f8",
    "seats": 2,
    "status": "booked",
    "__v": 0
  }
}

9. Cancel a Booking
URL: /api/bookings/:id

Method: DELETE

Description: Cancel a booking.

Response:
{
  "message": "Booking cancelled successfully",
  "booking": {
    "_id": "64f8b1b2e4b0f5a9c8f8e8f9",
    "user": "64f8b1b2e4b0f5a9c8f8e8f7",
    "bus": "64f8b1b2e4b0f5a9c8f8e8f8",
    "seats": 2,
    "status": "cancelled",
    "__v": 0
  }
}

Error Responses
400 Bad Request:
{
  "message": "Invalid credentials"
}

401 Unauthorized:
{
  "message": "Access denied"
}

500 Internal Server Error:
{
  "message": "Something went wrong!"
}

How to Run the Application

1)Clone the Repository:
git clone 

2)Build and Run the Application:
docker-compose up --build

3)Access the Application:
Open http://localhost:3000 in your browser.











