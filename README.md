# Next.js MongoDB Person Directory

## Overview
**Next.js MongoDB Person Directory** is a full-stack web application built with **Next.js (App Router)** and **MongoDB**. It demonstrates server-side data fetching, dynamic routing, and integration with a NoSQL database.

The app allows users to view a list of people stored in MongoDB and add new entries via a simple form. It leverages Next.js API routes for backend logic, all within a single project.

## Why this project exists
This project was created to:
- Showcase full-stack development skills using **Next.js** and **MongoDB**.
- Demonstrate server-side rendering (SSR) and incremental static regeneration (ISR) with the **App Router**.
- Implement basic CRUD operations with a NoSQL database.

## Features
- **List Persons** — Displays all person entries retrieved from MongoDB.
- **Add New Person** — Submit a form to create a new entry in the database.
- **API Integration** — Uses Next.js API routes for backend logic.
- **Server-Side Rendering & Revalidation** — Keeps the person list fresh without manual reloads.
- **Modular Routing** — Built with the Next.js App Router (`/app` directory).

> Key modules:
> - `app/entries/page.js` — Lists persons from the API.
> - `app/new/page.js` — Form to add a new person (client component).
> - `app/api/route.js` — API route handling GET/POST requests to MongoDB.

## Quick start (clone & run)
```bash
# 1) Clone the repository
git clone <https://github.com/DennisNHanrieder/onm7.git>
cd onm7-main/onm7-main

# 2) Install dependencies
npm install

# 3) Set environment variables
# Create a .env.local file in the root and add your MongoDB URI:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority

# 4) Start the development server
npm run dev
```

## Dependencies & setup
- **Core tech stack:** Node.js (v18+), Next.js 13+, React, MongoDB.
- **Package manager:** npm.
- **Recommended:** Use `nvm` or `asdf` to ensure Node version compatibility.

### Direct dependencies
- `next` — React framework for full-stack apps.
- `react` — Component-based UI library.
- `react-dom` — DOM rendering for React components.
- `mongodb` — Official MongoDB driver.

## Common scripts
- **Install:** `npm install`
- **Development:** `npm run dev`
- **Build (production):** `npm run build`
- **Start production server:** `npm run start`
- **Lint code:** `npm run lint`

## How to run tests
No tests are configured. Suggested setup:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
# Add to package.json:
# "test": "vitest"
npm test
```

## How to contribute
1. Fork the repository and create a feature branch.
2. Follow existing code patterns and folder structure.
3. Document new features and add necessary API documentation.
4. Open a pull request describing your changes.

## What powers the core functionality?
- **Next.js App Router** — File-based routing, server components, and API routes.
- **MongoDB** — NoSQL database for storing person entries.
- **React** — Component-based UI development.
- **Node.js** — Backend runtime for API routes.
