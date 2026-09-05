# Dripenomics E-Commerce Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://dripenomics-cash-flow1.pages.dev/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge)](https://github.com/str8exotixx-source/dripenomics-ecommerce-website)

**DRIPENOMICS — Live. Breathe. Dress For It.** 

A modern, full-stack e-commerce web application built for seamless fashion retail and dynamic cash-flow tracking. This platform delivers a high-performance shopping experience with a robust, cloud-powered architecture.

---

## 🚀 Tech Stack

*   **Frontend Framework:** React (TypeScript)
*   **Build Tool & Dev Server:** Vite
*   **Styling:** Tailwind CSS (configured with `tailwind.config.ts` and `postcss.config.js`)
*   **Database & Authentication:** Supabase (Backend-as-a-Service)
*   **Linting:** ESLint

---

## 📁 Repository Structure

```text
├── public/              # Static assets (images, icons, favicon)
├── src/                 # Application source code (components, hooks, pages, state)
├── supabase/            # Supabase database migrations, configuration, and schemas
├── .env                 # Environment variables configuration file
├── components.json     # Component UI layout configuration
├── index.html           # Main HTML entry point
├── package.json         # Project dependencies and available scripts
├── tailwind.config.ts   # Custom Tailwind CSS theme configurations
├── tsconfig.json        # TypeScript compiler options
└── vite.config.ts       # Vite bundler configurations
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/str8exotixx-source/dripenomics-ecommerce-website.git
   cd dripenomics-ecommerce-website
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and configure your local environment or Supabase API keys:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anonymous_key
   ```

4. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the local port specified by Vite) to view the application.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

The application is configured for modern edge deployment. The production live site is hosted and available at:
👉 **[dripenomics-cash-flow1.pages.dev](https://dripenomics-cash-flow1.pages.dev/)**

---

## 📄 License

This project is open-source. Contact me for specific licensing policies.
