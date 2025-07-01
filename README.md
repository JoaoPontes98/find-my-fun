# Find My Fun 🎉

> AI-powered local event discovery platform with personalized recommendations

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-blue.svg)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.18.2-green.svg)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC.svg)](https://tailwindcss.com/)

## 🚀 Overview

Find My Fun solves "discovery fatigue" by using AI to recommend highly personalized local events based on user preferences, real-time context, and behavioral patterns. The platform learns from user interactions to deliver increasingly accurate suggestions while supporting local event organizers and community engagement.

## ✨ Features

### 🎯 Smart Personalization
- **4-step onboarding flow** capturing interests, schedule, location, and social preferences
- **AI-powered recommendations** using OpenAI embeddings for semantic event matching
- **Behavioral learning** that improves suggestions based on user interactions

### 🎨 Modern User Experience
- **Responsive design** optimized for all devices
- **Interactive preference cards** with smooth animations
- **Real-time search and filtering** with progressive disclosure
- **Clean, intuitive navigation** with professional UI components

### 🔧 Technical Excellence
- **Type-safe development** with TypeScript throughout
- **Modern React patterns** with hooks and state management
- **RESTful API design** with Express.js and middleware
- **Database integration** ready with Prisma ORM

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side navigation
- **React Query** for server state management
- **Zustand** for client state management

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Prisma ORM** with PostgreSQL
- **JWT** authentication
- **OpenAI API** for recommendation engine

### DevOps & Deployment
- **Vercel** (Frontend)
- **Railway/Render** (Backend)
- **Supabase** (Database & Auth)
- **GitHub Actions** (CI/CD)

## 📦 Installation & Setup

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- PostgreSQL database (or Supabase account)

### Clone & Install
```bash
# Clone the repository
git clone https://github.com/yourusername/find-my-fun.git
cd find-my-fun

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Environment Setup
```bash
# Frontend (.env in client directory)
VITE_API_URL=http://localhost:5000/api

# Backend (.env in server directory)
NODE_ENV=development
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_super_secret_jwt_key
OPENAI_API_KEY=your_openai_api_key
```

### Development
```bash
# Start frontend (from client directory)
npm run dev

# Start backend (from server directory)
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 🏗️ Project Structure

```
find-my-fun/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API integration
│   │   └── types/         # TypeScript definitions
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── routes/        # API endpoints
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Custom middleware
│   │   ├── services/      # External integrations
│   │   └── types/         # TypeScript definitions
│   ├── prisma/           # Database schema
│   └── package.json
└── README.md
```

## 🎨 Key User Flows

1. **Landing Page** → Professional homepage with feature highlights
2. **User Onboarding** → 4-step preference collection with progress tracking
3. **Event Discovery** → AI-powered recommendations with advanced filtering
4. **User Dashboard** → Personalized event feed and interaction history

## 🔮 Roadmap

- [ ] User authentication and profiles
- [ ] Event data integration (Eventbrite, Meetup APIs)
- [ ] Advanced recommendation algorithms
- [ ] Social features and event sharing
- [ ] Mobile app development
- [ ] Analytics dashboard for event organizers

## 💼 Portfolio Highlights

This project demonstrates:
- **Full-stack development** with modern JavaScript/TypeScript
- **AI integration** with practical machine learning applications  
- **UX/UI design** with focus on user experience and accessibility
- **Scalable architecture** ready for production deployment
- **Professional development practices** with proper tooling and structure

## 📸 Screenshots

(Coming Soon)

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo:** [Coming Soon]
- **LinkedIn:** (https://www.linkedin.com/in/jo%C3%A3o-pontes-8b8101179/)

---

**Built with ❤️ by Joao Pontes** | *Showcasing modern full-stack development skills*
