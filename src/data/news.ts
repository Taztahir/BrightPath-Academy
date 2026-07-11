export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'Event' | 'Announcement' | 'Achievement';
  description: string;
  image: string;
  content: string;
  badgeText?: string;
  tags?: string[];
  subheadings?: {
    title: string;
    text: string;
  }[];
  quote?: string;
  reminders?: string[];
}

export const newsData: NewsItem[] = [
  {
    id: 'pa-day-professional-development-updates',
    title: 'PA Day for Elementary and Secondary Schools: Professional Development Updates',
    date: 'July 04, 2024',
    category: 'Event',
    badgeText: 'SCHOOL ACTIVITY - JULY 4',
    description: 'Our educators are coming together for a day of specialized training focused on inclusive pedagogy and digital literacy advancements.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1200',
    content: 'Every professional development day at BrightPath Academy is an opportunity to reflect on our craft. This upcoming July 4th, our entire faculty will participate in a series of workshops designed to integrate the latest educational technologies with our core values of empathy and excellence.',
    tags: ['Professional Development', 'Calendar', 'Teacher Training'],
    quote: 'Education is not just about the transfer of knowledge, but the cultivation of an environment where curiosity thrives without barriers.',
    subheadings: [
      {
        title: 'Focus on Inclusive Pedagogy',
        text: 'The primary focus of this session centers on inclusivity in the classroom. We are inviting guest speakers from leading educational research institutes to provide practical strategies for supporting students with diverse learning profiles, fostering classrooms where every student feels seen and understood, and utilizing innovative assessment methods.'
      },
      {
        title: 'Digital Literacy & Safety',
        text: 'In the afternoon, faculty will delve into specialized tracks related to the Humanities and Mathematics curricula. We introduce new, hybrid STEM platforms which prioritize collaboration and peer-to-peer review, while outlining safety guidelines for online work. These tools are designed to facilitate seamless hybrid learning experiences for students, while maintaining the privacy and security protocols required by modern educational environments.'
      }
    ],
    reminders: [
      'No classes for all students on Thursday, July 4.',
      'School offices remain open for administrative inquiries from 9:00 AM to 3:00 PM.',
      'Regular class schedules resume on Friday, July 5.'
    ]
  },
  {
    id: 'new-sustainable-playgrounds-project-launched',
    title: 'New Sustainable Playgrounds Project launched',
    date: 'June 18, 2024',
    category: 'Event',
    badgeText: 'CAMPUS LIFE',
    description: 'Students can now enjoy new equipment built entirely from recycled materials and design...',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800',
    content: 'BrightPath Academy is proud to announce the launch of our new Sustainable Playgrounds Project. Rebuilding our outdoor recreational zones using 100% recycled materials and eco-friendly structures, this project provides a safe, active, and environmentally responsible space for students. The design incorporates interactive sensory stations, climbing logs, and climbing walls that help develop physical agility while teaching kids the values of environmental stewardship and circular economics.',
    tags: ['Sustainability', 'Campus Life', 'Eco-Friendly']
  },
  {
    id: 'stem-excellence-national-science-fair-winners',
    title: 'STEM Excellence: National Science Fair Winners',
    date: 'June 12, 2024',
    category: 'Achievement',
    badgeText: 'ACADEMICS',
    description: 'BrightPath students secured the top three spots at the Regional STEM Innovation Challenge...',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800',
    content: 'BrightPath Academy students achieved phenomenal success at the Regional STEM Innovation Challenge this week, securing first, second, and third place. The winning projects focused on custom automated agricultural monitors, local water filtration techniques, and smart assistive reading devices. These achievements represent the strength of our STEM elective programs and hands-on laboratory experiences.',
    tags: ['STEM', 'Academics', 'Science', 'Winners']
  },
  {
    id: 'behind-the-scenes-of-the-tempest',
    title: 'Behind the Scenes of "The Tempest" Production',
    date: 'May 20, 2024',
    category: 'Announcement',
    badgeText: 'ARTS',
    description: 'Our Drama Department shares months of hard work and creative passion of the cast and crew...',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=800',
    content: 'The BrightPath Drama Department has completed rehearsals and set builds for Shakespeare’s "The Tempest". Our student cast and crew spent over three months preparing state-of-the-art stage setups, handmade costumes, and custom digital backing projections. Under the guidance of our drama directors, the production promises a magical experience for our school community.',
    tags: ['Drama', 'Arts', 'Theater', 'Campus Life']
  },
  {
    id: 'annual-science-innovation-fair',
    title: 'Annual Science & Innovation Fair',
    date: 'October 24, 2024',
    category: 'Event',
    description: 'Join us for a day of discovery as our students showcase their ground-breaking projects and creative solutions to global...',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800',
    content: 'Our annual Science & Innovation Fair brought together bright minds from all grade levels to present creative solutions to modern-day challenges. From renewable energy models to bio-degradable plastic alternatives, the auditorium was buzzing with innovative concepts. Parents, faculty, and industry judges were deeply impressed by the depth of research and passion exhibited by our students. Outstanding project awards were distributed at the closing ceremony, celebrating the hard work and dedication of all participants.'
  },
  {
    id: 'national-mathematics-champions',
    title: 'National Mathematics Champions',
    date: 'October 18, 2024',
    category: 'Achievement',
    description: 'We are incredibly proud to announce that our senior Math team has secured first place in the National Collegiate...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    content: 'BrightPath Academy senior mathematics team has achieved a historic victory at the National Mathematics Championship. Competing against over 150 top schools nationwide, our students demonstrated exceptional analytical and problem-solving skills to secure the first-place trophy. The rigorous preparation led by our mathematics department over the last six months culminated in this well-deserved triumph. We extend our warmest congratulations to the team members for setting a new benchmark of academic excellence.'
  },
  {
    id: 'new-creative-arts-wing-opening',
    title: 'New Creative Arts Wing Opening',
    date: 'October 03, 2024',
    category: 'Announcement',
    description: 'Our much-anticipated extension is complete. The new wing features state-of-the-art studios for digital media, sculpture...',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800',
    content: 'We are thrilled to announce the official opening of the new Creative Arts Wing at BrightPath Academy. Designed to inspire creativity and expression, this state-of-the-art facility features dedicated studios for digital media design, sculpture, pottery, painting, and a modern gallery hall to display student artwork. The new wing will expand our arts curriculum and provide students with professional-grade resources to hone their artistic talents and bring their visions to life.'
  },
  {
    id: 'autumn-symphony-concert',
    title: 'Autumn Symphony Concert',
    date: 'September 30, 2024',
    category: 'Event',
    description: 'The BrightPath Orchestra invites you to an evening of classical masterpieces and contemporary arrangements in our grand...',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800',
    content: 'The BrightPath Music Department is delighted to present the annual Autumn Symphony Concert. Featuring our talented student orchestra, concert band, and choir, the evening will showcase a curated selection of classical masterpieces alongside contemporary symphonic arrangements. Join us in the grand auditorium for a memorable night of musical brilliance. Tickets are free but must be reserved in advance through the school portal.'
  },
  {
    id: 'athletics-regional-finals-sweep',
    title: 'Athletics: Regional Finals Sweep',
    date: 'September 22, 2024',
    category: 'Achievement',
    description: 'Our athletic teams dominated the regional athletics tournament this weekend, bringing home trophies in soccer, ...',
    image: 'https://images.unsplash.com/photo-1526676001074-6fe5a3a6b97a?q=80&w=800',
    content: 'BrightPath Academy athletes made history this weekend at the Regional Athletics Finals. Through teamwork, resilience, and exceptional performance, our teams swept the championships in soccer, track and field events, and basketball. The school community gathered to welcome the champions back, celebrating their outstanding sportsmanship and dedication to athletic excellence. We are proud of our student-athletes and coaches for their hard work.'
  },
  {
    id: '2025-scholarship-applications-open',
    title: '2025 Scholarship Applications Open',
    date: 'September 15, 2024',
    category: 'Announcement',
    description: 'BrightPath is now accepting applications for the 2025 Academic and Merit Scholarships. Learn more about our...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
    content: 'Applications for the BrightPath Academy 2025 Academic and Merit Scholarships are officially open. We are committed to supporting exceptionally talented and motivated students who demonstrate academic brilliance, leadership qualities, or outstanding achievements in arts and sports. Scholarships cover up to 100% of tuition fees. Interested candidates can find eligibility criteria and application guidelines on our admissions portal. The deadline for submission is December 15, 2024.'
  },
  {
    id: 'new-robotics-lab-inauguration',
    title: 'Robotics Lab Inauguration',
    date: 'September 08, 2024',
    category: 'Announcement',
    description: 'A new milestone in our STEM curriculum. The newly inaugurated Robotics & AI Lab features 3D printers, testing grounds...',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800',
    content: 'BrightPath Academy has inaugurated its state-of-the-art Robotics & AI Lab. Funded by a generous alumni donation, the lab is equipped with the latest technology, including advanced microcontrollers, 3D printers, virtual reality learning tools, and dedicated testing arenas. The lab will support our new elective courses in Robotics and Artificial Intelligence, giving students hands-on experience in building and programming autonomous systems.'
  },
  {
    id: 'speech-debate-national-success',
    title: 'Speech & Debate Team Wins Nationals',
    date: 'August 28, 2024',
    category: 'Achievement',
    description: 'Our speech and debate society outperformed 50 regional teams to secure the National Championship trophy...',
    image: 'https://images.unsplash.com/photo-1544535830-9df3f56fff6a?q=80&w=800',
    content: 'The BrightPath Speech & Debate Society has returned victorious from the National Debate Championship. After engaging in intense rounds of argumentation on topics ranging from global economics to ethical technology, our students secured the first-place team trophy. Additionally, senior captain Eleanor Vance received the Best Speaker award. We are incredibly proud of their dedication, critical thinking, and eloquence.'
  },
  {
    id: 'fall-sports-registration-guidelines',
    title: 'Fall Sports Registration Open',
    date: 'August 22, 2024',
    category: 'Announcement',
    description: 'Get ready for a new season of athletics. Sign-ups for soccer, basketball, swimming, and track are now available on the portal...',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800',
    content: 'Registration for the Fall Athletics Program is officially open. BrightPath Academy offers competitive and recreational options across soccer, volleyball, cross-country, and swimming. All interested students must submit their physical clearance forms and register via the parent portal by September 5. We look forward to a healthy, active, and successful sports season!'
  },
  {
    id: 'summer-community-service-recap',
    title: 'Community Service Drive Impact',
    date: 'August 10, 2024',
    category: 'Event',
    description: 'During the summer break, our students completed over 1,200 hours of community service, supporting local food banks...',
    image: 'https://images.unsplash.com/photo-1559027615-cd4487df1365?q=80&w=800',
    content: 'This summer, BrightPath students demonstrated their commitment to character and community by volunteering over 1,200 collective hours. Initiatives included organising food drives, cleaning local parks, and tutoring primary school students. The school administration commends all volunteers for exemplifying our core value of empathy and making a tangible positive difference in the community.'
  },
  {
    id: 'ap-courses-excellence-recognition',
    title: 'AP Exam Success Rates Hit Record High',
    date: 'July 30, 2024',
    category: 'Achievement',
    description: 'Over 92% of our AP students scored a 4 or 5 in this year’s Advanced Placement examinations, surpassing global averages...',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800',
    content: 'BrightPath Academy is proud to report that our students have achieved record-breaking success in this year’s Advanced Placement (AP) exams. 92% of candidates secured a score of 4 or 5, demonstrating their deep academic readiness for higher education. We congratulate both the students for their rigorous academic focus and our AP faculty for their guidance.'
  },
  {
    id: 'welcome-new-faculty-members',
    title: 'Welcoming New Faculty to BrightPath',
    date: 'July 15, 2024',
    category: 'Announcement',
    description: 'Meet the new educators joining our team this academic year, bringing specialized expertise in Physics, Digital Arts, and Music...',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800',
    content: 'As we prepare for the upcoming school year, we are delighted to welcome six new members to our teaching faculty. They bring diverse international teaching experiences and advanced degrees in their respective fields, including physics, digital arts, and history. We look forward to the fresh perspectives and expertise they will bring to our classrooms.'
  },
  {
    id: 'campus-beautification-initiative',
    title: 'Green Campus Beautification Project',
    date: 'June 28, 2024',
    category: 'Event',
    description: 'Students and faculty gathered this weekend to plant native flora, build a butterfly garden, and install compost bins...',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800',
    content: 'The BrightPath Eco-Club led a highly successful Campus Beautification Project this Saturday. Over 80 student volunteers, along with parents and teachers, collaborated to plant native flowers, construct a new butterfly garden, and set up organic compost bins. This project aligns with our goal to reduce our carbon footprint and foster ecological stewardship among students.'
  },
  {
    id: 'young-authors-anthology-published',
    title: 'Young Authors Anthology Published',
    date: 'June 20, 2024',
    category: 'Achievement',
    description: 'Our creative writing club has compiled and published their annual anthology, featuring short stories, poems, and essays...',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=800',
    content: 'BrightPath Academy’s Creative Writing Club is proud to release its 2024 Young Authors Anthology, titled "Uncharted Horizons". The collection comprises 35 original pieces, including poetry, essays, and short stories. The print edition is available in the school library, and a digital version can be downloaded from our library portal.'
  }
];
