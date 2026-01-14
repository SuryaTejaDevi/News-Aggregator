import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, ExternalLink, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { newsArticles } from '../data/mockData';
import { toast } from 'sonner';

const getCategoryColor = (category) => {
  const colors = {
    Technology: 'bg-[hsl(var(--category-tech))] text-white hover:bg-[hsl(var(--category-tech))]/90',
    Business: 'bg-[hsl(var(--category-business))] text-white hover:bg-[hsl(var(--category-business))]/90',
    Sports: 'bg-[hsl(var(--category-sports))] text-white hover:bg-[hsl(var(--category-sports))]/90',
    Health: 'bg-[hsl(var(--category-health))] text-white hover:bg-[hsl(var(--category-health))]/90',
  };
  return colors[category] || 'bg-primary text-primary-foreground hover:bg-primary/90';
};

export default function ArticleView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = newsArticles.find(a => a.id === parseInt(id));

  // Scroll to top when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <Button onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="mb-6 -ml-2"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Articles
      </Button>

      {/* Article Card */}
      <Card className="overflow-hidden shadow-medium">
        {/* Featured Image */}
        {article.imageUrl && (
          <div className="aspect-[21/9] w-full overflow-hidden bg-muted">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <CardContent className="p-6 sm:p-8 lg:p-12">
          {/* Category and Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className={getCategoryColor(article.category)}>
              {article.category}
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground gap-1">
              <Clock className="h-4 w-4" />
              <span>{article.publishedDate}</span>
            </div>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm font-medium text-foreground">
              {article.source}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {article.description}
          </p>

          <Separator className="my-8" />

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <Button
              className="gap-2"
              onClick={() => window.open(article.originalUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              Read Original Article
            </Button>
            <Button variant="outline" className="gap-2" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
              Share Article
            </Button>
          </div>

          {/* Author Attribution */}
          {article.author && (
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                By <span className="font-medium text-foreground">{article.author}</span>
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Related Articles Section */}
      {newsArticles.filter(a => a.category === article.category && a.id !== article.id).length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {newsArticles
              .filter(a => a.category === article.category && a.id !== article.id)
              .slice(0, 2)
              .map(relatedArticle => (
                <Card
                  key={relatedArticle.id}
                  className="cursor-pointer hover:shadow-medium transition-smooth"
                  onClick={() => navigate(`/article/${relatedArticle.id}`)}
                >
                  <CardContent className="p-4">
                    <Badge className={getCategoryColor(relatedArticle.category) + ' mb-2'}>
                      {relatedArticle.category}
                    </Badge>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedArticle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}