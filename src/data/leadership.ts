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
    text: "The diverse backgrounds of each team member bring unique value to every investment, and the firm's executives understand how to complement and build upon one another's strengths to create the best outcomes for the firm's portfolio companies, partners, and investors. MayFair Management creates teams that truly understand how to provide the support and resources companies need to grow, how to align the interests of various stakeholders, and how to deliver lasting strategic value."
  },

  sections: {
    investmentCommittee: {
      title: "INVESTMENT COMMITTEE",
      members: [
        {
          id: "1",
          name: "Jane Decker",
          title: "Senior Partner",
          image: "/team/Jane.jpg",
          description: "Jane Decker is a Senior Partner at MayFair, recognized for his strategic leadership and deep expertise in private equity. He has played a pivotal role in driving the firm's growth, overseeing major investments, and mentoring the next generation of investment professionals. Jane is known for his collaborative approach, strong analytical skills, and commitment to delivering value for portfolio companies and investors.",
          boardPositions: ["HealthTech Solutions", "MedDevice Inc"],
          dealWork: "Jane's deal experience includes healthcare and technology investments across multiple portfolio companies, with a focus on value creation and operational improvements."
        },
        {
          id: "2",
          name: "Jeena Henry",
          title: "Partner",
          image: "/team/jeena.jpg",
          description: "Jeena Henry is a Partner at MayFair, known for his leadership in driving operational excellence and strategic growth across the firm's portfolio. He brings deep experience in private equity, with a focus on value creation, process improvement, and building high-performing teams. Jeena is recognized for his collaborative approach and his ability to deliver results in complex, fast-paced environments.",
          boardPositions: ["Board Member at Industrial Partners", "Advisory Board at Manufacturing Excellence"]
        },
        {
          id: "3",
          name: "Malone Easley",
          title: "Principal",
          image: "/team/malone.jpg",
          description: "Malone Easley is a Principal at MayFair, where he is responsible for leading investment analysis, due diligence, and market research across a range of sectors. He specializes in identifying and evaluating emerging growth opportunities, particularly within the technology and consumer industries. Malone is recognized for his analytical rigor, strategic insight, and collaborative approach to driving value for portfolio companies and investors.",
          boardPositions: ["Board Observer at Growth Ventures", "Advisory Board at StartupTech"]
        },
        {
          id: "4",
          name: "Diana Grace DuPont",
          title: "Vice President of Business",
          image: "/team/DianaGraceDupont.jpg",
          description: "Diana Grace DuPont is the Vice President of Operations and a member of the Board of Directors at MayFair. She brings a wealth of operational expertise and leadership to the firm, overseeing key initiatives and supporting the growth and success of portfolio companies. Diana is known for her collaborative approach and her ability to drive strategic value across diverse teams and industries.",
          bio: "Diana is a graduate of New York University, and her passions include the performing arts. She studied viola and composition at Juilliard Pre-College, and continued performing and writing classical music at Harvard, where she received her A.B. in Economics.",
          boardPositions: ["Remedi8", "Schumacher", "Powerhouse", "AMPORTS", "Holley Performance Products", "True Temper Sports", "DHI Energy Service", "Nursery Supplies", "Desch Plantpak"],
          dealWork: "Diana's deal experience includes Remedi8, Schumacher, Powerhouse, AMPORTS, Holley Performance Products, True Temper Sports, Wabash National, DHI Energy Service, Nursery Supplies and Desch Plantpak."
        },

        // {
        //   id: "5",
        //   name: "Morgan Sheppard",
        //   title: "Vice President",
        //   image: "/team/morgan.jpg",
        //   description: "Morgan Sheppard is a Vice President at MayFair, where she manages portfolio company relationships and supports business development initiatives across multiple industry verticals. She is known for her strong analytical skills, collaborative approach, and ability to drive value for both the firm and its portfolio companies. Morgan brings a wealth of experience in private equity and is dedicated to fostering growth and operational excellence.",
        //   boardPositions: ["Board Member at Consumer Brands Co", "Advisory Board at Retail Solutions"]
        // }
      ]
    },

    investorRelations: {
      title: "INVESTOR RELATIONS",
      members: [
        {
          id: "marguerite-milica",
          name: "Marguerite Milica",
          title: "Strategy Consultant",
          image: "/team/MargueriteMilica.jpg",
          description: "Marguerite Milica is a Senior Consultant at MayFair, specializing in investor relations and client communications. She brings extensive experience in private equity and financial services, supporting the firm's investor engagement, reporting, and relationship management efforts. Marguerite is known for her attention to detail, professionalism, and commitment to delivering exceptional service to investors.",
          bio: "Marguerite Milica is the Investor Relations and Marketing Director at MayFair. She also serves as the firm's Sustainability Officer focused on adherence to ESG criteria. MayFair was motivated to clearly communicate their commitment to Environmental, Social and Governance (ESG) and create a policy in line with what has already been practiced at the firm. Working with the MayFair team and portfolio companies, Marguerite developed MayFair's ESG Policy. Together with the team at MayFair, she continually looks for ways for MayFair and the portfolio to uphold ESG best practices. Prior to joining MayFair in 2015, Marguerite worked at the New York location of the Garda Patent Gallery (Santa Fe, NM) as assistant to the Director and as a Sales Associate. Marguerite holds a BA from Wheaton College. Marguerite can be found on the weekends visiting favorite museum collections in New York or enjoying Central Park, of which she is a member of the Central Park Conservancy.",
          dealWork: "Marguerite's work focuses on investor relations, marketing initiatives, and ESG policy development across all portfolio companies and investment activities."
        }
      ]
    },

    investmentProfessionals: {
      title: "INVESTMENT PROFESSIONALS",
      members: [
        {
          id: "6",
          name: "Marguerite Milica",
          title: "Strategy Consultant",
          image: "/team/Marguerite Milica.jpg",
          description: "Marguerite Milica is a Senior Consultant at MayFair, specializing in investor relations and client communications. She brings extensive experience in private equity and financial services, supporting the firm's investor engagement, reporting, and relationship management efforts. Marguerite is known for her attention to detail, professionalism, and commitment to delivering exceptional service to investors.",
          boardPositions: ["Board Observer at BioTech Innovations"]
        },
        {
          id: "7",
          name: "Johans Gustavsson",
          title: "Associate",
          image: "/team/johans.jpg"
        },


        {
          id: "8",
          name: "Operano A.G.",
          title: "Investment Associate",
          image: "/team/operano.jpg"
        },
        {
          id: "9",
          name: "Salen Anderson",
          title: "Research Analyst",
          image: "/team/salen.jpg"
        },

        {
          id: "10",
          name: "Jack Anno",
          title: "Research Analyst",
          image: "/team/jack.jpg"
        },
        {
          id: "11",
          name: "Justin Hall",
          title: "Research Analyst",
          image: "/team/justin.jpg"
        },
        {
          id: "12",
          name: "Bryce Smith",
          title: "Research Analyst",
          image: "/team/bryce.jpg"
        },
        {
          id: "13",
          name: "Clay Hogue",
          title: "Research Analyst",
          image: "/team/clay.jpg"
        },
        {
          id: "14",
          name: "Tony Rago",
          title: "Research Analyst",
          image: "/team/tony.jpg"
        },
        {
          id: "15",
          name: "Nick Granata",
          title: "Analyst",
          image: "/team/nick.jpg"
        },

      ]
    },

    seniorOperatingPartners: {
      title: "SENIOR OPERATING PARTNERS",
      members: [
        {
          id: "21",
          name: "Serena Grace Monroe",
          title: "Senior Operating Partner",
          image: "/team/SerenaGraceMonroe.jpg"
        },
        {
          id: "22",
          name: "Aleksandra Vyshnevetska",
          title: "Operating Partner",
          image: "/team/AleksandraVyshnevetska.jpg"
        }
      ]
    },

    seniorAdvisors: {
      title: "SENIOR ADVISORS",
      members: [
        {
          id: "23",
          name: "Serena Grace Monroe",
          title: "Chief Operating Officer",
          image: "/team/Serena Grace Monroe.jpg"
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