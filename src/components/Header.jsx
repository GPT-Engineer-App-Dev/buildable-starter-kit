import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">MyApp</Link>
        <nav>
          <Button asChild variant="ghost">
            <Link to="/">Home</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/about">About</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;