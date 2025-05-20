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

  // Get 2 featured articles
  const { data: featuredArticles, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['articles', 'featured'],
    queryFn: async () => {
      const result = await api.getArticles({ limit: 2 });
      return result.articles;
    }
  });

  // Get the latest 2025 articles
  const { data: latestArticlesFrom2025, isLoading: is2025Loading } = useQuery({
    queryKey: ['articles', '2025'],
    queryFn: async () => {
      // In a real app, we would filter by year 2025
      const result = await api.getArticles({ year: "2025", limit: 3 });
      return result.articles;
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
  
  // Function to navigate to blog with 2025 filter
  const handleView2025Articles = () => {
    navigate('/blog?year=2025');
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

      {/* Featured Articles Section - Shows 2 articles */}
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

      {/* Latest Articles from 2025 Section */}
      <section className="py-16 bg-monkey-bg/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Latest from 2025</h2>
              <p className="text-gray-600">Fresh content exploring the cutting edge of technology.</p>
            </div>
            <Button 
              asChild 
              className="bg-monkey hover:bg-monkey-dark text-white"
              onClick={handleView2025Articles}
            >
              <Link to="/blog?year=2025">Browse All 2025 Articles</Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {is2025Loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : (
              latestArticlesFrom2025?.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* View All Articles Button Section */}
      <section className="py-12 bg-gray-50 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <Button asChild className="bg-monkey hover:bg-monkey-dark text-white px-8 py-6 text-lg">
            <Link to="/blog">View All Articles</Link>
          </Button>
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
