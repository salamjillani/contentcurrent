// Enhanced API implementation with robust article persistence

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
  year: string; 
  readTime: number;
  tags: string[];
}

// Simulate API endpoints
const MOCK_AUTHORS: Author[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Sam Chen",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Taylor Smith",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    name: "Jordan Wright",
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

// Generate rich, structured mock articles
const generateMockArticles = (): Article[] => {
  const categories = ["Technology", "Design", "Business", "Lifestyle", "Innovation"];
  const tags = [
    "AI", "Robotics", "Future Tech", "Digital Transformation", "Innovation", 
    "Machine Learning", "Quantum Computing", "Internet of Things", 
    "Virtual Reality", "Wearable Tech", "Emerging Technologies", 
    "Blockchain", "Sustainability", "Cloud Computing", "5G", 
    "Cybersecurity", "Data Science", "UX Design", "Tech Ethics",
    "Fintech", "Biotech", "Digital Nomad", "Remote Work", "Smart Cities"
  ];
  
  // Article content generation function
  const generateArticleContent = (title: string): string => {
    const articleTemplates = [
      () => `# ${title}

Hey there, digital daredevils! Get ready for a mind-bending journey into the future of technology that's about to turn everything we know upside down.

## The Tech Revolution is Here

Technology isn't just changing – it's exploding like a supernova of innovation. We're not just talking incremental updates; we're discussing a complete reimagining of how we live, work, and play.

### Artificial Intelligence: Your New Best Friend

Imagine an AI that doesn't just answer questions but understands you better than your closest friends. We're entering an era where artificial intelligence is becoming less artificial and more intelligent.

- **Personalized Experiences**: AI now tailors everything from your Netflix recommendations to your morning coffee order.
- **Predictive Capabilities**: Algorithms that can predict your needs before you even realize them.
- **Ethical Considerations**: As AI grows smarter, we're facing unprecedented questions about machine consciousness.

### The Rise of Quantum Computing

Classical computers are going the way of the dinosaur. Quantum computing is here to solve problems that would take traditional computers millennia to crack.

1. Unprecedented Processing Power
2. Revolutionary Scientific Breakthroughs
3. Potential to Solve Complex Global Challenges

## The Human-Technology Symbiosis

We're not being replaced by technology – we're merging with it. Wearable tech, brain-computer interfaces, and augmented reality are blurring the lines between human and machine.

> "The future is already here – it's just not evenly distributed." - William Gibson

### Emerging Trends to Watch

- Virtual Reality Workspaces
- AI-Powered Healthcare
- Sustainable Tech Solutions
- Decentralized Digital Ecosystems

## Conclusion: Embracing the Technological Frontier

The future isn't something that happens to us – it's something we create. As technology continues to evolve at breakneck speed, our ability to adapt, learn, and innovate will be our greatest asset.

So buckle up, stay curious, and get ready for a ride that's going to be nothing short of extraordinary!`,

      () => `# ${title}

The robots are here. And they brought WiFi.

Hey there, digital daredevils! Ready to zap into the future like it's a sci-fi movie with WiFi? Buckle up, grab your favorite smart snack, and let's explore the tech trends that are about to crash our party in the most epic way possible.

## The Rise of Robo-Buddies

Remember when robots were just movie stars? Yeah, those days are gone. In 2025, they're your coworkers, housekeepers, and maybe your therapist (they don't judge, promise). These AI pals can schedule your life and give sarcastic reminders.

- **Smart Assistants**: Beyond Alexa and Siri
- **Robotic Companions**: From workplace to home
- **AI-Powered Personal Management**

### Quantum Computers Are Having a Moment

Move over, basic binary. Quantum computing is the brainiac cousin who just showed up to the family BBQ and solved cold fusion before dessert. It's weird, wild, and makes regular computers look like Etch-a-Sketches.

1. Breaking Traditional Computing Limitations
2. Solving Complex Mathematical Problems
3. Potential for Groundbreaking Scientific Research

## The Internet of Every Dang Thing

From your fridge telling you you're out of cheese (rude) to your toilet analyzing your fiber intake (double rude), everything's getting connected. It's the IoT era, where your smart spoon might just post your cereal to Instagram.

### VR Meetings with Avatars Who Judge You Silently

Why go to boring Zoom calls when you can show up as a dragon in the metaverse? Welcome to the age of VR meetings where your boss is a giraffe and the PowerPoint has wings.

> "Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke

## Wearables That Know You Better Than Your Mom

Fitness trackers now monitor everything from your heartbeat to your hydration to your vibe. "You're cranky—maybe hydrate and hug a cat." Who needs therapy when your watch is this nosy?

### Emerging Tech Trends

- Augmented Reality Interfaces
- AI-Driven Personalization
- Sustainable Tech Innovations
- Blockchain Beyond Cryptocurrency

## Conclusion: Embrace the Technological Absurdity

So, will 2025 be run by robots and quantum spaghetti code? Maybe. Will it be hilarious, chaotic, and full of gadgets that do way too much? Absolutely. 

Embrace the absurdity, charge your devices, and get ready for a tech ride so wild, even your smart toaster might gasp.`,

      () => `# ${title}

Welcome to the digital frontier, where technology is not just advancing – it's teleporting into our lives with the subtlety of a rocket launch!

## The Digital Transformation Explosion

We're witnessing a technological renaissance that's rewriting the rules of almost every industry. From healthcare to entertainment, no sector is safe from the innovation tsunami.

### Artificial Intelligence: The New Electricity

Just as electricity transformed everything in the 20th century, AI is the game-changer of our era. It's not just a tool; it's becoming the backbone of how we work, create, and solve problems.

- **Intelligent Automation**: Transforming workplace efficiency
- **Creative AI**: Generating art, music, and content
- **Predictive Technologies**: Anticipating needs before they arise

## The Quantum Leap

Quantum computing isn't just an upgrade – it's a complete reimagining of computational power. Imagine solving in seconds what would take traditional computers thousands of years.

1. Unprecedented Processing Capabilities
2. Revolutionary Scientific Simulations
3. Cryptography and Security Advancements

### The Internet of Everything

Your devices are talking – and they're not just whispering, they're having full-blown conversations.

> "The most profound technologies are those that disappear." - Mark Weiser

## Virtual and Augmented Realities: Beyond Gaming

Virtual reality is breaking free from gaming and entering education, training, healthcare, and even social interactions. Your next meeting might be in a virtual boardroom on Mars.

### Wearable Tech: Your Personal Health Guardian

Smartwatches are so 2022. We're talking about tech that doesn't just track your health but predicts and prevents potential issues.

## Sustainable Tech: Saving the Planet, One Innovation at a Time

- Green AI
- Renewable Energy Technologies
- Circular Economy Solutions
- Climate Change Mitigation Innovations

## Conclusion: We Are the Architects of Tomorrow

Technology isn't something that happens to us – we're its creators, its shapers, its visionaries. As we stand on the brink of this incredible technological revolution, one thing is clear: the future is not just coming, it's already here.

Charge up, tune in, and get ready to ride the wave of innovation!`,

      () => `# ${title}

## Navigating the Digital Highway

In today's hyper-connected world, technology isn't just a tool—it's the very fabric of our daily existence. From the moment we wake up to our smart alarm to when we fall asleep tracking our REM cycles, we're immersed in a technological ecosystem that's evolving faster than ever before.

### The AI Revolution: Beyond Science Fiction

Artificial intelligence has leaped out of the pages of science fiction and into our everyday reality. But what does this mean for humanity?

- **Collaborative Intelligence**: Humans and AI working together, not against each other
- **Cognitive Automation**: Moving beyond simple tasks to complex problem-solving
- **Ethical AI Development**: Creating frameworks for responsible innovation

## Blockchain: More Than Just Cryptocurrency

While most people associate blockchain with Bitcoin, its applications extend far beyond digital currency:

1. Supply Chain Transparency
2. Secure Digital Identity
3. Decentralized Finance (DeFi)
4. Smart Contracts

### The Metaverse: Building Digital Realities

> "The metaverse isn't about creating a new world. It's about enhancing the one we have." - Tech Visionary

The concept of the metaverse represents the next frontier in digital experience—a collective virtual shared space that merges physical reality with digital virtuality.

## Edge Computing: Bringing Processing Power Closer

As our devices multiply, the traditional cloud model faces new challenges. Edge computing brings processing power closer to where data is created:

- Reduced Latency
- Enhanced Privacy
- Bandwidth Efficiency
- Resilient Operations

### Biotechnology Meets Digital: The Next Healthcare Revolution

The convergence of biotechnology and digital technologies is creating unprecedented opportunities in healthcare:

1. Personalized Medicine Based on Genetic Data
2. AI-Powered Diagnostics
3. Bioprinting and Organ Engineering
4. Remote Patient Monitoring

## Conclusion: Embracing the Digital Future

As we navigate this rapidly evolving technological landscape, one thing becomes clear: adaptability is our greatest asset. The future belongs not to those who can predict it, but to those who can adapt to its constant evolution.

Technology isn't just changing what we do—it's changing who we are. And that might be the most exciting frontier of all.`,

      () => `# ${title}

## Beyond the Digital Horizon

The future isn't coming—it's already here, hiding in plain sight. As we stand at the crossroads of innovation and implementation, let's explore the technological revolutions quietly transforming our world.

### Invisible Computing: Technology That Disappears

The most profound technologies are those that disappear, blending seamlessly into our environment:

- **Ambient Intelligence**: Environments that respond to our presence
- **Zero UI**: Interfaces that operate without traditional screens
- **Predictive Technology**: Systems that address needs before we express them

## Quantum Supremacy: Computing's Next Paradigm

The quantum revolution isn't just about faster computers—it's about solving previously impossible problems:

1. Drug Discovery Acceleration
2. Climate Modeling Enhancement
3. Materials Science Breakthroughs
4. Complex System Optimization

> "Quantum computing isn't just an evolution of classical computing—it's a fundamentally different approach to problem-solving." - Quantum Theorist

### Sustainable Tech: Innovation with Purpose

The next wave of technology must address our planet's most pressing challenges:

- Carbon-Negative Technologies
- Circular Economy Platforms
- Regenerative Design Systems
- Clean Energy Optimization

## Digital Trust Architectures

As our lives become increasingly digital, trust becomes the new currency:

1. Self-Sovereign Identity
2. Zero-Knowledge Proofs
3. Decentralized Verification Systems
4. Privacy-Preserving Computation

### Biodigital Convergence

The lines between biology and technology are blurring:

- Neuromorphic Computing
- Biohybrid Systems
- Synthetic Biology Platforms
- Human Augmentation Technologies

## The Human Element: Technology with Empathy

Amid rapid technological change, the most successful innovations will be those that center human needs, values, and wellbeing:

- Ethical AI Development
- Inclusive Design Principles
- Technology for Social Impact
- Digital Wellbeing Frameworks

### Conclusion: Co-Creating Our Technological Future

The most exciting aspect of these technological frontiers isn't just what they can do—it's what we can become through them. The future of technology isn't something that happens to us; it's something we actively shape and create.

As we navigate this exciting era of innovation, let's ensure our technological future reflects our highest human aspirations.`
    ];

    // Randomly select an article template
    return articleTemplates[Math.floor(Math.random() * articleTemplates.length)]();
  };
  
  // Create 50 articles with consistent slugs - the key is to make sure slugs are deterministic
  const titlePrefixes = [
    "The Future of", 
    "Unleashing", 
    "Revolution: How", 
    "The Rise of", 
    "Transforming Tomorrow:",
    "Breaking Barriers:",
    "The Ultimate Guide to",
    "Next-Level",
    "The Evolution of",
    "Mastering",
    "Exploring",
    "Redefining",
    "Beyond Conventional",
    "The Age of",
    "Disrupting"
  ];
  
  const titleSuffixes = [
    "Technology",
    "Digital Innovation",
    "AI and Robotics",
    "Emerging Tech Trends",
    "The Tech Frontier",
    "Future Technologies",
    "Digital Transformation",
    "Technological Revolution",
    "Quantum Computing",
    "Blockchain Applications",
    "Smart Solutions",
    "IoT Ecosystems",
    "Metaverse Development",
    "Cloud Infrastructure",
    "Data Analytics",
    "Cybersecurity",
    "Remote Work Technology",
    "Sustainable Tech",
    "FinTech Solutions",
    "Web3 and Decentralization"
  ];

  // Create the articles using a deterministic approach
  return Array.from({ length: 50 }, (_, index) => {
    // Use a deterministic formula based on index to select prefix and suffix
    const prefixIndex = index % titlePrefixes.length;
    const suffixIndex = Math.floor(index / titlePrefixes.length) % titleSuffixes.length;
    
    const titlePrefix = titlePrefixes[prefixIndex];
    const titleSuffix = titleSuffixes[suffixIndex];
    const title = `${titlePrefix} ${titleSuffix}`;
    const slug = createSlug(title); // Using our improved slug function
    const category = categories[index % categories.length];
    
    // Get 2-4 random tags but in a deterministic way
    const numTags = 2 + (index % 3);
    const articleTags = [];
    for (let i = 0; i < numTags; i++) {
      const tagIndex = (index + i) % tags.length;
      articleTags.push(tags[tagIndex]);
    }
    
    // Deterministic author selection
    const author = MOCK_AUTHORS[index % MOCK_AUTHORS.length];
    
    // Generate date in a deterministic way
    const years = ["2023", "2024", "2025"];
    const year = index < 12 ? "2025" : years[index % years.length];
    
    // Deterministic date within the year
    const month = index % 12;
    const day = 1 + (index % 28);
    
    const date = new Date();
    date.setFullYear(parseInt(year));
    date.setMonth(month);
    date.setDate(day);
    
    const publishedDate = date.toISOString().split('T')[0];
    const content = generateArticleContent(title);
    
    return {
      id: index + 1,
      title,
      slug,
      excerpt: content.split('\n')[2]?.substring(0, 200) + '...' || '',
      content,
      coverImage: `https://picsum.photos/seed/${index + 1}/800/450`,
      category,
      author,
      publishedDate,
      year,
      readTime: 5 + (index % 10),
      tags: articleTags
    };
  });
};

// More consistent slug creation function
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars except whitespace and hyphens
    .replace(/\s+/g, '-')     // Replace whitespace with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .trim();                  // Trim whitespace from ends
}

