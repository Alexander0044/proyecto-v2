# 🎸 CAFUNÉ MERCH & MUSIC HUB 🚀

## About The Project

This project is a dynamic, responsive web application designed to serve as a central hub for an artist (Cafuné), combining a **merchandise store** and a **music/reviews portal**. It demonstrates modern frontend development practices, focusing on client-side logic using pure JavaScript for features like form validation, CRUD operations (for product management), and shopping cart functionality, alongside a mobile-first responsive CSS design.

The entire application state, including product inventory and shopping cart items, is managed using the browser's **Local Storage**.

---

## 🛠️ Key Features

* **100% Responsive Design:** Optimized layouts for mobile, tablet, and desktop viewing, built with `flexbox`, `grid`, and targeted `@media` queries.
* **Client-Side Persistence:** Product Inventory and Shopping Cart data are securely stored using **Local Storage**.
* **Full CRUD Inventory:** Administrative interface for **C**reating, **R**eading, **U**pdating, and **D**eleting merchandise items.
* **Shopping Cart Logic:** Functionality to add products, adjust quantities, and calculate the total purchase.
* **Star Rating & Reviews:** Simple review submission and display system, managed in JavaScript.
* **Modular Codebase:** Clear separation of concerns between CSS, JS validation, and JS core logic.

---

## 🏗️ Project Structure & Files

The project relies on clean separation of concerns across multiple CSS and JavaScript files.

### CSS Stylesheets (Responsive & Modular)

| File | Description | Focus |
| :--- | :--- | :--- |
| `base.css` | General styles for Header, Footer, Artist Bio, Discography, Infography, and Reviews pages. | Full, responsive grid layouts and general aesthetics. |
| `merch.css` | Styles for the Product Listings and the Shopping Cart (`cesta.html`). | Full, includes responsive product grid and mobile cart stacking logic. |
| `form.css` | Styles for the product Management and Review Submission forms. | Full, optimized container and input presentation for all devices. |

### JavaScript Logic (Pure JS & Local Storage)

| File | Description | Core Functionality |
| :--- | :--- | :--- |
| `reviews.js` | Manages the display and submission of customer reviews. | **Session Storage** for reviews, Star Rating System. |
| `validation.js` | Provides a reusable class for client-side form validation. | Validates product fields (e.g., numeric price, integer stock, required fields). |
| `crud.js` | Core business logic for inventory and shopping cart management. | **Product CRUD** and **Cart Logic** using Local Storage. |

---

## 🙏 Acknowledgements

* **Othneil Drew's README Template:** Used as a structural guide for professional documentation.
* **Font Awesome:** For providing the icons used across the application interface.
