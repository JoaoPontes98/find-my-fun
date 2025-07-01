// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';
import { MapPin, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Find My Fun</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/events" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Events
            </Link>
            <Link 
              to="/onboarding" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Preferences
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;