// Storage keys with version control
const STORAGE_KEY = 'mockArticles';
const STORAGE_VERSION_KEY = 'mockArticlesVersion';
const CURRENT_VERSION = '1.1'; // Incremented version to force regeneration with new slug format

// Improved article caching with version control
let MOCK_ARTICLES: Article[] = [];
let articlesGenerated = false;

// Create a slug lookup map for fast access
let slugMap: Map<string, Article> = new Map();

// Function to build the slug lookup map
const buildSlugMap = (articles: Article[]) => {
  const map = new Map<string, Article>();
  articles.forEach(article => {
    map.set(article.slug, article);
    
    // Also add normalized versions for more resilient lookups
    const normalized = normalizeSlug(article.slug);
    if (normalized !== article.slug) {
      map.set(normalized, article);
    }
  });
  return map;
};

// Normalize a slug for consistent comparison
function normalizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^\w-]/g, '')  // Remove all non-alphanumeric chars except hyphens
    .replace(/-+/g, '-')     // Replace multiple hyphens with single hyphen
    .trim();                 // Trim whitespace
}

// Wrapper to ensure articles are only generated once
const getMockArticles = (): Article[] => {
  if (articlesGenerated && MOCK_ARTICLES.length > 0) {
    return MOCK_ARTICLES;
  }
  
  try {
    // Check storage version first
    const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
    const storedArticles = localStorage.getItem(STORAGE_KEY);
    
    if (storedArticles && storedVersion === CURRENT_VERSION) {
      MOCK_ARTICLES = JSON.parse(storedArticles);
      articlesGenerated = true;
      slugMap = buildSlugMap(MOCK_ARTICLES);
      console.log('Loaded articles from localStorage with version match');
      return MOCK_ARTICLES;
    }
    
    // Generate fresh articles if version mismatch or no stored articles
    MOCK_ARTICLES = generateMockArticles();
    articlesGenerated = true;
    slugMap = buildSlugMap(MOCK_ARTICLES);
    
    // Store with version
    localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_ARTICLES));
    localStorage.setItem(STORAGE_VERSION_KEY, CURRENT_VERSION);
    console.log('Generated new articles and stored in localStorage');
    
    return MOCK_ARTICLES;
  } catch (e) {
    console.warn('Failed to load/store articles in localStorage:', e);
    
    // Fallback to memory-only if storage fails
    if (!articlesGenerated) {
      MOCK_ARTICLES = generateMockArticles();
      articlesGenerated = true;
      slugMap = buildSlugMap(MOCK_ARTICLES);
    }
    
    return MOCK_ARTICLES;
  }
};

