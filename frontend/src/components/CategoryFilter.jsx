import React from 'react';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

export const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Technology', 'Business', 'Sports', 'Health'];

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden md:block">
        <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="w-full">
          <TabsList className="grid w-full grid-cols-5 h-12">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm font-medium data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-smooth"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className="whitespace-nowrap transition-smooth"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;