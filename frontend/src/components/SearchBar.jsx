import React from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search articles by title or description..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 h-12 bg-card shadow-subtle transition-smooth focus:shadow-medium"
      />
    </div>
  );
};

export default SearchBar;