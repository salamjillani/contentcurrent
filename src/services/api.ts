
// This is a mock API service that simulates fetching data from an external API

// Types for our blog data
export interface Author {
  id: number;
  name: string;
  avatar: string;
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: Author;
  publishedDate: string;
  readTime: number;
  tags: string[];
}

// Simulate API endpoints
const MOCK_AUTHORS: Author[] = [
  {
    id: 1,
    name: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Alex Morgan",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Robert Chen",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

// Generate 20 blog posts
const generateMockArticles = (): Article[] => {
  const categories = ["Technology", "Design", "Business", "Lifestyle", "Travel"];
  const tags = [
    "Web Development", "UI/UX", "JavaScript", "React", "Node.js",
    "CSS", "Product Design", "Startup", "Marketing", "Innovation",
    "Remote Work", "Productivity", "Health", "Mindfulness", "Adventure",
    "Photography", "Food", "Fashion", "Sustainability", "Finance"
  ];
  
  // Sample content for articles
  const contentSamples = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisi vel consectetur interdum, nisl nunc ultricies nisi, euismod consectetur nisi vel consectetur interdum, nisl nunc ultricies nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisi vel consectetur interdum, nisl nunc ultricies nisi, euismod consectetur nisi vel consectetur interdum, nisl nunc ultricies nisi.\n\n## Heading 2\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisi vel consectetur interdum, nisl nunc ultricies nisi, euismod consectetur nisi vel consectetur interdum, nisl nunc ultricies nisi.\n\n### Heading 3\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisi vel consectetur interdum, nisl nunc ultricies nisi, euismod consectetur nisi vel consectetur interdum, nisl nunc ultricies nisi.",
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.\n\n## Main Points\n\n1. First important concept\n2. Second crucial idea\n3. Final thought on the matter\n\nVivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
    "Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n\n> This is a blockquote. It represents a quote or excerpt that stands out from the regular text.\n\nCras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus."
  ];
  
  // Sample titles
  const titlePrefixes = [
    "The Ultimate Guide to", 
    "10 Ways to Improve Your", 
    "Why You Should Consider", 
    "How to Master", 
    "The Future of",
    "Understanding",
    "Exploring",
    "A Beginner's Guide to",
    "Advanced Techniques for",
    "The Evolution of"
  ];
  
  const titleSuffixes = [
    "Web Development",
    "User Experience Design",
    "Content Marketing",
    "Remote Work",
    "Digital Transformation",
    "Social Media Strategy",
    "Product Management",
    "Data Visualization",
    "E-commerce Optimization",
    "Mobile App Development",
    "Artificial Intelligence",
    "Blockchain Technology",
    "Sustainable Design",
    "Personal Branding",
    "Business Analytics"
  ];
  
  return Array.from({ length: 20 }, (_, index) => {
    const titlePrefix = titlePrefixes[Math.floor(Math.random() * titlePrefixes.length)];
    const titleSuffix = titleSuffixes[Math.floor(Math.random() * titleSuffixes.length)];
    const title = `${titlePrefix} ${titleSuffix}`;
    const slug = title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    // Get 2-4 random tags
    const numTags = 2 + Math.floor(Math.random() * 3);
    const articleTags = [...tags]
      .sort(() => 0.5 - Math.random())
      .slice(0, numTags);
    
    // Random author
    const author = MOCK_AUTHORS[Math.floor(Math.random() * MOCK_AUTHORS.length)];
    
    // Random date within the last year
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 365));
    
    return {
      id: index + 1,
      title,
      slug,
      excerpt: `${contentSamples[index % contentSamples.length].substring(0, 150)}...`,
      content: contentSamples[index % contentSamples.length],
      coverImage: `https://picsum.photos/seed/${index + 1}/800/450`,
      category,
      author,
      publishedDate: date.toISOString().split('T')[0],
      readTime: 3 + Math.floor(Math.random() * 10),
      tags: articleTags
    };
  });
};

// Initialize our mock database
const MOCK_ARTICLES = generateMockArticles();

// API functions
export const api = {
  // Get all articles with optional filtering
  getArticles: async ({ 
    page = 1, 
    limit = 10, 
    category = '', 
    tag = '' 
  }: { 
    page?: number; 
    limit?: number; 
    category?: string; 
    tag?: string; 
  } = {}) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    let filteredArticles = [...MOCK_ARTICLES];
    
    // Apply filters
    if (category) {
      filteredArticles = filteredArticles.filter(article => 
        article.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    if (tag) {
      filteredArticles = filteredArticles.filter(article => 
        article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
      );
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
    
    return {
      articles: paginatedArticles,
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(filteredArticles.length / limit)
    };
  },
  
  // Get single article by slug
  getArticleBySlug: async (slug: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const article = MOCK_ARTICLES.find(article => article.slug === slug);
    
    if (!article) {
      throw new Error('Article not found');
    }
    
    return article;
  },
  
  // Get related articles
  getRelatedArticles: async (articleId: number, limit = 3) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400));
    
    const currentArticle = MOCK_ARTICLES.find(article => article.id === articleId);
    
    if (!currentArticle) {
      return [];
    }
    
    // Find articles with the same category or tags
    const relatedArticles = MOCK_ARTICLES
      .filter(article => article.id !== articleId)
      .filter(article => 
        article.category === currentArticle.category || 
        article.tags.some(tag => currentArticle.tags.includes(tag))
      )
      .slice(0, limit);
    
    return relatedArticles;
  },
  
  // Get categories with article count
  getCategories: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const categories = MOCK_ARTICLES.reduce((acc, article) => {
      const category = article.category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(categories).map(([name, count]) => ({ name, count }));
  },
  
  // Get popular tags
  getTags: async (limit = 10) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const tagCounts = MOCK_ARTICLES.reduce((acc, article) => {
      article.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);
    
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name, count]) => ({ name, count }));
  }
};
