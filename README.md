# SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare products, beach accessories, and more.

Built with **Next.js**, **Tailwind CSS**, **HeroUI**, **Better Auth**, **Animate.css**, and **MongoDB**.

---

# 🔗 Live Website

```bash
https://sun-cart-summer-store.vercel.app/
```

---

# 📂 GitHub Repository

```bash
https://github.com/Palash-4/SunCart-SummerStore
```

---

# 🚀 Features

## 🏠 Home Page

* Modern responsive navbar
* Summer-themed hero/banner section
* Popular products section
* Summer Care Tips section
* Top Brands section
* Responsive footer with quick links

## 🛍 Product Features

* Dynamic product cards
* Product details page
* Category badge/chip
* Rating and pricing system
* Responsive product layout

## 🔐 Authentication Features

* Email & Password Registration
* Email & Password Login
* Google Authentication
* Protected Profile Route
* Session Management with Better Auth
* Toast Notifications

## 👤 User Profile

* User avatar display
* User name and email
* Responsive profile card
* Protected profile page

## 📱 Responsive Design

* Mobile responsive navbar
* Responsive product grid
* Responsive authentication pages
* Responsive footer
* Optimized for desktop, tablet, and mobile devices

## ✨ Animation

* Animate.css integrated
* Smooth section animation effects

---

# 🧰 Technologies Used

## Frontend

* Next.js 15
* React
* Tailwind CSS
* HeroUI
* React Icons
* Sonner Toast
* Animate.css

## Authentication

* Better Auth
* Google OAuth

## Backend & Database

* MongoDB Atlas

---

# 📦 NPM Packages Used

```bash
npm install @heroui/react
npm install better-auth
npm install mongodb
npm install react-icons
npm install sonner
npm install @gravity-ui/icons
npm install animate.css
```

---

# ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:3000

MONGODB_URI=your_mongodb_uri

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

# 🖥️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Palash-4/SunCart-SummerStore.git
```

## 2️⃣ Move into the Project Folder

```bash
cd SunCart-SummerStore
```

## 3️⃣ Install Dependencies

```bash
npm install
```

## 4️⃣ Run Development Server

```bash
npm run dev
```

---

# 📁 Folder Structure

```bash
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js
│   │
│   ├── login/
│   │   └── page.jsx
│   │
│   ├── register/
│   │   └── page.jsx
│   │
│   ├── products/
│   │   ├── [id]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   │
│   ├── profile/
│   │   └── page.jsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── Banner.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Popular.jsx
│   ├── ProductCard.jsx
│   ├── SummerCareTips.jsx
│   ├── TopBrands.jsx
│   └── updateProfile.jsx
│
├── lib/
│   ├── auth.js
│   └── auth-client.js
│
├── proxy.js
│
public/
├── logo.jpg
├── img/
└── product.json
```

---

# 🔒 Authentication System

This project uses **Better Auth** for:

* Email/Password Authentication
* Google Login
* Session Handling
* Protected Routes

---

# 🎯 Project Objective

The goal of this project is to create a modern, responsive, and user-friendly summer eCommerce platform where users can browse products, authenticate securely, and view product details easily.

---

# 👨‍💻 Developer

**Name:** Hasan Al Tarek Palash

**Email:** hasanaltarekpalash@gmail.com

---

# 📜 License

This project is created for educational purposes.