
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { api } from "@/services/api";
import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { data: featuredArticles, isLoading: isFeaturedLoading } = useQuery({
    queryKey: ['articles', 'featured'],
    queryFn: async () => {
      const result = await api.getArticles({ limit: 1 });
      return result.articles;
    }
  });

  const { data: recentArticles, isLoading: isRecentLoading } = useQuery({
    queryKey: ['articles', 'recent'],
    queryFn: async () => {
      const result = await api.getArticles({ limit: 3 });
      return result.articles.slice(1, 4); // Skip the first one as it's used for featured
    }
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-monkey-bg to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Explore the Digital Jungle with <span className="text-monkey">CraftyApe</span>
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

      {/* Featured Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Article</h2>
              <p className="text-gray-600">Our top pick for you to read today.</p>
            </div>
          </div>
          
          <div className="grid gap-6">
            {isFeaturedLoading ? (
              <div className="col-span-full h-96 animate-pulse bg-gray-200 rounded-xl"></div>
            ) : (
              featuredArticles && featuredArticles.length > 0 && (
                <ArticleCard article={featuredArticles[0]} featured />
              )
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
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <Link
                  key={category.name}
                  to={`/blog?category=${category.name}`}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-monkey-light/10 transition-colors border border-gray-200"
                >
                  <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} articles</p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-monkey-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-2xl bg-monkey p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                  Stay in the loop
                </h2>
                <p className="text-monkey-light text-lg">
                  Subscribe to our newsletter to get the latest updates, articles, and resources directly in your inbox.
                </p>
              </div>
              <div className="flex items-center">
                <form className="w-full space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-md border border-monkey-light/30 bg-white/10 text-white placeholder:text-monkey-light/70 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <Button className="w-full bg-white text-monkey hover:bg-gray-100">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
