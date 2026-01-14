import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Moon, Sun, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const Header = ({ theme, toggleTheme }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-smooth">
            <Newspaper className="h-6 w-6 text-accent" />
            <h1 className="text-xl font-semibold tracking-tight">NewsHub</h1>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search Toggle for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-muted transition-smooth"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="pb-4 md:hidden">
            <Input
              type="search"
              placeholder="Search articles..."
              className="w-full"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;