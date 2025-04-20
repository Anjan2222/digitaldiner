# The Digital Diner

A full-stack web application for an online restaurant ordering system.

---

## **Features**
- Browse categorized menu items.
- Add items to your shopping cart and view the total price.
- Place orders with basic customer details.
- Track past orders using your phone number.

---

## **System Overview**
The application consists of a full-stack architecture:
- **Frontend**: Built with React.js for an interactive and user-friendly interface.
- **Backend**: Powered by Node.js and Express for handling API requests and business logic.
- **Databases**:
  - **MongoDB**: To store flexible data for menu items.
  - **PostgreSQL**: For relational data like users and orders.

---

## **API Endpoints**

### **Menu Endpoints**
- `GET /api/menu`: Fetch all menu items.
- `POST /api/menu`: Add a new menu item (bonus functionality).

### **Order Endpoints**
- `POST /api/orders`: Place an order (requires Name, Phone, and Cart data).
- `GET /api/orders/:phone`: Fetch orders by phone number.

---

## **Live Demo**
Access the live application here:  
**Frontend**: Visit the deployed site to explore the app.

---

## **Getting Started**

### Prerequisites
1. **Node.js & npm**: Make sure you have Node.js installed.
2. **MongoDB**: Ensure MongoDB is set up and running.
3. **PostgreSQL**: Install and configure PostgreSQL.

### Installation
1. Set up the backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Update .env with your MongoDB & PostgreSQL credentials
   npm start
   ```

2. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Update .env with REACT_APP_API_URL pointing to your backend
   npm start
   ```

3. Open your browser at `http://localhost:3000`.

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
