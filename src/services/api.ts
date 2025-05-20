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
  publishedDate: string;
  year: string; 
  readTime: number;
  tags: string[];
}

// Generate rich, structured mock articles
const generateMockArticles = (): Article[] => {
  const categories = ["Technology", "Business", "Science", "Health", "Environment"];
  const tags = [
    "Artificial Intelligence", "Space Exploration", "Climate Tech", "Digital Health", "Renewable Energy", 
    "Neuroscience", "Genomics", "Quantum Computing", "Cybersecurity", "Blockchain", 
    "Sustainable Development", "Space Tourism", "Digital Transformation", "Green Technology", "Biotechnology", 
    "Remote Work", "Future of Food", "Mental Health", "Clean Energy", "3D Printing",
    "Regenerative Agriculture", "Digital Privacy", "Smart Cities", "Biohacking", "Ocean Conservation"
  ];
  
  // Article content generation function
  const generateArticleContent = (title: string, contentIndex: number): string => {
    const articleTemplates = [
      () => `# ${title}

The landscape of technology is constantly evolving, and we're witnessing an unprecedented acceleration in innovation across multiple sectors.

## Breaking New Ground

Innovation isn't just about incremental improvements anymore—it's about fundamental paradigm shifts that redefine what's possible.

### The Convergence Revolution

We're seeing the lines blur between previously distinct technologies:

- **Biotech meets AI**: Algorithms are revolutionizing drug discovery and personalized medicine
- **Quantum computing meets cryptography**: Creating both threats and opportunities for data security
- **Robotics meets neuroscience**: Brain-computer interfaces enabling revolutionary control systems

### From Theory to Application

What was theoretical just a few years ago is now being deployed in real-world scenarios:

1. Quantum sensors detecting microscopic anomalies in manufacturing
2. Carbon capture technologies becoming economically viable
3. Lab-grown tissues being used for transplantation
4. Autonomous systems operating in previously inaccessible environments

## The Hidden Challenges

> "Technology's greatest challenge isn't technical feasibility but ethical implementation." - Technology Ethicist

As we push these boundaries, new questions emerge about governance, access, and potential consequences:

### Navigating the Regulatory Landscape

- Global coordination challenges for emerging technologies
- Balancing innovation with safety and security
- Creating adaptive frameworks that don't stifle development

## Looking Forward: The Next Horizon

The innovations gaining momentum today will define the capabilities of tomorrow:

- Edge AI systems that operate without cloud connectivity
- Programmable materials that can change properties on demand
- Direct air capture technologies at industrial scale
- Biocomputing platforms that harness cellular mechanisms

### Preparing for Transformation

The greatest competitive advantage will be adaptability—organizations and individuals who can learn, unlearn, and relearn as technological paradigms shift.

## Conclusion: Innovation with Purpose

The most powerful technological developments won't just be those that demonstrate technical brilliance, but those that address fundamental human and planetary needs while creating new possibilities for flourishing.

The future isn't just something that happens to us—it's something we actively create through our technological choices today.`,

      () => `# ${title}

## The Silent Revolution 

Across laboratories, startups, and corporate research centers around the world, a transformation is taking place that few are fully aware of—yet it will reshape how we live, work, and interact.

### The End of Technological Isolation

For decades, we've developed technologies in parallel streams, with specialists working within their domains. That era is ending:

- **Cross-disciplinary innovation**: Breakthroughs now happen at the intersection of fields
- **Convergent technologies**: When AI meets biotech meets materials science
- **Knowledge transfer acceleration**: Techniques from one field are rapidly adapted to others

## Beyond the Hype Cycle

While headlines focus on certain buzzwords, the real revolution is happening beneath the surface:

1. Next-generation energy storage making renewable energy truly viable
2. Synthetic biology platforms creating sustainable alternatives to industrial processes
3. Neuromorphic computing architectures mimicking brain function
4. Distributed intelligence networks enabling new forms of coordination

### The Infrastructure Transformation

> "The most important technological changes are often invisible—they're the infrastructure that everything else depends upon." - Infrastructure Theorist

What's changing isn't just individual products but the fundamental systems that underpin modern life:

- Communication networks beyond 5G
- Logistics systems with distributed intelligence
- Energy grids that adapt in real-time
- Manufacturing techniques that eliminate traditional constraints

## The Human Element

As technology becomes more capable, the uniquely human contributions become more valuable:

### A New Partnership Paradigm

- Technologies that augment human capabilities rather than replace them
- Systems designed for meaningful human control and oversight
- Innovation focused on enhancing human connection rather than isolation

## Preparing for What's Next

The organizations and societies that will thrive aren't just those with access to technology, but those that can:

- Foster cultures of continuous learning
- Build ethical frameworks that guide technological development
- Create inclusive systems that distribute benefits broadly
- Balance rapid innovation with careful consideration of consequences

### The Path Forward

The greatest challenge isn't developing new technologies—it's developing the wisdom to deploy them in ways that create a better future for humanity and our planet.

## Conclusion: Beyond the Horizon

The next decade will bring technological possibilities that seem like science fiction today. Our task is to ensure these powerful tools are directed toward our highest aspirations rather than our lowest impulses.

The future is unwritten—and technology gives us the pen.`,

      () => `# ${title}

## The Unexpected Pioneers

Away from the spotlight and big tech headlines, small teams of researchers and entrepreneurs are quietly reshaping our technological landscape in ways that few anticipated.

### The Power of Overlooked Technologies

While attention focuses on a few high-profile areas, revolutionary progress is happening in fields that receive far less coverage:

- **Materials science breakthroughs**: Metamaterials with properties that seem to defy physics
- **Alternative computing architectures**: Beyond traditional silicon to biological and photonic systems
- **Sensing technologies**: Creating new ways to perceive and interact with our environment
- **Distributed coordination systems**: Enabling new forms of collaboration across distances and organizations

## The Transformation Timeline

Change isn't happening at a uniform pace—some sectors are experiencing exponential breakthroughs while others evolve more gradually:

1. Near-term disruptions (1-3 years): Enhanced by current AI capabilities
2. Mid-term transformations (3-7 years): Requiring new infrastructure deployment
3. Long-term revolutions (7-15 years): Dependent on scientific breakthroughs

### Finding Signal in the Noise

> "The future is already here—it's just not evenly distributed." - William Gibson

The indicators of tomorrow's dominant technologies can often be found in today's niche applications:

- Academic research papers showing order-of-magnitude improvements
- Specialized industrial applications demonstrating new capabilities
- Unexpected combinations of existing technologies creating emergent properties

## The Democratization Effect

Perhaps the most significant trend isn't any specific technology but how development is becoming more accessible:

### Lowering Barriers to Innovation

- Open-source tools enabling broad participation in cutting-edge fields
- Declining costs for previously expensive development infrastructure
- Knowledge dissemination accelerating through digital channels
- Collaborative approaches replacing siloed development

## Navigating Uncertainty

With accelerating change comes increasing unpredictability:

- How to make decisions amidst technological uncertainty
- Balancing early adoption advantages against implementation risks
- Building adaptable systems rather than rigid infrastructures

### Strategic Approaches for an Unpredictable Future

- Developing technological flexibility rather than committing to single paths
- Creating option value through experimental implementations
- Focusing on fundamental capabilities that transfer across scenarios

## Conclusion: The Unfolding Story

The technological future won't unfold according to predetermined narratives or hype cycles—it will emerge from countless innovations, experiments, failures, and unexpected successes.

The organizations and individuals who will shape this future aren't necessarily those with the most resources, but those with the clearest vision, greatest adaptability, and unwavering focus on creating genuine value.`,

      () => `# ${title}

## The Silent Transformation

A profound technological shift is occurring beneath the surface of our daily lives—one that will fundamentally alter how we interact with our world and each other.

### Beyond the Visible Horizon

While headlines focus on consumer gadgets and apps, deeper technological currents are reshaping our foundation:

- **Digital infrastructure evolution**: From centralized systems to distributed networks
- **Computational material science**: Programming matter at the molecular level
- **Biological information systems**: Harnessing natural processes for computation and manufacturing
- **Energy paradigm shifts**: Moving from extraction to regeneration

## Rewriting the Rules

These technologies aren't just improving existing systems—they're changing what's possible:

1. Solving previously intractable problems through new computational approaches
2. Creating circular economic models that eliminate traditional waste streams
3. Enabling personalized medicine tailored to individual genetic profiles
4. Developing energy systems that mimic natural processes

### The Integration Challenge

> "The most powerful innovations aren't standalone technologies but new ways of connecting existing capabilities." - Systems Theorist

As individual technologies mature, their combination creates possibilities greater than the sum of their parts:

- AI systems that can interact with the physical world through advanced robotics
- Synthetic biology platforms guided by computational design
- Renewable energy captured and distributed through intelligent networks
- Augmented human capabilities through seamless human-computer interfaces

## Beyond Technical Capabilities

The most significant barriers to transformation aren't technical but human and organizational:

### Navigating the Human Element

- Adapting governance systems to technological realities
- Developing new skills and ways of working
- Creating inclusive approaches to technological benefits
- Building trust in increasingly complex systems

## Charting the Future Landscape

The next decade will be defined not by any single technology but by how we integrate and direct our technological capabilities:

- Toward solving our greatest challenges or amplifying existing problems
- With thoughtful consideration of consequences or reckless deployment
- Through collaborative global approaches or fragmented competition
- With a focus on human flourishing or narrow measures of progress

### Finding the Path Forward

The most successful organizations won't be those that simply deploy technology fastest but those that most thoughtfully align technological capabilities with human needs and values.

## Conclusion: The Choice Point

We stand at a technological inflection point where our decisions about development, deployment, and governance will shape not just our tools but our society for generations to come.

The question isn't just what technology can do, but what we want it to do—and that's a question that requires not just technical expertise but wisdom, foresight, and a commitment to our highest aspirations.`,

      () => `# ${title}

## The Next Wave Approaches

While we're still adapting to recent technological changes, the next wave of innovation is already forming—and its impact may be even more profound.

### Looking Beyond the Current Generation

The technologies capturing attention today are just the beginning:

- **Post-quantum systems**: Computing architectures that transcend current approaches
- **Neuro-symbolic AI**: Combining the strengths of neural networks and symbolic reasoning
- **Programmable biology**: Engineering biological systems with precision and purpose
- **Ambient intelligence**: Computing that vanishes into our environment

## The Acceleration Phenomenon

The pace of technological change isn't just continuing—it's increasing:

1. Research pipelines converting discoveries to applications more rapidly
2. Virtual simulation enabling faster iteration and testing
3. Global collaboration accelerating knowledge sharing
4. Automation of the discovery process itself

### Unexpected Consequences

> "The most significant impacts of any technology are rarely those anticipated by its creators." - Technology Historian

As these technologies mature, their greatest effects may be outside their intended domains:

- Energy innovations reshaping geopolitics
- AI systems transforming knowledge work and education
- Synthetic biology altering manufacturing and agriculture
- Advanced materials enabling new forms of construction and transportation

## The Adaptation Imperative

In a world of accelerating change, adaptation becomes a core capability:

### Building Dynamic Organizations and Systems

- Designing for flexibility rather than optimization
- Creating learning systems that improve through experience
- Developing anticipatory capabilities for emerging technologies
- Fostering cultures that embrace constructive change

## Beyond Technical Solutions

As our technological capabilities grow, so does the importance of guidance systems:

- Ethical frameworks that evolve with technological possibilities
- Inclusive governance that represents diverse perspectives
- Long-term thinking that considers intergenerational impacts
- Values alignment between technological capabilities and human flourishing

### Navigating the Transition

The coming decade will be defined by how well we manage the transition between technological paradigms:

- Supporting communities through economic transformation
- Ensuring equitable access to technological benefits
- Building bridges between technical and non-technical domains
- Creating shared visions of desirable technological futures

## Conclusion: Co-Creating Our Technological Future

The path ahead isn't predetermined by technological inevitability but will be shaped by countless human decisions about what to develop, how to deploy it, and toward what ends.

The future belongs not to technology itself, but to those who can harness technological capabilities to address our deepest challenges and advance our highest aspirations.`
    ];

    // Use a deterministic pattern to select the content template based on the article index
    return articleTemplates[contentIndex % articleTemplates.length]();
  };
  
  // Create article titles for 50 unique articles
  const articleTitles = [
    "The Quantum Revolution: Computing Beyond Binary",
    "Sustainable Cities: Blueprints for Urban Transformation",
    "Neural Interfaces: The Bridge Between Mind and Machine",
    "Ocean Regeneration: Technologies to Heal Our Seas",
    "Synthetic Biology: Engineering Life's Building Blocks",
    "Fusion Energy: The Quest for Limitless Power",
    "Space Mining: Extracting Resources Beyond Earth",
    "Cellular Agriculture: Reimagining Food Production",
    "Carbon Capture: Technologies Fighting Climate Change",
    "Neuromorphic Computing: Machines That Think Like Brains",
    "Vertical Farming: Agriculture's Urban Revolution",
    "Virtual Presence: Beyond Video Conferencing",
    "Genetic Medicine: Editing the Code of Life",
    "Hydrogen Economy: The Clean Energy Carrier",
    "Smart Materials: Programmable Matter Takes Shape",
    "Digital Identity: Securing the Self Online",
    "Autonomous Transportation: Beyond Self-Driving Cars",
    "Biodegradable Electronics: Technology That Disappears",
    "Quantum Sensors: Measuring the Previously Unmeasurable",
    "Brain-Computer Interfaces: Direct Digital Connection",
    "Lab-Grown Organs: The Future of Transplantation",
    "Space-Based Solar Power: Energy From Above",
    "Blockchain Beyond Crypto: Rebuilding Trust Systems",
    "Regenerative Medicine: The Body's Healing Revolution",
    "Extended Reality: Merging Digital and Physical Worlds",
    "Bioplastics Revolution: Materials from Nature",
    "Privacy-Preserving AI: Computation Without Exposure",
    "Drone Ecosystems: Aerial Networks Taking Flight",
    "Plant-Based Alternatives: Reimagining Protein",
    "Smart Grids: Electricity Networks With Intelligence",
    "Digital Twins: Virtual Replicas Transforming Industry",
    "Longevity Science: Extending Healthy Human Lifespan",
    "Personalized Learning: Education's AI Revolution",
    "Bioprinting: Manufacturing Living Tissues",
    "Atmospheric Water Generation: Extracting H2O From Air",
    "Zero-Knowledge Proofs: Verification Without Revelation",
    "Robotic Automation: The Next Generation Workforce",
    "Precision Fermentation: Brewing the Future of Food",
    "Green Hydrogen: Water-Splitting for Clean Energy",
    "Edge AI: Intelligence Without the Cloud",
    "Molecular Manufacturing: Building from Atoms Up",
    "Climate Restoration: Beyond Carbon Neutrality",
    "Wearable Health Tech: The Body's Digital Guardian",
    "Autonomous Robotics: Machines That Navigate Our World",
    "Direct Air Capture: Pulling Carbon From the Sky",
    "Cultured Meat: Growing Protein Without Animals",
    "Circular Economy: Designing Out Waste",
    "Microbiome Engineering: Programming Our Inner Ecosystem",
    "Advanced Nuclear: Smaller, Safer Fission Power",
    "Digital Therapeutics: Software as Medicine"
  ];
  
  // Create 50 articles with improved deterministic slugs
  return Array.from({ length: 50 }, (_, index) => {
    const title = articleTitles[index];
    const slug = createSlug(title);
    const category = categories[index % categories.length];
    
    // Get 2-4 random tags but in a deterministic way
    const numTags = 2 + (index % 3);
    const articleTags = [];
    for (let i = 0; i < numTags; i++) {
      const tagIndex = (index + i) % tags.length;
      articleTags.push(tags[tagIndex]);
    }
    
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
    
    const publishedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const content = generateArticleContent(title, index);
    
    return {
      id: index + 1,
      title,
      slug,
      excerpt: content.split('\n\n')[1]?.substring(0, 160) + '...' || 'Exploring the cutting edge of innovation and its implications for our future.',
      content,
      coverImage: `https://picsum.photos/seed/${slug}/800/450`,
      category,
      publishedDate,
      year,
      readTime: 5 + (index % 15),
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
const CURRENT_VERSION = '2.0'; // Incremented version to force regeneration with new content

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