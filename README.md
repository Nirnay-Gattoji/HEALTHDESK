
# HEALTHDESK – Frontend Application (React + Vite)

The HealthDesk project is a fully responsive frontend application built using React and Vite. It represents a modern health and wellness website with structured sections, reusable components, organized assets, and a clean UI. The project focuses on performance, modular component architecture, and maintainable code.

## Features

## 1. Responsive Hero Banner

A clean introductory section with a heading, description, a call-to-action button, and a supporting banner image.

### 2. Categories Section

Displays five health-related categories using individual cards. Each card includes an icon, title, description, and a button.

### 3. Best Sellers

A section that showcases the top health supplement products. Includes images, product names, ratings, and reusable card components.

### 4. Commitment / Feature Section

Contains three informational blocks that explain natural components, research-backed formulations, and eco-conscious manufacturing. The layout alternates between image-left and image-right for visual clarity.

### 5. Customer Testimonials

Displays verified customer reviews with product images, rating, review content, and reviewer details.

### 6. Footer and Social Media Section

A simple footer with branding and social media icons.

## Folder Structure Overview

```
src/
 ├─ assets/
 │   ├─ Banner/
 │   ├─ Carousel/
 │   ├─ Commitment/
 │   ├─ products/
 │   └─ Review/
 ├─ components/
 │   ├─ Header/
 │   │   └─ Navbar/
 │   ├─ Main/
 │   │   ├─ Banner/
 │   │   ├─ Carousel/
 │   │   ├─ BestSeller/
 │   │   ├─ Feature/
 │   │   ├─ Review/
 │   │   └─ Social/
 │   └─ Footer/
 ├─ App.jsx
 └─ main.jsx
```

## Key Highlights

Component-based architecture for better reusability. All images stored locally and imported from the assets directory. Custom CSS using Flexbox and Grid for layout. Clean and readable JSX. Consistent naming conventions. Section containers used for alignment and spacing. Mapping used to dynamically render categories, products, and reviews.

## Tech Stack

React
Vite
JavaScript (ES6)
CSS
Bootstrap
ESLint

## Getting Started

Clone the repository:

```
git clone https://github.com/Nirnay-Gattoji/HEALTHDESK.git
cd HEALTHDESK
```

Install project dependencies:

```
npm install
```

Run the project in development mode:

```
npm run dev
```

Build the project for production:

```
npm run build
```

Preview the production build:

```
npm run preview
```

## Author

Nirnay Gattoji
Frontend Developer
