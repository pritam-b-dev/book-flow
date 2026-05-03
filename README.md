# 📚 BookFlow

A seamless and modern online book borrowing platform that digitizes the traditional library experience.

## 🔗 Live URL

[https://book-flow-beta.vercel.app](https://book-flow-beta.vercel.app)

## 🎯 Purpose

BookFlow allows users to explore a vast collection of books, filter by categories, and borrow titles digitally. The platform prioritizes security and performance using BetterAuth for authentication and MongoDB for user data management.

## ✨ Key Features

- 🔐 **User Authentication** — Email/password and Google OAuth login via BetterAuth
- 📖 **Browse Books** — Explore all 12 books with title, author, and cover image
- 🗂️ **Category Filter** — Filter books by Story, Tech, or Science category
- 🔍 **Search** — Search books by title in real time
- 📄 **Book Details** — View detailed information about each book (private route)
- 👤 **My Profile** — View and update user name and profile picture (private route)
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🎨 **Animations** — Smooth animations with Animate.css

## 🛠️ Tech Stack

- **Next.js** — React framework with App Router
- **BetterAuth** — Authentication (Email + Google OAuth)
- **MongoDB** — Database for user data
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library

## 📦 NPM Packages Used

| Package              | Purpose                        |
| -------------------- | ------------------------------ |
| `better-auth`        | Authentication system          |
| `mongodb`            | Database connection            |
| `animate.css`        | CSS animations                 |
| `react-fast-marquee` | Scrolling marquee on home page |
| `react-hook-form`    | Form validation                |
| `react-toastify`     | Toast notifications            |
| `react-icons`        | Icons                          |

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/pritam-b-dev/book-flow.git
cd book-flow
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
