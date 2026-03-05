# 🛒FreshTrack – Smart Grocery & Pantry Manager

### **Project Title:** FreshTrack  

---

##  Project Description
FreshTrack is a full-stack web application that helps users manage their groceries, pantry inventory, and discover recipes based on available ingredients.

Users can create grocery lists, track pantry items, monitor expiry dates, and get recipe suggestions using ingredients they already have. The application includes secure authentication and a responsive dashboard for easy household management.

The frontend is built with React and communicates with a Node.js/Express backend connected to a Supabase PostgreSQL database.

---

## ✨ Features
* **User Authentication:** Secure Signup and Login using JWT (JSON Web Tokens).
* **Real-time Grocery Management:** Add, update, and delete items from your shopping list with instant UI updates.
* **Pantry Inventory:** View available ingredients and track expiry dates.
* **Recipe Suggestions:** Custom matching algorithm compares pantry ingredients against stored recipes and highlights missing items.
* **Protected Routes:** React Context API ensures only logged-in users can access the dashboard.
* **Smooth UI Animations:** Implemented using Framer Motion.
* **Responsive UI:** Fully optimized for mobile and desktop using **Tailwind CSS** and **ShadCN UI**.

---

## 🛠 Tech Stack Used
* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Components:** ShadCN UI & Lucide React (Icons)
* **Animations:** Framer Motion
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