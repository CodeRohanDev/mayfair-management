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
    title: "MayFair Management Closes Sale of Larife Roofing",
    excerpt: "MayFair Management is pleased to share that we have been recognized as one of Private Equity CXO's Top 50 Private Equity Firms for Executives for 2025.",
    content: `
      <p>MayFair Management is pleased to share that we have been recognized as one of Private Equity CXO's ("PE-CXO") Top 50 Private Equity Firms for Executives for 2025. The annual list highlights funds whose governance style and engagement create an environment that best enables portfolio executives to achieve success.</p>
      
      <h2>Recognition Criteria</h2>
      <p>The Top 50 list evaluates private equity firms based on their governance practices, executive support systems, and track record of enabling portfolio company leadership to drive growth and operational excellence.</p>
      
      <h2>Our Approach</h2>
      <p>At MayFair Management, we believe in partnering with exceptional management teams and providing them with the resources, expertise, and strategic guidance needed to accelerate growth and create lasting value.</p>
      
      <h2>Looking Forward</h2>
      <p>This recognition reinforces our commitment to maintaining the highest standards of partnership with our portfolio company executives and continuing to build a platform that enables their success.</p>
    `,
    author: "MayFair Management",
    date: "2025-01-15",
    category: "Awards",
    image: "/news-images/logo.jpg",
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
    image: "/news-images/expansion.jpg",
    tags: ["portfolio", "expansion", "growth", "markets"]
  },
  {
    id: "industry-leadership-award",
    title: "MayFair Management Receives Industry Leadership Award",
    excerpt: "Recognition for our commitment to responsible investing and sustainable business practices across our portfolio.",
    content: `
      <p>MayFair Management has been honored with the Industry Leadership Award for our commitment to environmental, social, and governance (ESG) principles across our investment portfolio.</p>
      
      <h2>ESG Integration</h2>
      <p>Our approach to ESG integration goes beyond compliance, embedding sustainable practices into the core operations of our portfolio companies.</p>
      
      <h2>Measurable Impact</h2>
      <p>Over the past year, our portfolio companies have achieved a 25% reduction in carbon emissions and implemented comprehensive diversity and inclusion programs.</p>
    `,
    author: "ESG Team",
    date: "2025-01-05",
    category: "Awards",
    image: "/news-images/rewards.jpg",
    tags: ["esg", "sustainability", "leadership", "awards"]
  },
  {
    id: "new-investment-announcement",
    title: "MayFair Management Announces New Investment in Technology Sector",
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
    image: "/news-images/compass.jpg",
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
    image: "/news-images/update.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "MayFair-management-closes-sale-of-latite-roofing",
    title: "MayFair Management Closes Sale of Latite Roofing",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>New York– MayFair Management, Inc., a private equity firm focused on investing in and acquiring growing middle market companies across an array of industries, today announced that it has closed on the sale of Latite.  Financial terms of the private transaction were not disclosed.</p>

      <p>Latite Roofing is a leading roof installation service in Florida, and one of the largest companies in the country providing this service. Since it was founded in 1943, Latite has established a strong industry reputation and has evolved over time to serve multiple segments. Latite focuses on an array of roofing services including commercial new and re-roofing, residential new and re-roofing, as well as maintenance services for both spaces.  Latite is in an advantageous space in the Florida roofing market, the strongest roofing market in the US, and leverages its in house capabilities to provide unrivaled service levels to a loyal and reoccurring customer base. Having designed and completed some of Florida’s largest and most complex commercial roofing projects, the Company has earned the trust and loyalty of major Florida GC’s, HOA’s, and building consultants</p>
      
      <p>“Latite provided MayFair with an investment opportunity in the roofing industry in the high growth Florida market. Our strategy of providing residential and commercial services in both the new and re-roof segments was pivotal in providing a platform for stable growth over the long term.  The compelling growth characteristics of Florida, combined with the ability to perform work all year round drives secular growth across the economic cycle,” said George Henry, a Managing Director at MayFair Management.</p>

      <p>“Changes we implemented at Latite during our ownership include geographic expansion across the lucrative Orlando to Tampa corridor, addition of new services such as roof spraying and protection, and investment in technology to help operational performance. All these changes helped to grow topline as well as margins, while improving customer service,” added John Comino, Managing Director at MayFair Management.

      Capstone served as exclusive financial advisor and Finn Dixon and Herling served as legal advisor to MayFair Management.</p>

      <h2>About MayFair Management, Inc.</h>

      <p>MayFair Management Inc., founded in 1986, is a private equity firm focused on investing in and acquiring growing middle market companies across an array of industries. Headquartered in New York, MayFair Management invests in acquisitions of private companies, recapitalizations, corporate divestitures, management buyouts and growth equity for public and private companies. MayFair Management manages over $1.9 billion in fund commitments. For more information: www.mayfairmanage.com</p>

      <h2>About Latite</h>

      <p>Latite Roofing is a leading roof installation service in Florida, and one of the largest companies in the country providing this service. The Company offers new roof installations and re-roofing for both residential and commercial buildings.</p>
    `,
    author: "Portfolio Team",
    date: "2025-01-30",
    category: "Portfolio",
    image: "/news-images/top50.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "the-deal-pe-fights-to-assuage-stewardship-fears-among-enviro-founders",
    title: "The Deal- PE Fights to Assuage Stewardship Fears Among Enviro Founders",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>MayFair Management Co-Managing Partner, Tad Nedeau, discusses investing in the environmental services sector in a recent interview with The Deal. He highlights the sector’s recurring revenue dynamics drawing interest from middle market PE, MayFair ongoing partnership with founder-owned companies and the great wealth transfer underway as retiring Baby Boomers create deal opportunities.</p>
    `,
    author: "Portfolio Team",
    date: "2024-06-19",
    category: "Portfolio",
    image: "/news-images/logo.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "mid-market-ma-is-still-down-but-better-times-are-coming-in-q2-experts-say",
    title: "Mid-Market M&A is Still Down But Better Times are Coming in Q2, Experts Say",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>“We’ve noted a measurable increase in dealflow throughout Q1 2024 in both quantity and quality,” says MayFair Management Co-Managing Partner Tad Nedeau. “We expect this trend to continue into Q2. Dry powder continues to grow, the potential for continued easing of interest rates improves the general deal outlook, and pressure continues to build for firms to put money to work.</p>
    `,
    author: "Portfolio Team",
    date: "2024-04-03",
    category: "Portfolio",
    image: "/news-images/manda.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "acg-cup-northwest",
    title: "ACG Cup Northwest",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>MayFair Management principal, Matt Nacier, was honored to speak at ACG Cup Northwest on “Today’s Trends, Challenges and Opportunities Impacting the Transaction Environment” alongside other Private Equity industry professionals. ACG brought together an enthusiastic group of financial professionals and students in the region to learn about the different industries. It was a fantastic event for all!</p>
    `,
    author: "Portfolio Team",
    date: "2024-03-08",
    category: "Portfolio",
    image: "/news-images/handsake.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "privateequitycxo-and-falcon-partners-recognize-2024s-top-50-private-equity-firms-for-executives",
    title: "PrivateEquityCXO and Falcon Partners Recognize 2024’s Top 50 Private Equity Firms for Executives",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>MayFair Management is pleased to share that we have been recognized as one of Private Equity CXO’s (“PE-CXO”) Top 50 Private Equity Firms for Executives for 2024. The annual list highlights funds whose governance style and engagement create an environment that best enables portfolio executives to achieve success.</p>
    `,
    author: "Portfolio Team",
    date: "2024-02-21",
    category: "Portfolio",
    image: "/news-images/logo.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "middle-market-dealmakers-prepare-for-a-rebound",
    title: "Middle-Market Dealmakers Prepare for a Rebound",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>Middle Market Growth Special Issue</p>

      <h2>Title: “Middle-Market Dealmakers Prepare for a Rebound”</h2>

      <p>By: Britt Erica Tunic</p>

      <p>M&A experts are hopeful that 2024 will be a more fruitful dealmaking year, as seller valuation expectations begin to come down</p>

      <p>When New York City’s famed crystal ball dropped in Times Square on New Year’s Eve, millions of people watched as it heralded the start of 2024 and the blank slate of a new year. But long</p>

      <p>before the ball fell, experts within the M&A industry were looking into their own proverbial crystal balls to predict what the mergers and acquisitions landscape will look like in the year ahead. There are some significant differences in what dealmakers anticipate for 2024, yet a common expectation shared by all is that it will be a year of change—and largely for the better.</p>

      <p>According to the results of a survey of the ACG community, 55% of respondents expect an increase in deal activity in 2024, 27% expect activity will remain much the same as 2023, and only 18% anticipate a decline.  Following a year and a half of paltry M&A activity, due primarily to high interest rates, inflation, fears of a recession and a major disconnect between buyers and sellers regarding portfolio company valuations, there are widespread expectations that the floodgates will finally begin to open in 2024.</p>

      <p>“We’re not in the business of sitting on the sidelines. We’ve remained extremely active over the past two years, having closed on three platforms and multiple add-ons. We’re in the business of buying and selling companies and doing deals, and I expect 2024 will be a good year,” says Tad Nedeau, a co-managing partner at PE firm MayFair Management and head of the firm’s origination team. In fact, he says it would not be surprising to see a similar deal trajectory to what occurred after the 2008 credit crisis. “We saw this in ’08’-09, where in the following years, deal volume picked up. And I think we’re going to see that here again,” says Nedeau.</p>

    `,
    author: "Portfolio Team",
    date: "2024-01-10",
    category: "Portfolio",
    image: "/news-images/middle.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "privateequitycxo-and-falcon-partners-recognize-2024s-top-50-private-equity-firms-for-executivesspearheading-growth-with-the-MayFair-management-blueprint",
    title: "Spearheading Growth with the MayFair Management Blueprint",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>MayFair Management is a seasoned private equity firm that thrives in the lower middle market sector, with a three-decade illustrious history and a portfolio of more than 110 successful acquisitions.</p>
    `,
    author: "Portfolio Team",
    date: "2024-02-21",
    category: "Portfolio",
    image: "/news-images/top50.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "four-industry-leading-automotive-companies-unite-to-become-us-auto-supply",
    title: "Press Release: Four Industry-Leading Automotive Companies Unite to Become US Auto Supply",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <h2>US Auto Supply to Combine Over 200 Years of Success as Collision Services, Auto Body Toolmart, I/D/E/A and Sid Savage Become One Unified Brand</h2>

      <p>August 14, 2023 (Elgin, IL) – Four industry leading automotive brands – Collision Services, Auto Body Toolmart, I/D/E/A and Sid Savage – today unveil their new, unified identity as US Auto Supply, setting a new legacy in the automotive supply sector. Stemming from their roots with former parent company Whitewater Brands, this transformative move will see US Auto Supply harnessing over two centuries of combined expertise among the four brands to become the leading provider of automotive supplies and solutions to automotive repair companies, dealerships and hobbyists nationwide.</p>

      <p>With its roots as a catalog and online retailer under the four brands, US Auto Supply has unveiled its newly designed one-stop online platform, delivering a wider array of the best products and services through a streamlined shopping experience. US Auto Supply’s customer base can expect a deeper level of expertise and product knowledge from one united and growing team that is constantly monitoring the marketplace to deliver the best value, exemplifying the company’s mission to partner with its customers through innovation, quality and service.</p>

      <p>“We see this rebranding as not just a change in name but a renewed commitment to our vendors, customers and the automotive industry,” said Joel Marica, President of US Auto Supply. “Our individual brands have stood alone for many years as category leaders, and by unifying as US Auto Supply, we are bringing together the best of each to create a single entity that is more than the sum of its parts. This rebrand signals a new era for us, and we couldn’t be more thrilled to embark on this journey alongside our valued partners and customers.”</p>

      <p>Encompassing products across diverse automotive categories including parts handling, equipment, repair tools (glass, aluminum, steel, plastic), painting and refinishing, customizable marketing and promotional items, selling and advertising tools, front office administration and workflow, US Auto Supply’s unique product mix is all geared toward the same goal: improving the efficiency, productivity, profitability, and employee and customer experience of its clientele.</p>

      <p>In addition to over 20,000 current product offerings, US Auto Supply has immediate plans to offer updates on current best-selling products, with improved delivery options and competitive price points to show their commitment to a growing customer base and establish their position as the go to industry partner to collision and mechanical repair shops, dealerships, restoration businesses, DIY enthusiasts and hobbyists.</p>

      <p>US Auto Supply is committed to making every customer feel appreciated and well-served, whether they’re an experienced professional or a car hobbyist. Explore more or shop at US Auto Supply’s updated online platform by visiting www.usautosupply.com.</p>
    `,
    author: "Portfolio Team",
    date: "2023-12-21",
    category: "Portfolio",
    image: "/news-images/press.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "private-market-talks-episode-8-scaling-founder-owned-businesses-with-MayFair-managements-matt-nacier",
    title: "Private Market Talks Episode 8: Scaling Founder-Owned Businesses with MayFair Management’s Matt Nacier",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>On the latest episode of Private Market Talks, we dive into the world of private equity with Matt Nacier, principal at MayFair Management and member of the firm’s origination team. MayFair Management is a middle market-focused private equity firm and an owner-operator in the truest sense.</p>
    `,
    author: "Portfolio Team",
    date: "2023-06-06",
    category: "Portfolio",
    image: "/news-images/top50.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "MayFair-management-acquires-banker-wire",
    title: "MayFair Management acquires Banker Wire",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>Banker Wire is a wire mesh product manufacturer. MayFair MDs Pieter Kodde and George Henry led the transaction.</p>

      <p>This investment in Banker Wire is MayFair sixth platform investment via MayFair Equity Fund V.</p>

      <p>MayFair is a private equity firm focused on investing in and acquiring growing middle-market companies.</p>
      
      <p>MayFair Management has acquired Banker Wire, a wire mesh product manufacturer. No financial terms of the transaction were disclosed.</p>
      
      <p>Banker Wire is headquartered in Mukwonago, Wisconsin. Pieter Kodde and George Henry, managing directors at MayFair Management, led the transaction. The other team members included in the deal were Nico Vega Llona, Griffin Blake-Ward and Michael Morris.</p>
      
      <p>“Under MayFair stewardship, we believe Banker Wire can aggressively grow sales, maintain strong margins through executing on operational efficiencies and grow organically in its existing and adjacent markets, ” said Henry. “We also believe inorganic growth initiatives can position Banker Wire for expansion into the high-margin filtration, border fencing, and mining markets.”</p>
      
      <p>MayFair investment in Banker Wire marks its sixth platform investment via MayFair Equity Fund V.</p>
      
      <p>MayFair is a private equity firm focused on investing in and acquiring growing middle-market companies across an array of industries. The firm is headquartered in New York. It manages $1.9 billion total fund commitments.

MayFair was advised by Loeb & Loeb.</p>
    `,
    author: "Portfolio Team",
    date: "2023-03-14",
    category: "Portfolio",
    image: "/news-images/logo.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "pe-cxo-and-falcon-recognize-the-top-50-private-equity-firms-for-executives-2023",
    title: "PE-CXO and Falcon Recognize the Top 50 Private Equity Firms for Executives 2023",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>The Annual Top 50 Private Equity Firms for Executives highlights the funds whose governance style, engagement and fit are seen as best enabling their executives to achieve success. The winners were selected through a collaboration between PrivateEquityCXO (PE-CXO) and Falcon Partners. PE-CXO is the world’s largest community of private equity-backed executives. Falcon Partners is a leading retained executive search firm exclusively serving private equity firms and their portfolio companies.</p>
    `,
    author: "Portfolio Team",
    date: "2023-02-14",
    category: "Portfolio",
    image: "/news-images/cxo.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "business-wire-pe-cxo-and-falcon-recognize-the-top-50-private-equity-firms-for-executives",
    title: "Business Wire: PE-CXO and Falcon Recognize the Top 50 Private Equity Firms for Executives",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>PE-CXO/Falcon’s Nine Dimensions of Governance Fit® provides a framework that can help sponsors and executives ensure a successful partnership.</p>

      <p>Exclusive insights provided by more than 1,000 sponsor-backed executives helped to identify the top 50 private equity funds whose governance style, engagement, and fit are seen as best enabling their portfolio company executives to succeed.</p>
    `,
    author: "Portfolio Team",
    date: "2023-02-14",
    category: "Portfolio",
    image: "/news-images/top50.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "lenexa-based-barrier-cos-acquires-local-competitor-as-part-of-roll-up-strategy",
    title: "Lenexa-based Barrier Cos. acquires local competitor as part of roll-up strategy",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>By James Dornbrook</p>

      <p>Staff Writer, Kansas City Business Journal</p>

      <p>Lenexa-based Barrier Cos. acquired two competitors, Stilwell-based Fire Door Solutions and a company in Florida. They are part of an effort to build a leading nationwide fire and life safety compliance business.</p>
    `,
    author: "Portfolio Team",
    date: "2022-08-10",
    category: "Portfolio",
    image: "/news-images/barrier.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "desch-plantpak-awarded-best-managed-company-2021-2022",
    title: "Desch Plantpak awarded Best Managed Company 2021-2022",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <h2>Desch Plantpak awarded Best Managed Company 2021-2022</h2>

      <p>MayFair is thrilled to announce that Desch Plantpak is acclaimed to be amongst the Best Managed Dutch Companies of 2021-2022 by Deloitte. The program assesses the strategy, operations and culture, as well as the degree of innovation and the financial results of the participating companies. This year, for the first time, participating companies were also evaluated on the extent to which sustainability was incorporated into their business operations. Congratulations to the entire Desch Plantpak team on this impressive accreditation!</p>
    `,
    author: "Portfolio Team",
    date: "2022-08-10",
    category: "Portfolio",
    image: "/news-images/detch.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
  {
    id: "MayFair-sees-nearly-fivefold-investment-gain-with-schumacher-electric-sale",
    title: "MayFair Sees Nearly Fivefold Investment Gain With Schumacher Electric Sale",
    excerpt: "Strong performance across our portfolio companies with several achieving record revenue and profitability milestones.",
    content: `
      <p>Wall Street Journal</p>
      
      <p>By Luis Garcia</p>
      
      <p>MayFair Management earned nearly five times its investment in Schumacher Electric Corp. through its sale of the battery-charger maker roughly 18 months after buying the company, according to a senior MayFair executive.</p>
      
      <p>Fort Worth, Texas-based Schumacher more than doubled its earnings before interest, taxes, depreciation and amortization under MayFair ownership, said Thomas Callahan, a managing director at the New York-based private-equity firm. He added that the 4.9 multiple on invested capital generated by… </p>
    `,
    author: "Portfolio Team",
    date: "2022-08-10",
    category: "Portfolio",
    image: "/news-images/logo.jpg",
    tags: ["performance", "portfolio", "quarterly", "results"]
  },
];