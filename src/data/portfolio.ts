export interface Investment {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string;
  sector: string;
  fundLevel: string;
  website: string;
  image?: string;
  location?: string;
}

export interface AllInvestmentItem {
  title: string;
  fundLevel: string;
  website: string;
  description: string;
}

export const portfolioData = {
  hero: {
    title: "MayFair Management",
    subtitle: "companies and funds across many sectors.",
    description: "has completed over 110 transactions and has more than 1.9 billion under management."
  },

  investments: [
    {
      id: "medtech-innovations",
      name: "MedTech Innovations",
      category: "HEALTHCARE",
      description: "Leading medical device manufacturer specializing in surgical instruments and diagnostic equipment.",
      details: "Advanced medical technology solutions serving hospitals and healthcare providers across North America.",
      sector: "Healthcare",
      fundLevel: "Fund III",
      website: "https://medtechinnovations.com"
    },
    {
      id: "cloudtech-solutions",
      name: "CloudTech Solutions",
      category: "TECHNOLOGY",
      description: "Enterprise cloud infrastructure provider offering scalable SaaS solutions to Fortune 500 companies.",
      details: "Comprehensive cloud migration and management services with 99.9% uptime guarantee.",
      sector: "Technology",
      fundLevel: "Fund II",
      website: "https://cloudtechsolutions.com"
    },
    {
      id: "fintech-pro",
      name: "FinTech Pro",
      category: "FINANCIAL SERVICES",
      description: "Digital banking platform revolutionizing small business financial services and lending.",
      details: "AI-powered financial solutions serving over 50,000 small and medium businesses nationwide.",
      sector: "Financial Services",
      fundLevel: "Fund III",
      website: "https://fintechpro.com"
    },
    {
      id: "green-energy-systems",
      name: "Green Energy Systems",
      category: "ENERGY",
      description: "Renewable energy infrastructure developer focused on solar and wind power projects.",
      details: "Sustainable energy solutions with over 500MW of installed capacity across multiple states.",
      sector: "Energy",
      fundLevel: "Fund II",
      website: "https://greenenergysystems.com"
    },
    {
      id: "logistics-tech",
      name: "LogisticsTech",
      category: "LOGISTICS",
      description: "Supply chain optimization platform using AI and machine learning for warehouse management.",
      details: "Automated logistics solutions reducing operational costs by 30% for e-commerce businesses.",
      sector: "Logistics",
      fundLevel: "Fund I",
      website: "https://logisticstech.com"
    },
    {
      id: "biotech-research",
      name: "BioTech Research",
      category: "BIOTECHNOLOGY",
      description: "Pharmaceutical research company developing innovative treatments for rare diseases.",
      details: "Pipeline of 12 drug candidates with 3 in Phase II clinical trials for orphan diseases.",
      sector: "Biotechnology",
      fundLevel: "Fund III",
      website: "https://biotechresearch.com"
    }
  ],

  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "What our partners say about working with Lincolnshire Management",
    quotes: [
      {
        id: 1,
        text: "The team at Lincolnshire has the in-house operational expertise, determination and competitive drive to assist management teams in turning around businesses when they get off track. They do it very successfully.",
        author: "Dave Rapley",
        company: "CEO, Aerosim Technologies"
      },
      {
        id: 2,
        text: "Lincolnshire Management's strategic guidance and industry expertise have been instrumental in our company's growth and success. Their hands-on approach and deep understanding of our market made all the difference.",
        author: "Sarah Johnson",
        company: "CEO, MedTech Innovations"
      },
      {
        id: 3,
        text: "Working with Lincolnshire has been transformative for our business. Their operational expertise and network of industry contacts helped us scale faster than we ever imagined possible.",
        author: "Michael Chen",
        company: "Founder, CloudTech Solutions"
      },
      {
        id: 4,
        text: "The partnership with Lincolnshire Management brought not just capital, but invaluable strategic insights that helped us navigate complex market challenges and emerge stronger.",
        author: "Jennifer Martinez",
        company: "President, Green Energy Systems"
      }
    ]
  },

  allInvestments: {
    title: "ALL INVESTMENTS",
    investments: [
      {
        name: "3SI Security Systems, Inc.",
        description: "Manufactures and supplies commercial electronic security systems for cash protection"
      },
      {
        name: "Abbiamo",
        description: "Specialty retail and e-commerce platform for luxury fashion and accessories"
      },
      {
        name: "Allison",
        description: "Leading manufacturer of commercial-duty automatic transmissions and hybrid propulsion systems"
      },
      {
        name: "American Coach Lines, Inc.",
        description: "Premium charter bus and transportation services provider"
      },
      {
        name: "AML1, Inc.",
        description: "Advanced manufacturing and logistics solutions for industrial applications"
      },
      {
        name: "AMPORTS, Inc.",
        description: "Automotive import and export services with specialized port facilities"
      },
      {
        name: "Athletic Club Holdings, LLC",
        description: "Premium fitness and wellness club management company"
      },
      {
        name: "Automatic Bar Controls, Inc.",
        description: "Beverage dispensing systems and equipment for hospitality industry"
      },
      {
        name: "Banker Wire",
        description: "Architectural and industrial wire mesh manufacturing solutions"
      },
      {
        name: "Bankruptcy Management Solutions, LLC",
        description: "Specialized financial restructuring and bankruptcy consulting services"
      },
      {
        name: "Cobra Industries, Inc.",
        description: "Industrial manufacturing and precision engineering solutions"
      },
      {
        name: "Color Control Inc.",
        description: "Color management and quality control systems for printing industry"
      },
      {
        name: "Component InterTechnologies, Inc.",
        description: "Electronic component distribution and supply chain management"
      },
      {
        name: "Computer Technology Solutions Corp.",
        description: "IT infrastructure and managed technology services provider"
      },
      {
        name: "Conway Acquisition Co. (Uniblend Spinners)",
        description: "Textile manufacturing and fiber processing equipment"
      },
      {
        name: "Credentials Services International, Inc.",
        description: "Professional credentialing and certification services"
      },
      {
        name: "Crosscom",
        description: "Telecommunications infrastructure and network solutions"
      },
      {
        name: "Custom Alloy Corp.",
        description: "Specialized metal alloy manufacturing and processing"
      },
      {
        name: "Cutters Wireline Service Group",
        description: "Oil and gas wireline services and downhole equipment"
      },
      {
        name: "Cybergenics Corp.",
        description: "Nutritional supplements and health products manufacturer"
      },
      {
        name: "Dalbo",
        description: "Agricultural equipment and machinery manufacturing"
      },
      {
        name: "DSG",
        description: "Digital solutions and software development services"
      },
      {
        name: "Energy Manufacturing, Inc.",
        description: "Renewable energy equipment and systems manufacturing"
      },
      {
        name: "Excelsior Radio Networks, Inc.",
        description: "Radio broadcasting and media network operations"
      },
      {
        name: "Fabbri",
        description: "Italian food products and specialty ingredients distributor"
      },
      {
        name: "Fallon Visual Products Corp.",
        description: "Visual display and signage solutions for retail and commercial use"
      },
      {
        name: "Flexstar Technology, Inc.",
        description: "Flexible electronics and advanced materials technology"
      },
      {
        name: "Flight Training Acquisitions",
        description: "Aviation training services and pilot education programs"
      },
      {
        name: "Glasssalum International Corp.",
        description: "Architectural glass and aluminum systems manufacturer"
      },
      {
        name: "Golden Sun Feeds, Inc.",
        description: "Animal feed and nutrition products for livestock industry"
      },
      {
        name: "Holley Performance Parts",
        description: "High-performance automotive parts and racing components"
      },
      {
        name: "Imperial Products, Inc.",
        description: "Industrial products and manufacturing solutions"
      },
      {
        name: "Kaitlyn Beach, Inc.",
        description: "Coastal development and resort management services"
      },
      {
        name: "Latite",
        description: "Roofing materials and building products manufacturer"
      },
      {
        name: "Linq Industrial Fabrics, Inc.",
        description: "Technical textiles and industrial fabric solutions"
      },
      {
        name: "Mace Sod Service, Inc.",
        description: "Landscaping and turf management services"
      },
      {
        name: "Mid-South Bolt and Screw Co., Inc.",
        description: "Industrial fasteners and hardware distribution"
      },
      {
        name: "National Pen Company",
        description: "Promotional products and custom printing services"
      },
      {
        name: "NexCycle, Inc./Strategic Materials",
        description: "Recycling and waste management solutions"
      },
      {
        name: "NorthSound Press, Inc.",
        description: "Commercial printing and publishing services"
      },
      {
        name: "NSI",
        description: "Network systems integration and IT consulting"
      },
      {
        name: "Paddock Pool Construction Co.",
        description: "Swimming pool construction and aquatic facility development"
      },
      {
        name: "PADI",
        description: "Scuba diving training and certification programs"
      },
      {
        name: "Patterson Gear and Machine, Inc.",
        description: "Precision machining and gear manufacturing services"
      },
      {
        name: "Peripheral Computer Support, Inc.",
        description: "Computer hardware and technical support services"
      },
      {
        name: "Phoenix Brands",
        description: "Consumer products and brand management company"
      },
      {
        name: "Polaris Pool Systems, Inc.",
        description: "Pool equipment and water treatment systems"
      },
      {
        name: "Powerhouse",
        description: "Energy generation and power systems solutions"
      },
      {
        name: "Prince Sports, Inc.",
        description: "Tennis and racquet sports equipment manufacturer"
      },
      {
        name: "Riddell Sports Group, Inc.",
        description: "Athletic equipment and protective gear for sports"
      },
      {
        name: "Remedia",
        description: "Healthcare remediation and medical waste management"
      },
      {
        name: "RORC",
        description: "Research and development consulting services"
      },
      {
        name: "Schumacher Electric Corporation",
        description: "Battery chargers and automotive electrical equipment"
      },
      {
        name: "Sight & Sound Distributing Co.",
        description: "Audio-visual equipment distribution and installation"
      },
      {
        name: "SubLine Holdings, Inc.",
        description: "Submarine cable and underwater infrastructure services"
      },
      {
        name: "Transcraft Corporation",
        description: "Commercial trailer and transportation equipment manufacturing"
      },
      {
        name: "True Sports",
        description: "Sports equipment and athletic gear retailer"
      },
      {
        name: "Visual Products Corp.",
        description: "Visual communication and display technology solutions"
      },
      {
        name: "Wabash",
        description: "Transportation equipment and logistics solutions"
      },
      {
        name: "US Auto Supply",
        description: "Automotive parts and accessories distribution"
      },
      {
        name: "Williams Machine & Tool, Inc.",
        description: "Precision machining and manufacturing tools"
      }
    ]
  }
};