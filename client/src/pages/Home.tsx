// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MapPin, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Discover Your Perfect
          <span className="text-blue-600 block">Local Experience</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI-powered recommendations for events and activities tailored to your interests, 
          schedule, and location. Never miss out on what matters to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/onboarding"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/events"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Browse Events
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">AI-Powered Recommendations</h3>
          <p className="text-gray-600">
            Our smart algorithm learns your preferences and suggests events you'll actually enjoy.
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Location-Aware</h3>
          <p className="text-gray-600">
            Find amazing events happening right in your neighborhood or wherever you are.
          </p>
        </div>
        
        <div className="text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
          <p className="text-gray-600">
            Integrates with your calendar to suggest events when you're actually free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;