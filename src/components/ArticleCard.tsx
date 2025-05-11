
import { Link } from "react-router-dom";
import { Article } from "@/services/api";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  return (
    <div 
      className={`group overflow-hidden rounded-xl bg-white border border-gray-200 card-hover ${
        featured ? 'col-span-full md:grid md:grid-cols-2 gap-4' : ''
      }`}
    >
      <div className={`overflow-hidden ${featured ? 'h-full max-h-[400px]' : 'h-48'}`}>
        <Link to={`/blog/${article.slug}`}>
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block rounded-full bg-monkey-light/10 px-3 py-1 text-xs font-medium text-monkey">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">
            {article.readTime} min read
          </span>
        </div>
        <Link to={`/blog/${article.slug}`}>
          <h3 className={`mb-2 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold transition-colors hover:text-monkey`}>
            {article.title}
          </h3>
        </Link>
        <p className="mb-4 text-gray-600 line-clamp-3">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium">{article.author.name}</span>
          </div>
          <span className="text-sm text-gray-500">{article.publishedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
