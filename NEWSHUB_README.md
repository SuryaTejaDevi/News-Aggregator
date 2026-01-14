# NewsHub - News Aggregator

A beautiful, responsive news aggregator web application built with React, featuring a clean newspaper-style design.

## Features

### Core Functionality
- **News Feed**: Display 12 curated news articles with images, titles, descriptions, and metadata
- **Category Filtering**: Filter articles by Technology, Business, Sports, and Health categories
- **Search**: Client-side search functionality to find articles by title, description, or content
- **Article View**: Full article pages with complete content, author attribution, and sharing options
- **Related Articles**: Shows 2 related articles from the same category on article pages
- **Dark/Light Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive Design**: Mobile-first design that works beautifully on all devices

### Design System
- **Typography**: Playfair Display for headings, Inter for body text
- **Color Palette**: Professional news-style colors with semantic tokens (HSL format)
  - Deep blue primary for professional look
  - Category-specific colors (Tech: Blue, Business: Green, Sports: Red, Health: Orange)
- **Components**: Built exclusively with shadcn/ui components
- **Animations**: Smooth transitions and hover effects throughout

## Tech Stack

- **Frontend**: React 19 with React Router
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Notifications**: Sonner for toast notifications

## Project Structure

```
/app/frontend/src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── Header.jsx             # App header with search and theme toggle
│   ├── NewsCard.jsx           # Article card component
│   ├── CategoryFilter.jsx     # Category filter tabs
│   └── SearchBar.jsx          # Search input component
├── pages/
│   ├── Home.jsx               # Homepage with news feed
│   └── ArticleView.jsx        # Individual article page
├── data/
│   └── mockData.js            # Mock news articles data
├── App.js                     # Main app component with routing
├── index.css                  # Design system tokens and global styles
└── index.js                   # App entry point
```

## Getting Started

The application is already running and accessible at `http://localhost:3000`

### Available Features

1. **Homepage**: Browse all 12 news articles in a clean grid layout
2. **Category Filters**: Click on Technology, Business, Sports, or Health to filter articles
3. **Search**: Use the search bar to find articles by keywords
4. **Read Articles**: Click "Read More" on any article to view the full content
5. **Related Articles**: Discover similar articles at the bottom of each article page
6. **Theme Toggle**: Click the moon/sun icon in the header to switch themes
7. **Share Articles**: Use the share button on article pages to share via native share or copy link

## Design Highlights

- **Professional Color System**: Custom HSL color tokens for consistent theming
- **Newspaper-Style Layout**: Clean, readable design inspired by modern news websites
- **Smooth Interactions**: Subtle hover effects and transitions throughout
- **Accessible**: Proper contrast ratios and keyboard navigation support
- **Image-Rich**: High-quality images from Unsplash for visual appeal

## Data

The application uses mock data with 12 diverse news articles covering:
- 3 Technology articles (quantum computing, AI research, renewable energy)
- 3 Business articles (market trends, sustainability, small business)
- 3 Sports articles (championship, mental health, youth programs)
- 3 Health articles (medical breakthroughs, vaccines, personalized nutrition)

All articles include:
- Title and description
- Full content (multiple paragraphs)
- Category, source, and author
- Publication date
- Featured images
- External article URLs (placeholder)

## Future Enhancements (Optional)

- Backend integration for real-time news APIs
- User authentication and saved articles
- Comments and social features
- More advanced filtering (date, source, popularity)
- Bookmarking functionality
- Newsletter subscription
- Article recommendations based on reading history

## Notes

This is a **frontend prototype** using static mock data. All functionality (filtering, search, navigation) works entirely on the client side without backend requirements. The application demonstrates modern React best practices, component architecture, and beautiful UI/UX design principles.