// Add retry logic for API calls
const withRetry = async <T>(
  fn: () => Promise<T>, 
  maxRetries = 2,
  retryDelay = 300
): Promise<T> => {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      console.warn(`API call failed (attempt ${attempt + 1}/${maxRetries + 1}):`, error);
      
      if (attempt < maxRetries) {
        console.log(`Retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        retryDelay *= 2; // Exponential backoff
      }
    }
  }
  
  throw lastError;
};

// Enhanced article lookup function with faster and more accurate matching
const findArticleBySlug = (slug: string): Article | null => {
  // Ensure articles are loaded
  if (!articlesGenerated) {
    getMockArticles();
  }
  
  // Clean and normalize the input slug
  const decodedSlug = decodeURIComponent(slug).trim();
  const normalizedSlug = normalizeSlug(decodedSlug);
  
  // Check the slug map first (fastest path)
  if (slugMap.has(decodedSlug)) {
    return slugMap.get(decodedSlug)!;
  }
  
  if (slugMap.has(normalizedSlug)) {
    return slugMap.get(normalizedSlug)!;
  }
  
  // Log the fact that we didn't find an exact match
  console.warn(`No exact match found for slug: "${normalizedSlug}"`);
  
  // Try partial match as fallback
  const articles = MOCK_ARTICLES;
  const partialMatch = articles.find(article => 
    normalizedSlug.includes(normalizeSlug(article.slug)) || 
    normalizeSlug(article.slug).includes(normalizedSlug)
  );
  
  if (partialMatch) {
    console.log(`Found partial match instead: "${partialMatch.slug}"`);
    return partialMatch;
  }
  
  // Last resort - find by keyword in title or slug
  const keywords = normalizedSlug.split('-').filter(k => k.length > 3);
  if (keywords.length > 0) {
    for (const keyword of keywords) {
      const keywordMatch = articles.find(article => 
        article.title.toLowerCase().includes(keyword) ||
        article.slug.toLowerCase().includes(keyword)
      );
      if (keywordMatch) {
        console.log(`Found keyword match for "${keyword}": "${keywordMatch.slug}"`);
        return keywordMatch;
      }
    }
  }
  
  // Fallback to the first article if nothing else works
  console.warn('No match found, returning the first article as fallback');
  return articles.length > 0 ? articles[0] : null;
};

// Export the enhanced API
export default {
  getArticles: async ({ 
    page = 1, 
    limit = 10, 
    category = '', 
    tag = '',
    search = '',
    year = ''
  }) => {
    return withRetry(async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      let filteredArticles = [...getMockArticles()];
      
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
      
      if (search) {
        filteredArticles = filteredArticles.filter(article =>
          article.title.toLowerCase().includes(search.toLowerCase())
        );
      }
      
      if (year) {
        filteredArticles = filteredArticles.filter(article => 
          article.year === year
        );
      }
      
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
    });
  },
  
  // Enhanced getArticleBySlug with fallback strategies
  getArticleBySlug: async (slug: string) => {
    return withRetry(async () => {
      // Log the slug we're looking for
      const inputSlug = decodeURIComponent(slug).toLowerCase();
      console.log(`Looking for article with slug: ${inputSlug}`);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Enhanced article lookup with fallback strategies
      const article = findArticleBySlug(inputSlug);
      
      if (!article) {
        // Log more debug information
        console.warn(`Article not found with slug: ${inputSlug}`);
        console.log('First 5 available slugs:', getMockArticles().slice(0, 5).map(a => a.slug));
        
        // Before giving up, try to return ANY article as a fallback (for demo purposes)
        if (getMockArticles().length > 0) {
          console.log('Falling back to the first available article instead');
          return getMockArticles()[0];
        }
        
        throw new Error(`Article not found with slug: ${inputSlug}`);
      }
      
      return article;
    }, 3, 200); // More retries for this critical endpoint
  },
  
  // Get related articles with retry
  getRelatedArticles: async (articleId: number, limit = 3) => {
    return withRetry(async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const currentArticle = getMockArticles().find(article => article.id === articleId);
      
      if (!currentArticle) {
        console.warn(`No article found with ID ${articleId} for related articles`);
        return [];
      }
      
      // Find articles with the same category or tags
      const relatedArticles = getMockArticles()
        .filter(article => article.id !== articleId)
        .filter(article => 
          article.category === currentArticle.category || 
          article.tags.some(tag => currentArticle.tags.includes(tag))
        )
        .slice(0, limit);
      
      return relatedArticles;
    });
  },
  
  // Get categories with article count
  getCategories: async () => {
    return withRetry(async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const categories = getMockArticles().reduce((acc, article) => {
        const category = article.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      
      return Object.entries(categories).map(([name, count]) => ({ name, count }));
    });
  },
  
  // Get popular tags
  getTags: async (limit = 10) => {
    return withRetry(async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const tagCounts = getMockArticles().reduce((acc, article) => {
        article.tags.forEach(tag => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
      }, {} as Record<string, number>);
      
      return Object.entries(tagCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([name, count]) => ({ name, count }));
    });
  }
};
