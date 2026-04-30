# SmartCart — AI-Powered E-Commerce Platform

SmartCart is a full-stack eCommerce web application built using the MERN stack. It includes user authentication, product management, secure payments, and AI-based product recommendations, along with a complete admin dashboard.



## Features

* User authentication (JWT + Google login)
* Product browsing and search
* Add to cart and checkout system
* Secure payment integration using Razorpay
* Order placement and tracking
* Admin dashboard for managing products, users, and orders
* Image upload using Cloudinary
* AI-powered product recommendations
* Real-time stock updates
* Fully responsive design (mobile and desktop)

---

## Tech Stack

Frontend:

* React.js
* Redux Toolkit
* Tailwind CSS

Backend:

* Node.js
* Express.js

Database:

* MongoDB (Mongoose)

Authentication:

* JWT
* Google OAuth (Firebase / Google API)

Payments:

* Razorpay

Media Storage:

* Cloudinary

---

## Project Structure

```id="y0x7wd"
smartcart/
│
├── frontend/       # React client
├── backend/        # Express server + APIs
├── admin/          # Admin dashboard
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```id="ps1h4d"
git clone https://github.com/prashantraina54-alt/smartcart.git
cd smartcart
```

---

### 2. Backend setup

```id="wlf2kl"
cd backend
npm install
```

Create a `.env` file inside backend:

```id="b5kzqz"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

Run backend:

```id="n5u2a0"
npm run dev
```

---

### 3. Frontend setup

```id="3k7d5h"
cd frontend
npm install
npm run dev
```

---

### 4. Admin panel setup

```id="9g8k2m"
cd admin
npm install
npm run dev
```

---

## Environment Variables

* MONGO_URI: MongoDB connection string
* JWT_SECRET: Authentication secret
* CLOUDINARY credentials: Image upload
* RAZORPAY keys: Payment integration

---

## Key Functionalities

* Full eCommerce flow (browse → cart → checkout → order)
* Secure authentication and protected routes
* Admin control over products and orders
* Payment gateway integration
* AI-based recommendation system

---

## Future Improvements

* Order history analytics dashboard
* Wishlist functionality
* Reviews and ratings system
* Email notifications
* Advanced recommendation engine

---

## Author

Prashant Kumar

---

## Note

This project is built as a full-stack learning project and can be extended for production use.
