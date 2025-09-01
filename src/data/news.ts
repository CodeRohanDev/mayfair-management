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
    id: "lincolnshire-heritage-sites",
    title: "Exploring Lincolnshire's Historic Heritage Sites",
    excerpt: "Discover the rich history and cultural significance of Lincolnshire's most treasured heritage locations.",
    content: `
      <p>Lincolnshire is home to some of England's most remarkable heritage sites, each telling a unique story of our county's rich past.</p>
      
      <h2>Lincoln Cathedral</h2>
      <p>Standing majestically over the city, Lincoln Cathedral was once the world's tallest building. This Gothic masterpiece continues to inspire visitors from around the globe with its stunning architecture and historical significance.</p>
      
      <h2>Tattershall Castle</h2>
      <p>This 15th-century brick tower house offers breathtaking views across the Lincolnshire countryside. Built by Ralph Cromwell, it represents one of the finest examples of medieval brick architecture in England.</p>
      
      <h2>Burghley House</h2>
      <p>One of the largest and grandest houses of the Elizabethan Age, Burghley House showcases exquisite art collections and beautiful gardens that have been carefully preserved for centuries.</p>
    `,
    author: "Heritage Team",
    date: "2024-12-15",
    category: "Heritage",
    image: "/hero banner image.jpg",
    tags: ["heritage", "history", "tourism", "architecture"]
  },
  {
    id: "local-business-spotlight",
    title: "Supporting Local Businesses in Lincolnshire",
    excerpt: "Highlighting the innovative entrepreneurs and established businesses that make our county thrive.",
    content: `
      <p>Lincolnshire's economy is built on the foundation of strong local businesses, from traditional family enterprises to cutting-edge startups.</p>
      
      <h2>Agricultural Innovation</h2>
      <p>Our county leads the way in agricultural technology, with local farms implementing sustainable practices and innovative growing techniques that feed the nation.</p>
      
      <h2>Manufacturing Excellence</h2>
      <p>From aerospace components to food processing, Lincolnshire manufacturers are renowned for their quality and reliability in both domestic and international markets.</p>
      
      <h2>Tourism and Hospitality</h2>
      <p>Our local hospitality sector provides warm welcomes to visitors while showcasing the best of Lincolnshire's culture, cuisine, and countryside.</p>
    `,
    author: "Economic Development Team",
    date: "2024-12-10",
    category: "Business",
    image: "/hero banner image.jpg",
    tags: ["business", "economy", "local", "innovation"]
  },
  {
    id: "lincolnshire-countryside-walks",
    title: "Best Walking Routes in Lincolnshire Countryside",
    excerpt: "Discover scenic walking trails that showcase the natural beauty of our county's diverse landscapes.",
    content: `
      <p>Lincolnshire offers some of England's most beautiful and diverse walking experiences, from coastal paths to woodland trails.</p>
      
      <h2>The Lincolnshire Wolds</h2>
      <p>Designated as an Area of Outstanding Natural Beauty, the Wolds provide rolling hills and picturesque villages perfect for day walks.</p>
      
      <h2>Coastal Walks</h2>
      <p>Our stunning coastline offers dramatic cliff walks, sandy beach strolls, and wildlife watching opportunities.</p>
    `,
    author: "Tourism Team",
    date: "2024-12-08",
    category: "Tourism",
    image: "/hero banner image.jpg",
    tags: ["walking", "countryside", "tourism", "nature"]
  },
  {
    id: "lincolnshire-food-festivals",
    title: "Celebrating Lincolnshire's Food Heritage",
    excerpt: "From traditional sausages to artisan cheeses, explore the culinary traditions that make our county famous.",
    content: `
      <p>Lincolnshire has a proud culinary heritage that continues to evolve with modern tastes while honoring traditional recipes.</p>
      
      <h2>Famous Lincolnshire Sausages</h2>
      <p>Our county's signature sausages are renowned throughout the UK for their distinctive herbs and quality ingredients.</p>
      
      <h2>Local Produce Markets</h2>
      <p>Weekly farmers' markets showcase the best of local produce, from fresh vegetables to artisan baked goods.</p>
    `,
    author: "Cultural Team",
    date: "2024-12-05",
    category: "Culture",
    image: "/hero banner image.jpg",
    tags: ["food", "culture", "festivals", "local-produce"]
  },
  {
    id: "lincolnshire-education-excellence",
    title: "Educational Excellence in Lincolnshire Schools",
    excerpt: "Highlighting the achievements and innovations in our county's educational institutions.",
    content: `
      <p>Lincolnshire's schools and colleges are achieving remarkable results through innovative teaching methods and community partnerships.</p>
      
      <h2>STEM Programs</h2>
      <p>Our schools are leading the way in science, technology, engineering, and mathematics education.</p>
      
      <h2>Community Partnerships</h2>
      <p>Strong links between schools and local businesses provide students with real-world learning opportunities.</p>
    `,
    author: "Education Team",
    date: "2024-12-03",
    category: "Education",
    image: "/hero banner image.jpg",
    tags: ["education", "schools", "STEM", "community"]
  }
];