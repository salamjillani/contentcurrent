import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "@/services/api";
import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Get 2 featured articles instead of 1
  const { data: featuredArticles, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['articles', 'featured'],
    queryFn: async () => {
      const result = await api.getArticles({ limit: 2 });
      return result.articles;
    }
  });

  // Get 3 recent articles, skipping the featured ones
  const { data: recentArticles, isLoading: isRecentLoading } = useQuery({
    queryKey: ['articles', 'recent'],
    queryFn: async () => {
      const result = await api.getArticles({ limit: 5 });
      return result.articles.slice(2, 5); // Skip the first two as they're used for featured
    }
  });

  // NEW: Get the latest 2025 articles (assuming current year is 2025)
  const { data: latestArticles, isLoading: isLatestLoading } = useQuery({
    queryKey: ['articles', '2025'],
    queryFn: async () => {
      // This would normally filter by date, but for our mock we'll just get more recent articles
      const result = await api.getArticles({ limit: 3 });
      // Get different articles than featured and recent
      return result.articles.slice(5, 8);
    }
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories
  });

  // Function to handle navigation with scroll to top
  const handleCategoryClick = (categoryName) => {
    navigate(`/blog?category=${categoryName}`);
    // This will trigger the scroll to top effect via the Blog component's useEffect
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-monkey-bg to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Explore the Digital Articles with <span className="text-monkey">The Content Current</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 md:text-2xl">
              Discover insightful articles, guides, and stories about technology, design, and digital culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-monkey hover:bg-monkey-dark text-white px-8 py-6 text-lg">
                <Link to="/blog">Explore Articles</Link>
              </Button>
              <Button asChild variant="outline" className="border-monkey text-monkey hover:bg-monkey-light/10 px-8 py-6 text-lg">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section - Now shows 2 articles */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
              <p className="text-gray-600">Our top picks for you to read today.</p>
            </div>
            <Button asChild variant="outline" className="border-monkey text-monkey hover:bg-monkey-light/10">
              <Link to="/blog">View All</Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {isFeaturedLoading ? (
              Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="h-96 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : (
              featuredArticles && featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))
            )}
          </div>
        </div>
      </section>

      {/* NEW: Latest Articles from 2025 Section */}
      <section className="py-16 bg-monkey-bg/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Latest from 2025</h2>
              <p className="text-gray-600">Fresh content exploring the cutting edge of technology.</p>
            </div>
            <Button asChild className="bg-monkey hover:bg-monkey-dark text-white">
              <Link to="/blog">Browse All 2025 Articles</Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {isLatestLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : (
              latestArticles?.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Recent Articles</h2>
              <p className="text-gray-600">Check out our latest content.</p>
            </div>
            <Button asChild variant="outline" className="border-monkey text-monkey hover:bg-monkey-light/10">
              <Link to="/blog">View All</Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {isRecentLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : (
              recentArticles?.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our content organized by topics to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {isCategoriesLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-24 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : (
              categories?.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-monkey-light/10 transition-colors border border-gray-200"
                >
                  <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} articles</p>
                </button>
              ))
            )}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
