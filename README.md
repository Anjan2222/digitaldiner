# The Digital Diner

<p align="center">
  <img src=https:https://www.shutterstock.com/image-vector/restaurant-line-art-logo-minimalist-fork-2510539525 alt="The Digital Diner Logo">
</p>

A full-stack web application for an online restaurant ordering system.

---

## **Features**
- Browse categorized menu items (e.g., Appetizers, Main Courses, Desserts, Drinks).
- Add items to your shopping cart and view the total price.
- Place orders with basic customer details (Name, Phone Number).
- Track past orders using your phone number.

---

## **Widgets and Figures**

### **System Overview**
A high-level architecture of the application:
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=System+Architecture" alt="System Architecture">
</p>

### **Frontend**
- **Framework**: React.js
- **Deployment**: Netlify
- **Environment Variables**: 
  - `REACT_APP_API_URL`: Backend API Base URL

### **Backend**
- **Framework**: Node.js with Express
- **Databases**:
  - MongoDB: For storing menu items.
  - PostgreSQL: For managing users and orders.
- **Deployment**: Render/Heroku

---

### **Database Design**
#### **Schema Overview**
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Database+Schema" alt="Database Schema">
</p>

- **MongoDB**: Flexible schema for menu items.
- **PostgreSQL**: Strong relational consistency for users and orders.

---

## **API Endpoints**

### **Menu Endpoints**
- `GET /api/menu`: Fetch all menu items.
- `POST /api/menu`: Add a new menu item (bonus functionality).

### **Order Endpoints**
- `POST /api/orders`: Place an order (requires Name, Phone, and Cart data).
- `GET /api/orders/:phone`: Fetch orders by phone number.

---

## **Deployment Status**

### Frontend Deployment Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/<your-badge-id>/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

### Backend Deployment Status
[![Backend Deployment Status](https://img.shields.io/badge/Backend-Online-brightgreen)](https://your-backend-url)

---

## **Live Demo**
Access the application here:
- **Frontend**: [The Digital Diner Frontend](https://your-netlify-url.netlify.app)
- **Backend**: [API Documentation](https://your-backend-url/api-docs)

---

## **Screenshots**
### Homepage
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Homepage" alt="Homepage">
</p>

### Menu Page
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Menu+Page" alt="Menu Page">
</p>

### Cart Page
<p align="center">
  <img src="https://via.placeholder.com/800x400?text=Cart+Page" alt="Cart Page">
</p>

---

## **Getting Started**

### Prerequisites
1. **Node.js & npm**: [Install Node.js](https://nodejs.org/en/)
2. **MongoDB**: [Install MongoDB](https://www.mongodb.com/docs/manual/installation/)
3. **PostgreSQL**: [Install PostgreSQL](https://www.postgresql.org/download/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tarunlkr6/yummy-dispatch.git
   cd yummy-dispatch
   ```

2. Set up the backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your MongoDB & PostgreSQL credentials
   npm start
   ```

3. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with REACT_APP_API_URL pointing to your backend
   npm start
   ```

4. Open your browser at `http://localhost:3000`.

---

## **Contributing**

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add your message here"`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

---

## **License**
This project is licensed under the MIT License.

<p align="center">
  <img src="https://via.placeholder.com/800x100?text=Thank+You+for+Checking+Out+The+Digital+Diner!" alt="Thank You">
</p>
