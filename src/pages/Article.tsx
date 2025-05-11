
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import NotFound from "./NotFound";

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { 
    data: article, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => api.getArticleBySlug(slug || ''),
    enabled: !!slug
  });
  
  const { 
    data: relatedArticles, 
    isLoading: isRelatedLoading 
  } = useQuery({
    queryKey: ['related-articles', article?.id],
    queryFn: () => api.getRelatedArticles(article?.id || 0),
    enabled: !!article?.id
  });
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="max-w-3xl mx-auto">
            <div className="w-full h-64 animate-pulse bg-gray-200 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="w-3/4 h-10 animate-pulse bg-gray-200 rounded"></div>
              <div className="w-1/2 h-6 animate-pulse bg-gray-200 rounded"></div>
              <div className="w-full h-40 animate-pulse bg-gray-200 rounded"></div>
              <div className="w-full h-40 animate-pulse bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !article) {
    return <NotFound />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <article className="flex-1">
        {/* Hero Section */}
        <div className="bg-monkey-bg py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-monkey hover:text-monkey-dark"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to all articles
              </Link>
              
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Link
                    to={`/blog?category=${article.category}`}
                    className="inline-block rounded-full bg-monkey-light/10 px-3 py-1 text-xs font-medium text-monkey"
                  >
                    {article.category}
                  </Link>
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{article.author.name}</p>
                      <p className="text-sm text-gray-500">Author</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{article.publishedDate}</p>
                    <p className="text-sm text-gray-500">Published</p>
                  </div>
                  <div>
                    <p className="font-medium">{article.readTime} min</p>
                    <p className="text-sm text-gray-500">Read time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="container mx-auto px-4 md:px-6 -mt-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-12 overflow-hidden rounded-xl shadow-lg">
              <img
                src={article.coverImage}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="article-content">
              {/* Convert markdown-like content to HTML */}
              {article.content.split('\n\n').map((paragraph, index) => {
                // Handle headings
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.slice(3)}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.slice(4)}</h3>;
                }
                
                // Handle lists
                if (paragraph.includes('1. ')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ol key={index} className="list-decimal pl-6 my-4 space-y-2">
                      {items.map((item, i) => {
                        const content = item.replace(/^\d+\.\s/, '');
                        return <li key={i}>{content}</li>;
                      })}
                    </ol>
                  );
                }
                
                // Handle blockquotes
                if (paragraph.startsWith('> ')) {
                  return (
                    <blockquote key={index} className="border-l-4 border-monkey-light pl-4 italic my-6 text-gray-700">
                      {paragraph.slice(2)}
                    </blockquote>
                  );
                }
                
                // Regular paragraph
                return <p key={index} className="mb-6">{paragraph}</p>;
              })}
            </div>
            
            {/* Share & Tags */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Share this article</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?tag=${tag}`}
                        className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="container mx-auto px-4 md:px-6 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-20 w-20 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{article.author.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Content writer and digital enthusiast passionate about technology, design, and storytelling.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      Follow
                    </Button>
                    <Button variant="ghost" size="sm" className="text-monkey">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isRelatedLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-80 animate-pulse bg-gray-200 rounded-xl"></div>
              ))
            ) : relatedArticles?.length === 0 ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600">No related articles found.</p>
              </div>
            ) : (
              relatedArticles?.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))
            )}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-monkey hover:bg-monkey-dark">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Article;
