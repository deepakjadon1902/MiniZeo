# 🛍️ Velora Cart

> A modern, elegant, and scalable React e-commerce frontend application built with clean architecture, professional UI, and efficient state management.

Velora Cart delivers a seamless product browsing experience with real-time search, detailed product views, and a fully functional shopping cart — designed with performance, scalability, and user experience in mind.

---

## ✨ Features

- 📦 Product listing from live API  
- 🔍 Real-time product search  
- 📄 Dedicated product details page  
- 🛒 Add to cart functionality  
- 🔢 Increase / decrease cart quantity  
- ❌ Remove items from cart  
- ⚡ Fast and responsive UI  
- 🎨 Modern, minimal, and professional design  
- 📱 Fully responsive (Mobile, Tablet, Desktop)  
- 🔄 Global state management using Context API + useReducer  
- ⏳ Loading and error handling  

---

## 🧠 Tech Stack

### Frontend
- React (Latest)
- React Router DOM
- Context API + useReducer
- Tailwind CSS
- Vite

### API
- DummyJSON Products API  
  https://dummyjson.com/products

---

## 🌐 API Endpoints Used

### Get all products

https://dummyjson.com/products


### Get single product

https://dummyjson.com/products/:id


Example:

https://dummyjson.com/products/1


---

## 📁 Project Structure


src/
│
├── components/
│ ├── ProductCard.jsx
│ ├── Navbar.jsx
│ ├── SearchBar.jsx
│ ├── CartItem.jsx
│ ├── Loader.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│
├── context/
│ ├── CartContext.jsx
│
├── services/
│ ├── productService.js
│
├── App.jsx
├── main.jsx


---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/deepakjadon1902/velora-cart.git
2. Navigate to project directory
cd velora-cart
3. Install dependencies
npm install
4. Run development server
npm run dev

Application will run on:

http://localhost:5173
🛒 Cart Functionality

Velora Cart uses Context API with useReducer for global state management.

Supports:

Add product to cart

Increase quantity

Decrease quantity

Remove product

Calculate total items

Calculate total price

Clear cart

🔍 Search Functionality

Real-time filtering

Case-insensitive search

Filters based on product title

Instant UI updates

🎨 UI Design Philosophy

Velora Cart follows modern minimal design principles:

Clean and spacious layout

Professional typography

Consistent color hierarchy

Clear visual feedback

Color strategy:

⚪ White → Clean layout

⚫ Black → Typography

🔵 Blue → Primary actions

🔴 Red → Important indicators

Focus areas:

Clarity

Accessibility

Performance

Professional UI/UX

📱 Responsive Design

Fully optimized for:

📱 Mobile

💻 Tablet

🖥️ Desktop

Built using Tailwind CSS responsive utilities.

⚙️ State Management Architecture

Uses Context API + useReducer for scalable and predictable state.

Supported actions:

ADD_TO_CART
REMOVE_FROM_CART
INCREASE_QUANTITY
DECREASE_QUANTITY
CLEAR_CART

Benefits:

Centralized state

Predictable updates

Scalable architecture

Production-ready pattern

💡 Future Improvements

LocalStorage persistence

Checkout flow

Authentication system

Backend integration

Payment gateway integration (Stripe / PayPal)

Order history

User accounts

👨‍💻 Author

Deepak Jadon
Software & Web Developer

Full Stack Developer (React, Node.js, MongoDB)

Building scalable modern web applications

📜 License

This project is created for learning, portfolio, and demonstration purposes.

⭐ Why Velora Cart?

Velora Cart demonstrates real-world frontend engineering skills:

Modern React architecture

Clean and maintainable code

Professional folder structure

State management best practices

API integration

Scalable UI design

Production-ready foundation

Perfect for:

Portfolio projects

Technical interviews

Production starter template

Learning advanced React patterns

🚀 Live Preview (Optional)

(Add deployed link here)

https://velora-cart.vercel.app
⭐ Support

If you like this project, consider giving it a star ⭐ on GitHub.


---

If you want, I can also create a **GitHub-level premium README with badges, screenshots, and live demo section** that looks like top open-source projects.

