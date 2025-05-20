import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useLocation } from "react-router-dom";
import api from "@/services/api";
import ArticleCard from "@/components/ArticleCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const pageSize = 9;
  
  const categoryParam = searchParams.get("category") || "";
  const tagParam = searchParams.get("tag") || "";
  const searchParam = searchParams.get("search") || "";
  const yearParam = searchParams.get("year") || "";

  useEffect(() => {
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryParam, tagParam, searchParam, yearParam]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const { data: articlesData, isLoading: isArticlesLoading } = useQuery({
    queryKey: ['articles', { page: currentPage, category: categoryParam, tag: tagParam, search: searchParam, year: yearParam }],
    queryFn: () => api.getArticles({ 
      page: currentPage, 
      limit: pageSize,
      category: categoryParam,
      tag: tagParam,
      search: searchParam,
      year: yearParam
    })
  });

  const { data: categories, isLoading: isCategoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: api.getCategories
  });

  const { data: tags, isLoading: isTagsLoading } = useQuery({
    queryKey: ['tags'],
    queryFn: () => api.getTags(15)
  });
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const setFilter = (type: 'category' | 'tag' | 'year', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if ((type === 'category' && categoryParam === value) || 
        (type === 'tag' && tagParam === value) || 
        (type === 'year' && yearParam === value)) {
      newParams.delete(type);
    } else {
      newParams.set(type, value);
      // Reset other filters when selecting a new one
      if (type === 'category') {
        newParams.delete('tag');
        newParams.delete('year');
      }
      if (type === 'tag') {
        newParams.delete('category');
        newParams.delete('year');
      }
      if (type === 'year') {
        newParams.delete('category');
        newParams.delete('tag');
      }
    }
    setSearchParams(newParams);
    setCurrentPage(1);
  };
  
  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="bg-white py-12 md:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          {searchParam && (
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl font-semibold">
                Search results for: "{searchParam}"
              </h2>
              <p className="text-gray-600 mt-2">
                {articlesData?.articles.length} articles found
              </p>
            </div>
          )}
          
          {!searchParam && (
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
              <p className="text-xl text-gray-600">Explore our collection of articles, guides, and insights</p>
            </div>
          )}
        </div>
      </section>
      
      <div className="container mx-auto px-4 md:px-6 py-6 text-center text-sm text-gray-600">
        "Traffic to this site originates from social media campaigns. Specific URL criteria must be met in order to display search ads."
      </div>
      
      <section className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {(categoryParam || tagParam || searchParam || yearParam) && (
                <div className="flex items-center gap-2 mb-2 md:mb-0 mr-2">
                  <span className="text-sm font-medium">Active filters:</span>
                  <Button variant="outline" size="sm" className="h-8" onClick={clearFilters}>
                    Clear all
                  </Button>
                </div>
              )}
              
              {categoryParam && (
                <div className="inline-flex items-center gap-1 rounded-full border border-monkey px-3 py-1 text-sm">
                  <span>Category: {categoryParam}</span>
                  <button 
                    onClick={() => setFilter('category', categoryParam)} 
                    className="ml-1 rounded-full bg-monkey-light/10 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {tagParam && (
                <div className="inline-flex items-center gap-1 rounded-full border border-monkey px-3 py-1 text-sm">
                  <span>Tag: {tagParam}</span>
                  <button 
                    onClick={() => setFilter('tag', tagParam)} 
                    className="ml-1 rounded-full bg-monkey-light/10 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {yearParam && (
                <div className="inline-flex items-center gap-1 rounded-full border border-monkey px-3 py-1 text-sm">
                  <span>Year: {yearParam}</span>
                  <button 
                    onClick={() => setFilter('year', yearParam)} 
                    className="ml-1 rounded-full bg-monkey-light/10 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
              
              {searchParam && (
                <div className="inline-flex items-center gap-1 rounded-full border border-monkey px-3 py-1 text-sm">
                  <span>Search: "{searchParam}"</span>
                  <button 
                    onClick={() => {
                      const newParams = new URLSearchParams(searchParams);
                      newParams.delete('search');
                      setSearchParams(newParams);
                    }} 
                    className="ml-1 rounded-full bg-monkey-light/10 p-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            
            {/* Year filter for 2025 */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Year</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('year', '2025')}
                  className={`rounded-full px-4 py-1 text-sm font-medium transition-colors
                    ${yearParam === '2025' ? 'bg-monkey text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  2025
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-semibold">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {isCategoriesLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-8 w-24 animate-pulse bg-gray-200 rounded-full"></div>
                  ))
                ) : (
                  categories?.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setFilter('category', category.name)}
                      className={`rounded-full px-4 py-1 text-sm font-medium transition-colors
                        ${categoryParam === category.name ? 'bg-monkey text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {category.name} ({category.count})
                    </button>
                  ))
                )}
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 text-lg font-semibold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {isTagsLoading ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-8 w-16 animate-pulse bg-gray-200 rounded-full"></div>
                  ))
                ) : (
                  tags?.map((tag) => (
                    <button
                      key={tag.name}
                      onClick={() => setFilter('tag', tag.name)}
                      className={`rounded-full px-4 py-1 text-sm font-medium transition-colors
                        ${tagParam === tag.name ? 'bg-ocean text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}
                    >
                      {tag.name}
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isArticlesLoading ? (
              Array.from({ length: pageSize }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : articlesData?.articles.length === 0 ? (
              <div className="col-span-full py-12 text-center">
                <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria.</p>
                <Button onClick={clearFilters}>Clear all filters</Button>
              </div>
            ) : (
              articlesData?.articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
          
          {articlesData && articlesData.totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="h-9 w-9"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </Button>
                
                {Array.from({ length: articlesData.totalPages }).map((_, i) => {
                  const page = i + 1;
                  const showPage =
                    page <= 3 ||
                    page > articlesData.totalPages - 3 ||
                    Math.abs(page - currentPage) <= 1;
                  
                  if (!showPage) {
                    if (page === 4 || page === articlesData.totalPages - 3) {
                      return <span key={page} className="flex h-9 w-9 items-center justify-center">…</span>;
                    }
                    return null;
                  }
                  
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => handlePageChange(page)}
                      className={`h-9 w-9 ${currentPage === page ? "bg-monkey hover:bg-monkey-dark" : ""}`}
                    >
                      {page}
                    </Button>
                  );
                })}
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === articlesData.totalPages}
                  className="h-9 w-9"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;