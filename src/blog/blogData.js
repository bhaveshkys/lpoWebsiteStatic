export const blogPosts = [
  {
    id: 1,
    slug: "understanding-estate-planning-basics",
    title: "Understanding Estate Planning Basics: A Complete Guide",
    excerpt: "Estate planning is crucial for protecting your assets and ensuring your wishes are carried out. Learn the essential components every plan should include.",
    content: `
      <h2>What is Estate Planning?</h2>
      <p>Estate planning is the process of arranging for the management and disposal of a person's estate during their life and after death. It involves creating legal documents that specify how your assets will be distributed and who will manage your affairs if you become incapacitated.</p>
      
      <h3>Key Components of Estate Planning</h3>
      <ul>
        <li><strong>Will:</strong> A legal document that specifies how your assets will be distributed after death</li>
        <li><strong>Trust:</strong> A fiduciary arrangement that allows a third party to hold assets on behalf of beneficiaries</li>
        <li><strong>Power of Attorney:</strong> A document that gives someone authority to act on your behalf</li>
        <li><strong>Healthcare Directives:</strong> Documents that specify your wishes for medical care</li>
      </ul>
      
      <h3>Why Estate Planning Matters</h3>
      <p>Without proper estate planning, your assets may not be distributed according to your wishes, and your loved ones may face unnecessary legal complications and expenses. A well-crafted estate plan can:</p>
      <ul>
        <li>Minimize taxes and legal fees</li>
        <li>Provide for your family's financial security</li>
        <li>Ensure your healthcare wishes are respected</li>
        <li>Protect your privacy</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>The first step in estate planning is taking inventory of your assets and debts. Consider working with experienced legal professionals who can guide you through the process and ensure all documents are properly executed.</p>
    `,
    author: "Sarah Johnson, Estate Planning Specialist",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Estate Planning",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&q=80",
    tags: ["Estate Planning", "Legal Documents", "Wills", "Trusts"]
  },
  {
    id: 2,
    slug: "immigration-law-changes-2024",
    title: "Key Immigration Law Changes in 2024: What You Need to Know",
    excerpt: "Stay updated on the latest immigration law changes that could affect your case. Our experts break down the most important updates for 2024.",
    content: `
      <h2>Overview of 2024 Immigration Changes</h2>
      <p>The immigration landscape continues to evolve, with significant changes implemented throughout 2024. These updates affect various visa categories, processing times, and application requirements.</p>
      
      <h3>Major Changes This Year</h3>
      <h4>Family-Based Immigration</h4>
      <ul>
        <li>Updated priority dates for family preference categories</li>
        <li>Streamlined processing for certain spouse and child petitions</li>
        <li>New documentation requirements for financial support</li>
      </ul>
      
      <h4>Employment-Based Immigration</h4>
      <ul>
        <li>H-1B cap increases and lottery system modifications</li>
        <li>Updated prevailing wage requirements</li>
        <li>Enhanced scrutiny for specialty occupation determinations</li>
      </ul>
      
      <h3>Impact on Pending Cases</h3>
      <p>Existing applications may be affected by these changes. It's crucial to:</p>
      <ul>
        <li>Review your case status regularly</li>
        <li>Respond promptly to any requests for additional evidence</li>
        <li>Consult with experienced immigration attorneys</li>
      </ul>
      
      <h3>Planning Ahead</h3>
      <p>Given the dynamic nature of immigration law, staying informed and working with qualified legal professionals is more important than ever. Consider scheduling a consultation to review how these changes might affect your specific situation.</p>
    `,
    author: "Michael Chen, Immigration Attorney",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Immigration",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop&q=80",
    tags: ["Immigration", "Legal Updates", "Visa", "2024 Changes"]
  },
  {
    id: 3,
    slug: "bankruptcy-myths-debunked",
    title: "Common Bankruptcy Myths Debunked: Separating Fact from Fiction",
    excerpt: "Bankruptcy doesn't have to be scary. Learn the truth behind common misconceptions and understand when bankruptcy might be the right choice.",
    content: `
      <h2>Understanding Bankruptcy: Beyond the Myths</h2>
      <p>Bankruptcy is often misunderstood, surrounded by myths that can prevent people from seeking the financial relief they need. Let's separate fact from fiction.</p>
      
      <h3>Myth #1: Bankruptcy Ruins Your Credit Forever</h3>
      <p><strong>Fact:</strong> While bankruptcy does impact your credit score, it's not permanent. Chapter 7 bankruptcy remains on your credit report for 10 years, but many people see credit score improvements within 1-2 years of filing.</p>
      
      <h3>Myth #2: You'll Lose Everything You Own</h3>
      <p><strong>Fact:</strong> Federal and state exemptions protect essential assets like your home, car, retirement accounts, and personal belongings. Most people keep the majority of their property.</p>
      
      <h3>Myth #3: Only Irresponsible People File Bankruptcy</h3>
      <p><strong>Fact:</strong> The majority of bankruptcies are caused by circumstances beyond people's control:</p>
      <ul>
        <li>Medical emergencies (leading cause)</li>
        <li>Job loss or reduced income</li>
        <li>Divorce</li>
        <li>Business failure</li>
      </ul>
      
      <h3>Myth #4: You Can't Get Credit After Bankruptcy</h3>
      <p><strong>Fact:</strong> Many people receive credit card offers shortly after discharge. While interest rates may initially be higher, responsible credit use can quickly rebuild your credit profile.</p>
      
      <h3>When to Consider Bankruptcy</h3>
      <p>Bankruptcy might be appropriate if you're experiencing:</p>
      <ul>
        <li>Overwhelming debt that you cannot repay</li>
        <li>Wage garnishment or asset seizure threats</li>
        <li>Using credit for basic necessities</li>
        <li>Losing sleep due to financial stress</li>
      </ul>
      
      <p>Consult with a qualified bankruptcy attorney to understand your options and make an informed decision.</p>
    `,
    author: "Lisa Rodriguez, Bankruptcy Attorney",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Bankruptcy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&q=80",
    tags: ["Bankruptcy", "Financial Relief", "Debt", "Legal Advice"]
  }
];

export const getBlogPost = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};