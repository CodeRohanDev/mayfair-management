export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
  tags: string[];
}

export const newsPosts: NewsPost[] = [
  {
    id: "top-50-private-equity-firms-2025",
    title: "Lincolnshire Management Closes Sale of Larife Roofing",
    excerpt: "Lincolnshire Management is pleased to share that we have been recognized as one of Private Equity CXO's Top 50 Private Equity Firms for Executives for 2025.",
    content: `
      <p>Lincolnshire Management is pleased to share that we have been recognized as one of Private Equity CXO's ("PE-CXO") Top 50 Private Equity Firms for Executives for 2025. The annual list highlights funds whose governance style and engagement create an environment that best enables portfolio executives to achieve success.</p>
      
      <h2>Recognition Criteria</h2>
      <p>The Top 50 list evaluates private equity firms based on their governance practices, executive support systems, and track record of enabling portfolio company leadership to drive growth and operational excellence.</p>
      
      <h2>Our Approach</h2>
      <p>At Lincolnshire Management, we believe in partnering with exceptional management teams and providing them with the resources, expertise, and strategic guidance needed to accelerate growth and create lasting value.</p>
      
      <h2>Looking Forward</h2>
      <p>This recognition reinforces our commitment to maintaining the highest standards of partnership with our portfolio company executives and continuing to build a platform that enables their success.</p>
    `,
    author: "Lincolnshire Management",
    date: "2025-01-15",
    category: "Awards",
    image: "/hero banner image.jpg",
    tags: ["awards", "recognition", "private-equity", "executives"]
  },
  {
    id: "portfolio-company-expansion",
    title: "Portfolio Company Announces Major Expansion",
    excerpt: "One of our portfolio companies has announced a significant expansion into new markets, demonstrating strong growth momentum.",
    content: `
      <p>We are excited to announce that one of our portfolio companies has successfully expanded into three new geographic markets, representing a significant milestone in their growth journey.</p>
      
      <h2>Strategic Growth</h2>
      <p>This expansion represents the culmination of 18 months of strategic planning and market analysis, positioning the company for continued success.</p>
      
      <h2>Market Opportunity</h2>
      <p>The new markets represent a combined addressable market of over $500 million, providing substantial growth opportunities for the company.</p>
    `,
    author: "Portfolio Team",
    date: "2025-01-10",
    category: "Portfolio",
    image: "/hero banner image.jpg",
    tags: ["portfolio", "expansion", "growth", "markets"]
  },
  {
    id: "industry-leadership-award",
    title: "Lincolnshire Management Receives Industry Leadership Award",
    excerpt: "Recognition for our commitment to responsible investing and sustainable business practices across our portfolio.",
    content: `
      <p>Lincolnshire Management has been honored with the Industry Leadership Award for our commitment to environmental, social, and governance (ESG) principles across our investment portfolio.</p>
      
      <h2>ESG Integration</h2>
      <p>Our approach to ESG integration goes beyond compliance, embedding sustainable practices into the core operations of our portfolio companies.</p>
      
      <h2>Measurable Impact</h2>
      <p>Over the past year, our portfolio companies have achieved a 25% reduction in carbon emissions and implemented comprehensive diversity and inclusion programs.</p>
    `,
    author: "ESG Team",
    date: "2025-01-05",
    category: "Awards",
    image: "/hero banner image.jpg",
    tags: ["esg", "sustainability", "leadership", "awards"]
  },
  {
    id: "new-investment-announcement",
    title: "Lincolnshire Management Announces New Investment in Technology Sector",
    excerpt: "Strategic investment in innovative technology company positioned for rapid growth in emerging markets.",
    content: `
      <p>We are pleased to announce our latest investment in a leading technology company that specializes in innovative solutions for the healthcare industry.</p>
      
      <h2>Investment Thesis</h2>
      <p>This investment aligns with our strategy of partnering with companies that leverage technology to solve critical industry challenges.</p>
      
      <h2>Growth Potential</h2>
      <p>The company is well-positioned to capitalize on the growing demand for digital healthcare solutions, with a strong management team and proven technology platform.</p>
    `,
    author: "Investment Team",
    date: "2024-12-20",
    category: "Investments",
    image: "/hero banner image.jpg",
    tags: ["investment", "technology", "healthcare", "growth"]
  },
  {
    id: "quarterly-portfolio-update",
    title: "Q4 2024 Portfolio Performance Update",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>We are pleased to report strong performance across our portfolio for Q4 2024, with several companies achieving record financial results.</p>
      
      <h2>Key Highlights</h2>
      <p>Portfolio companies achieved an average revenue growth of 18% year-over-year, with EBITDA margins expanding across multiple sectors.</p>
      
      <h2>Operational Excellence</h2>
      <p>Our focus on operational improvements and strategic initiatives continues to drive value creation across the portfolio.</p>
    `,
    author: "Portfolio Team",
    date: "2024-12-15",
    category: "Portfolio",
    image: "/hero banner image.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  }
];