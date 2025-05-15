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
    name: "",
    avatar: ""
  },
  {
    id: 2,
    name: "",
    avatar: ""
  },
  {
    id: 3,
    name: "",
    avatar: ""
  },
  {
    id: 4,
    name: "",
    avatar: ""
  },
  {
    id: 5,
    name: "",
    avatar: ""
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
  
  // Increase number of articles from 20 to 50
  return Array.from({ length: 50 }, (_, index) => {
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
      publishedDate: date.toISOString().split('T')[0],
      readTime: 5 + Math.floor(Math.random() * 10),
      tags: articleTags
    };
  });
};

// Initialize our mock database
const MOCK_ARTICLES = generateMockArticles();

export default {
  getArticles: async ({ 
    page = 1, 
    limit = 10, 
    category = '', 
    tag = '',
    search = ''
  }) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    let filteredArticles = [...MOCK_ARTICLES];
    
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
