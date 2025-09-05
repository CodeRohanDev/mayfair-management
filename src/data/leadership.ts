export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description?: string;
  boardPositions?: string[];
  bio?: string;
  dealWork?: string;
}

export interface LeadershipSection {
  title: string;
  members: TeamMember[];
}

export const leadershipData = {
  hero: {
    title: "LEADERSHIP",
    backgroundImage: "/LEADERSHIP_background.jpg"
  },

  description: {
    text: "The diverse backgrounds of each member of the team brings a unique value-add to every investment, and the firm’s executives understand how to compliment and build upon on one another’s strengths to create the best outcomes for the firm’s portfolio companies, partners, and investors. Lincolnshire Management creates teams that truly understand how to provide the support and resources companies need to grow, how to align the interests of various stakeholders, and how to deliver lasting strategic value."
  },

  sections: {
    investmentCommittee: {
      title: "INVESTMENT COMMITTEE",
      members: [
        {
          id: "1",
          name: "Philip Kim",
          title: "Managing Partner",
          image: "/team/philKim.jpg",
          description: "Philip Kim is a Co-Managing Partner at Lincolnshire and a member of the Investment Committee. He also heads one of the two deal execution teams. In connection with his responsibilities at Lincolnshire, Phil holds or has held positions as a Director and/or Officer at various portfolio companies including Remedi8, Schumacher, Powerhouse, AMPORTS, Holley Performance Products, True Temper Sports, DHI Energy Service, Nursery Supplies and Desch Plantpak. His experience at Lincolnshire has involved a number of operational situations including extensive restructurings of companies through business and economic cycles, most notably with Wabash National, True Temper Sports, DHI Energy Service and Nursery Supplies. Prior to joining Lincolnshire in 2003, Phil was an Associate at Knickerbocker LLC, a private investment management firm, where he was primarily involved in the execution and management of alternative investments. He started his career as an Analyst at Fortress Investment Group LLC.",
          bio: "Phil is a graduate of Harvard University, and his passions include the performing arts. He studied viola and composition at Juilliard Pre-College, and continued performing and writing classical music at Harvard, where he received his A.B. in Economics.",
          boardPositions: ["Remedi8", "Schumacher", "Powerhouse", "AMPORTS", "Holley Performance Products", "True Temper Sports", "DHI Energy Service", "Nursery Supplies", "Desch Plantpak"],
          dealWork: "Phil's deal experience includes Remedi8, Schumacher, Powerhouse, AMPORTS, Holley Performance Products, True Temper Sports, Wabash National, DHI Energy Service, Nursery Supplies and Desch Plantpak."
        },
        {
          id: "2",
          name: "Mike Lyons",
          title: "Senior Partner",
          image: "/team/mikeLyons.jpg",
          description: "Michael focuses on healthcare and technology investments, leading due diligence and post-investment value creation initiatives.",
          boardPositions: ["HealthTech Solutions", "MedDevice Inc"],
          dealWork: "Mike's deal experience includes healthcare and technology investments across multiple portfolio companies, with a focus on value creation and operational improvements."
        },
        {
          id: "3",
          name: "George Henry",
          title: "Partner",
          image: "/team/georgeHenry.jpg",
          description: "Robert specializes in manufacturing and industrial investments, with expertise in operational improvements and strategic growth.",
          boardPositions: ["Board Member at Industrial Partners", "Advisory Board at Manufacturing Excellence"]
        },
        {
          id: "4",
          name: "TJ Maloney",
          title: "Principal",
          image: "/team/TJ_Maloney.jpg",
          description: "David leads investment analysis and market research, with a focus on emerging growth opportunities in technology and consumer sectors.",
          boardPositions: ["Board Observer at Growth Ventures", "Advisory Board at StartupTech"]
        },
        {
          id: "5",
          name: "Nedeau",
          title: "Vice President",
          image: "/team/Nedeau.jpg",
          description: "James manages portfolio company relationships and supports business development initiatives across multiple industry verticals.",
          boardPositions: ["Board Member at Consumer Brands Co", "Advisory Board at Retail Solutions"]
        }
      ]
    },

    investorRelations: {
      title: "INVESTOR RELATIONS",
      members: [
        {
          id: "betsy-corbin",
          name: "Betsy Corbin",
          title: "Investor Relations and Sustainability Officer",
          image: "/team/betsy-corbin.jpg",
          description: "Betsy Corbin is the Investor Relations and Marketing Director at Lincolnshire. She also serves as the firm's Sustainability Officer focused on the adherence to ESG criteria.",
          bio: "Betsy Corbin is the Investor Relations and Marketing Director at Lincolnshire. She also serves as the firm's Sustainability Officer focused on the adherence to ESG criteria. Lincolnshire was motivated to clearly communicate their commitment to Environmental, Social and Governance (ESG) and create a policy in line with what has already been practiced at the firm. Working with the Lincolnshire team and portfolio companies, Betsy developed Lincolnshire's ESG Policy. Together with the team at Lincolnshire, she continually looks for ways for Lincolnshire and the portfolio to uphold ESG best practices. Prior to joining Lincolnshire in 2015, Betsy worked at the New York location of the Garda Patent Gallery (Santa Fe, NM) as assistant to the Director and as a Sales Associate. Betsy holds a BA from Wheaton College. Betsy can be found on the weekends visiting favorite museum collections in New York or enjoying Central Park, of which she is a member of the Central Park Conservancy.",
          dealWork: "Betsy's work focuses on investor relations, marketing initiatives, and ESG policy development across all portfolio companies and investment activities."
        }
      ]
    },

    investmentProfessionals: {
      title: "INVESTMENT PROFESSIONALS",
      members: [
        {
          id: "6",
          name: "Sarah Miller",
          title: "Senior Associate",
          image: "/team/member6.jpg",
          description: "Sarah conducts financial analysis and market research for potential investments, specializing in healthcare and life sciences sectors.",
          boardPositions: ["Board Observer at BioTech Innovations"]
        },
        {
          id: "7",
          name: "Jennifer Garcia",
          title: "Associate",
          image: "/team/member7.jpg"
        },
        {
          id: "8",
          name: "Lisa Rodriguez",
          title: "Analyst",
          image: "/team/member8.jpg"
        },
        {
          id: "9",
          name: "Amanda Martinez",
          title: "Investment Associate",
          image: "/team/member9.jpg"
        },
        {
          id: "10",
          name: "Michelle Anderson",
          title: "Research Analyst",
          image: "/team/member10.jpg"
        },
        {
          id: "11",
          name: "Jessica Taylor",
          title: "Investment Analyst",
          image: "/team/member11.jpg"
        },
        {
          id: "12",
          name: "Ashley Thomas",
          title: "Junior Analyst",
          image: "/team/member12.jpg"
        },
        {
          id: "13",
          name: "Nicole Jackson",
          title: "Associate",
          image: "/team/member13.jpg"
        },
        {
          id: "14",
          name: "Stephanie White",
          title: "Senior Analyst",
          image: "/team/member14.jpg"
        },
        {
          id: "15",
          name: "Rachel Harris",
          title: "Investment Professional",
          image: "/team/member15.jpg"
        },
        {
          id: "16",
          name: "Michael Chen",
          title: "Portfolio Manager",
          image: "/team/member16.jpg"
        },
        {
          id: "17",
          name: "David Kim",
          title: "Investment Director",
          image: "/team/member17.jpg"
        },
        {
          id: "18",
          name: "Emily Watson",
          title: "Senior Analyst",
          image: "/team/member18.jpg"
        },
        {
          id: "19",
          name: "Robert Johnson",
          title: "Associate Director",
          image: "/team/member19.jpg"
        },
        {
          id: "20",
          name: "Lisa Chang",
          title: "Investment Associate",
          image: "/team/member20.jpg"
        }
      ]
    },

    seniorOperatingPartners: {
      title: "SENIOR OPERATING PARTNERS",
      members: [
        {
          id: "21",
          name: "Mark Thompson",
          title: "Senior Operating Partner",
          image: "/team/member21.jpg"
        },
        {
          id: "22",
          name: "Steven Clark",
          title: "Operating Partner",
          image: "/team/member22.jpg"
        }
      ]
    },

    seniorAdvisors: {
      title: "SENIOR ADVISORS",
      members: [
        {
          id: "23",
          name: "Charles Lewis",
          title: "Senior Advisor",
          image: "/team/member23.jpg"
        },
        {
          id: "24",
          name: "William Lee",
          title: "Advisory Board Member",
          image: "/team/member24.jpg"
        },
        {
          id: "25",
          name: "Richard Walker",
          title: "Strategic Advisor",
          image: "/team/member25.jpg"
        },
        {
          id: "26",
          name: "Thomas Hall",
          title: "Senior Advisor",
          image: "/team/member26.jpg"
        },
        {
          id: "27",
          name: "Daniel Allen",
          title: "Advisory Partner",
          image: "/team/member27.jpg"
        },
        {
          id: "28",
          name: "Christopher Young",
          title: "Senior Advisor",
          image: "/team/member28.jpg"
        },
        {
          id: "29",
          name: "Matthew King",
          title: "Strategic Advisor",
          image: "/team/member29.jpg"
        },
        {
          id: "30",
          name: "Anthony Wright",
          title: "Advisory Board",
          image: "/team/member30.jpg"
        }
      ]
    }
  }
};