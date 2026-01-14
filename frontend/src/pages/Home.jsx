import React, { useState, useEffect } from 'react';
import NewsCard from '../components/NewsCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { newsArticles } from '../data/mockData';
import { Newspaper } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(newsArticles);

  useEffect(() => {
    let results = newsArticles;

    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        article =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query) ||
          article.content.toLowerCase().includes(query)
      );
    }

    setFilteredArticles(results);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          Stay Informed, Stay Ahead
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your daily dose of curated news from trusted sources around the world
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8 max-w-3xl mx-auto">
        <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
        </p>
      </div>

      {/* News Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Newspaper className="h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground max-w-md">
            Try adjusting your search or category filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}