# 🕯️ Bougie Store

A modern, elegant e-commerce web application for browsing and purchasing premium clothing related items. Built with React and Express, featuring a beautiful, responsive design with smooth animations and an intuitive user experience.

## ⚠️ Current Limitations

> [!WARNING]
> The following features are **NOT YET IMPLEMENTED**:

- **💳 Payment Processing**: Checkout and payment integration is not implemented
- **🔍 SEO Optimization**: Meta tags, structured data, and SEO best practices need to be added
- **🎯 Favicons**: Custom favicon files are not configured

## 🛠️ Tech Stack

### Frontend
- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.9.6) - Client-side routing
- **Vite** (v7.2.4) - Build tool and dev server
- **Sass** (v1.94.2) - CSS preprocessor
- **Axios** (v1.13.2) - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** (v5.1.0) - Web framework
- **MongoDB** (v7.0.0) - Database
- **Mongoose** (v9.0.0) - ODM for MongoDB
- **CORS** (v2.8.5) - Cross-origin resource sharing

## 📁 Project Structure

```
bougie-store/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Store.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Loader.jsx
│   │   ├── styles/        # SCSS stylesheets
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   └── package.json
│
└── server/                # Backend Express application
    ├── server.js          # Main server file
    └── package.json
