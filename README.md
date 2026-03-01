# 🛒 Grocery List Manager - Frontend

### **Project Title:** Grocery List Manager 

---

##  Project Description
This is the frontend of a full-stack application designed to help users manage their household inventory. Users can track grocery needs, calculate budgets in real-time, and manage their pantry stock. The application is fully integrated with a Node.js/Express backend and a Supabase database to ensure data persistence and secure user authentication.

---

## ✨ Features
* **User Authentication:** Secure Signup and Login using JWT (JSON Web Tokens).
* **Real-time Grocery Management:** Add, update, and delete items from your shopping list with instant UI updates.
* **Pantry Inventory:** View available ingredients and track expiry dates.
* **Recipe Suggestions:** Custom matching algorithm compares pantry ingredients against stored recipes and highlights missing items.
* **Protected Routes:** React Context API ensures only logged-in users can access the dashboard.
* **Responsive UI:** Fully optimized for mobile and desktop using **Tailwind CSS** and **ShadCN UI**.

---

## 🛠 Tech Stack Used
* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Components:** ShadCN UI & Lucide React (Icons)
* **State Management:** React Context API
* **API Communication:** Axios (with Interceptors for JWT)
* **Routing:** React Router DOM

---

## 📂 Standard Folder Structure
```text
src/
├── components/     # Reusable ShadCN and Layout components
├── pages/          # Dashboard, Login, Signup, Grocery, Pantry
├── context/        # AuthContext and GroceryContext
├── services/       # Axios API configuration
├── App.jsx         # Routing and Provider setup
└── main.jsx        # Entry point
```

## Installation Steps
1. Clone the repository:
```
Bash
git clone [https://github.com/YOUR_USERNAME/grocery-list-manager-frontend.git](https://github.com/YOUR_USERNAME/grocery-list-manager-frontend.git)
cd grocery-list-manager-frontend
```

2. Install dependencies:

```
Bash
npm install
```

3. Run the development server:
```
Bash
npm run dev
```

## 🚀 Deployment
* Frontend: Netlify
* Backend: Render
* Database: Supabase (PostgreSQL)

## 🌍 Live Demo
🔗 Frontend: https://luxury-gingersnap-2299d4.netlify.app/  
🔗 Backend API: https://grocery-list-manager-backend.onrender.com/