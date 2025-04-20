# The Digital Diner

A full-stack web application for a restaurant's online ordering system.

## Features
- View categorized menu items (e.g., Appetizers, Main Courses, Desserts, Drinks).
- Add items to a shopping cart and view the total price.
- Place orders with basic contact information (Name, Phone Number).
- View past orders associated with a phone number.

---

## Technologies
- **Frontend**: React
- **Backend**: Node.js, Express
- **Databases**: MongoDB (menu items), PostgreSQL (orders, users)

---

## Database Design

### Why MongoDB for Menu Items?
- **Flexible Schema**: Menu items may have varying details (e.g., optional image URLs, descriptions).
- **Scalability**: MongoDB is optimized for handling large collections of documents.

### Why PostgreSQL for Users and Orders?
- **Relational Structure**: Users and orders have structured relationships.
- **Consistency**: PostgreSQL ensures ACID compliance for order data.

---

## API Endpoints

### Menu Endpoints
- `GET /api/menu`: Fetch all menu items.
- `POST /api/menu`: Add a new menu item (bonus).

### Order Endpoints
- `POST /api/orders`: Place an order (requires Name, Phone, and Cart data).
- `GET /api/orders/:phone`: Fetch orders by phone number.

---

## Deployment

### Frontend
The frontend application is deployed on **Netlify**.  
Access it here:https://scan-and-dine.onrender.com/

### Backend
The backend API is deployed on a cloud platform (e.g., Render, Fly.io, or Heroku).  
Ensure the API URL is correctly set in the frontend `.env` file.

---

## Assumptions and Challenges

### Assumptions
- Users don’t need authentication; orders are tied to phone numbers.
- The cart is stored temporarily on the frontend until order submission.

### Challenges
- Integrating two databases (MongoDB and PostgreSQL) required careful design to avoid redundant storage.
- Ensuring Cross-Origin Resource Sharing (CORS) for communication between Netlify and the backend.

---

## License
This project is licensed under the MIT License.
