import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const getCategoryColor = (category) => {
  const colors = {
    Technology: 'bg-[hsl(var(--category-tech))] text-white hover:bg-[hsl(var(--category-tech))]/90',
    Business: 'bg-[hsl(var(--category-business))] text-white hover:bg-[hsl(var(--category-business))]/90',
    Sports: 'bg-[hsl(var(--category-sports))] text-white hover:bg-[hsl(var(--category-sports))]/90',
    Health: 'bg-[hsl(var(--category-health))] text-white hover:bg-[hsl(var(--category-health))]/90',
  };
  return colors[category] || 'bg-primary text-primary-foreground';
};

export const NewsCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <Card className="group h-full flex flex-col hover:shadow-medium transition-smooth cursor-pointer overflow-hidden border-border">
      {article.imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <CardHeader className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Badge className={getCategoryColor(article.category)}>
            {article.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground gap-1">
            <Clock className="h-3 w-3" />
            <span>{article.publishedDate}</span>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight group-hover:text-accent transition-smooth">
          {article.title}
        </CardTitle>
        
        <CardDescription className="mt-2 line-clamp-3">
          {article.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 mt-auto">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            {article.source}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 hover:gap-2 transition-all"
            onClick={() => navigate(`/article/${article.id}`)}
          >
            Read More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;