import { Link } from "react-router-dom";
import { Article } from "@/services/api";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <div
      className={`group overflow-hidden rounded-xl bg-white border border-gray-200 transition-shadow duration-300 hover:shadow-lg ${
        featured 
          ? 'col-span-full md:grid md:grid-cols-2 md:gap-4' 
          : 'flex flex-col h-full'
      }`}
    >
      <div 
        className={`overflow-hidden relative ${
          featured 
            ? 'h-64 sm:h-72 md:h-full md:max-h-[450px]' 
            : 'h-40 sm:h-48'
        }`}
      >
        <Link to={`/blog/${article.slug}`} className="block h-full w-full">
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
      </div>
      
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-block rounded-full bg-monkey-light/10 px-3 py-1 text-xs font-medium text-monkey">
            {article.category}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 flex items-center">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>
            {article.readTime} min read
          </span>
        </div>
        
        <Link to={`/blog/${article.slug}`} className="group-hover:underline-offset-2">
          <h3 
            className={`mb-2 font-bold transition-colors group-hover:text-monkey ${
              featured 
                ? 'text-xl sm:text-2xl md:text-3xl' 
                : 'text-lg sm:text-xl'
            }`}
          >
            {article.title}
          </h3>
        </Link>
        
        <p className={`mb-4 text-gray-600 line-clamp-3 ${featured ? 'sm:line-clamp-4' : ''}`}>
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
         
          <span className="text-xs sm:text-sm text-gray-500">{article.publishedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;