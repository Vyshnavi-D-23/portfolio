/**
 * Central portfolio data — generated from Vyshnavi's resume (Vyshnavi_Resume_Updated_v2_235d9f17.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' };
const ocean: Palette = { from: '#061a2a', via: '#0d3d5f', to: '#060b14', accent: '#38bdf8' };
const violet: Palette = { from: '#1a0b2e', via: '#3d1668', to: '#0b0614', accent: '#c084fc' };
const amber: Palette = { from: '#2a1a06', via: '#6e400c', to: '#0f0a04', accent: '#fbbf24' };
const jade: Palette = { from: '#042018', via: '#0c4a38', to: '#040d0a', accent: '#34d399' };

export const profile = {
  fullName: 'Durvasula Sita Sri Vyshnavi',
  displayName: 'Vyshnavi Durvasula',
  firstName: 'VYSHNAVI',
  originalLabel: 'A VYSHNAVI ORIGINAL',
  role: 'Computer Science & IT Student • Software Developer',
  tagline: ['CS & Information Technology', 'Strongest: C Language', 'Web Technologies'],
  intro:
    'A B.Tech Computer Science & Information Technology student at SRKR Engineering College (CGPA 9.36) with a solid foundation in programming, web technologies, and problem solving. Passionate about software development, data structures & algorithms in C, and building practical applications.',
  location: 'Bhimavaram, Andhra Pradesh',
  email: 'srisparkle987@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/vyshnavi-d-270380385',
    github: 'https://github.com/Vyshnavi-D-23',
    hackerrank: 'https://share.google/NYG3Sv6Tfz7QCzcrN',
  },
  resumePdf: '/assets/aistudio/Vyshnavi_Resume_Updated_v2_235d9f17.pdf',
  portrait: {
    src: '/assets/aistudio/vyshnavi_clean.jpeg',
    srcSet: '/assets/aistudio/vyshnavi_clean.jpeg',
    alt: 'Durvasula Sita Sri Vyshnavi',
  },
  interests: ['Software Development', 'Data Structures & Algorithms', 'Web Development'],
};

export const education = [
  {
    school: 'SRKR Engineering College',
    place: 'Bhimavaram, Andhra Pradesh',
    degree: 'Bachelor of Technology — Computer Science & Information Technology',
    period: '2nd Year (2-1) · 2023 – Present',
    score: 'CGPA 9.36',
  },
  {
    school: 'Schooling Academics',
    place: 'Andhra Pradesh',
    degree: 'Secondary Schooling',
    period: 'Completed',
    score: '1st Rank in Academics',
  },
];

export const experience = [
  {
    company: 'Academic & Project Engineering',
    role: 'Student Developer & Problem Solver',
    place: 'SRKR Engineering College',
    period: '2023 – Present',
    points: [
      'Maintaining an exceptional academic record with a 9.36 CGPA in Computer Science & Information Technology.',
      'Rigorous daily practice in Data Structures & Algorithms with C as strongest language.',
      'Developed responsive website for local non-profit organization (Lunar Rov) and collaborated on educational platforms (Skill Bridge).',
      'Earned HackerRank C Silver Badge and participated in national hackathons including Smart India Hackathon (SIH).',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'lunar-rov',
    title: 'Lunar Rov · Space Application',
    year: '2024',
    genre: 'Space-Tech • Web Platform • Responsive UI',
    logline: 'A responsive space-exploration and rover web application developed for a local non-profit organization using HTML, CSS, and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Netlify / Vercel'],
    build: [
      'Developed a responsive website for a local non-profit organization using HTML, CSS, and JavaScript to showcase lunar exploration initiatives.',
      'Designed clear page structure and responsive layouts to improve usability across all screen sizes from mobile to desktop.',
      'Implemented interactive front-end elements and organized content for intuitive, smooth navigation.',
      'Optimized performance with zero heavy framework overhead, delivering instant loading and accessible UI.',
    ],
    features: [
      'Responsive layouts adapting seamlessly across devices',
      'Interactive space rover showcase and mission highlights',
      'Structured content hierarchy for community engagement',
      'Lightweight vanilla JavaScript architecture for lightning-fast speeds',
      'Deployment ready for Netlify and Vercel',
    ],
    metrics: [
      { value: '100%', label: 'responsive coverage' },
      { value: '3', label: 'core web technologies' },
      { value: 'Non-profit', label: 'community impact' },
      { value: 'Instant', label: 'load speed' },
    ],
    github: 'https://github.com/Vyshnavi-D-23',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'skill-bridge',
    title: 'Skill Bridge',
    year: '2024',
    genre: 'EdTech • Career & Skills • UI Architecture',
    logline: 'An intuitive platform focused on presenting project and career information clearly, structuring the interface for maximum usability.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
    build: [
      'Worked on the Skill Bridge project repository to create an engaging, clear user interface for career skill development.',
      'Focused on presenting project information clearly and structuring the interface for optimal usability and visual hierarchy.',
      'Reviewed the project repository and organized implementation details for collaborative team development.',
      'Adopted Git version control best practices and clean modular front-end architecture.',
    ],
    features: [
      'Structured curriculum and skill milestone navigation',
      'Clean accessibility-focused user interface',
      'Collaborative Git workflow with clear versioning',
      'Modular CSS architecture for maintainable component styling',
    ],
    metrics: [
      { value: 'Clean UI', label: 'structured user experience' },
      { value: 'Git/GitHub', label: 'collaborative development' },
      { value: 'Modular', label: 'front-end architecture' },
      { value: 'Usability', label: 'high clarity index' },
    ],
    github: 'https://github.com/shivasaranya',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'dsa-c-problem-solving',
    title: 'DSA Problem Solving & Algorithms',
    year: '2024',
    genre: 'Data Structures • Algorithms • C Programming',
    logline: 'Extensive algorithmic problem-solving in C, earning HackerRank Silver Badge and mastering core computer science foundations.',
    stack: ['C Language', 'Data Structures', 'Algorithms', 'HackerRank', 'Linux'],
    build: [
      'Practicing Data Structures & Algorithms using C to strengthen analytical problem-solving and coding efficiency.',
      'Earned the C Silver Badge on HackerRank through continuous competitive coding and challenge solutions.',
      'Implemented foundational algorithms including sorting, searching, linked lists, trees, stacks, and memory optimization.',
      'Targeted efficient time and space complexity constraints in memory-critical C programs.',
    ],
    features: [
      'Memory management and pointer-based data structures in C',
      'Rigorous algorithmic complexity analysis (Big-O optimization)',
      'HackerRank competitive challenges and verified badge credential',
      'Comprehensive foundation for scalable software development',
    ],
    metrics: [
      { value: 'Silver', label: 'HackerRank C Badge' },
      { value: 'C', label: 'strongest programming language' },
      { value: 'DSA', label: 'core algorithmic focus' },
      { value: '9.36', label: 'academics CGPA' },
    ],
    github: 'https://github.com/Vyshnavi-D-23',
    palette: amber,
    motif: 'tenants',
  },
];

export type Skill = { name: string; mono: string; note?: string };

export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
  palette: Palette;
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core systems & general-purpose programming',
    palette: crimson,
    skills: [
      { name: 'C', mono: 'C', note: 'Strongest' },
      { name: 'Java', mono: 'JV' },
      { name: 'Python', mono: 'PY' },
    ],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Responsive frontend user interfaces',
    palette: ocean,
    skills: [
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'CS' },
      { name: 'JavaScript', mono: 'JS', note: 'ES6+' },
      { name: 'Responsive UI', mono: 'UI' },
    ],
  },
  {
    id: 'cs',
    title: 'Data Structures & Algorithms',
    subtitle: 'Algorithmic problem solving and memory logic in C',
    palette: amber,
    skills: [
      { name: 'Data Structures in C', mono: 'DS', note: 'Core' },
      { name: 'Algorithms', mono: 'AL' },
      { name: 'Problem Solving', mono: 'PS' },
      { name: 'Memory Management', mono: 'MM' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Deployment',
    subtitle: 'Version control and modern cloud hosting',
    palette: jade,
    skills: [
      { name: 'Netlify', mono: 'NT' },
      { name: 'Vercel', mono: 'VC' },
      { name: 'Git & GitHub', mono: 'GH' },
    ],
  },
  {
    id: 'interests',
    title: 'Areas of Interest',
    subtitle: 'Specialization and continuous exploration',
    palette: violet,
    skills: [
      { name: 'Software Development', mono: 'SD' },
      { name: 'Data Structures & Algorithms', mono: 'DA' },
      { name: 'Web Development', mono: 'WD' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  C: ['Strongest language on resume', 'HackerRank Silver Badge', 'DSA implementations'],
  Java: ['Core programming language', 'SRKR Engineering curriculum'],
  Python: ['Infosys Springboard Python Fundamentals', 'Scripting & problem solving'],
  HTML5: ['Lunar Rov space application', 'Skill Bridge platform'],
  CSS3: ['Responsive multi-device layout', 'Modern flexbox & CSS grid'],
  JavaScript: ['Interactive frontend DOM features', 'Lunar Rov dynamic web logic'],
  'Responsive UI': ['Mobile & desktop usability', 'Cross-browser testing'],
  'Data Structures in C': ['Pointers, linked lists, stacks, trees', 'Algorithmic efficiency'],
  Algorithms: ['HackerRank competitive challenges', 'Sorting & searching optimization'],
  'Problem Solving': ['Daily practice in C', 'Smart India Hackathon formulation'],
  'Memory Management': ['Dynamic allocation in C', 'Pointer arithmetic'],
  Netlify: ['Web application deployment', 'Continuous deployment integration'],
  Vercel: ['Edge static deployment', 'Git-integrated workflows'],
  'Git & GitHub': ['Skill Bridge collaborative repo', 'Version controlled projects'],
  'Software Development': ['Lunar Rov web production', 'Skill Bridge codebase'],
  'Data Structures & Algorithms': ['Core engineering focus', 'Competitive coding'],
  'Web Development': ['Frontend responsive systems', 'Accessibility standards'],
};

export type Achievement = {
  id: string;
  title: string;
  laurel: string;
  org: string;
  year: string;
  detail: string;
  badge?: string;
  link?: string;
  palette: Palette;
};

export const achievements: Achievement[] = [
  {
    id: 'schooling-rank',
    title: '1st Rank in Academics',
    laurel: 'Academic Excellence',
    org: 'Schooling Academics',
    year: 'Academic High',
    detail: 'Secured 1st rank in academics during schooling, establishing early analytical discipline and sustained dedication.',
    badge: '1st Rank',
    palette: amber,
  },
  {
    id: 'sih-hackathon',
    title: 'Smart India Hackathon',
    laurel: 'National Stage',
    org: 'Ministry of Education & AICTE',
    year: 'Participant',
    detail: 'Participated in the premier Smart India Hackathon (SIH), formulating and building collaborative technology solutions.',
    badge: 'SIH Participant',
    palette: ocean,
  },
  {
    id: 'hackerrank-silver',
    title: 'C Silver Badge',
    laurel: 'Competitive Coding',
    org: 'HackerRank',
    year: 'Verified Badge',
    detail: 'Earned the C Silver Badge on HackerRank through demonstrated competitive problem solving and coding challenges.',
    badge: 'Silver Badge',
    link: 'https://share.google/NYG3Sv6Tfz7QCzcrN',
    palette: crimson,
  },
  {
    id: 'aikyam-event',
    title: 'Aikyam Class Event',
    laurel: 'Leadership & Volunteering',
    org: 'SRKR Engineering College',
    year: 'Volunteer',
    detail: 'Volunteered and organized the Aikyam class event, leading student coordination, activity planning, and team management.',
    badge: 'Volunteer',
    palette: jade,
  },
];

export type Certification = {
  name: string;
  title: string;
  issuer: string;
  year: string;
  link?: string;
  palette: Palette;
};

export const certifications: Certification[] = [
  {
    name: 'Python Fundamentals',
    title: 'Python Fundamentals',
    issuer: 'Infosys Springboard',
    year: '2024',
    palette: ocean,
  },
  {
    name: 'Generative AI',
    title: 'Generative AI',
    issuer: 'Infosys Springboard',
    year: '2024',
    palette: violet,
  },
];

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Early Years',
    synopsis: 'Academic excellence and initial fascination with science, mathematics and technology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Academic Ranker',
        description: 'Secured 1st rank in academics during schooling, cultivating a strong work ethic and passion for learning.',
        tags: ['Schooling', '1st Rank', 'Academic Excellence'],
        runtime: 'Schooling',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Spark',
        description: 'Discovering computers, logical problem solving, and making the leap to Computer Science.',
        tags: ['Curiosity', 'Computer Science', 'Analytical Thinking'],
        runtime: 'Early Spark',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering & Mastery of C',
    period: '2023 – Present',
    synopsis: 'Joining SRKR Engineering College in CS & IT, achieving 9.36 CGPA and mastering C programming.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'SRKR College of Engineering',
        description: 'Pursuing B.Tech in Computer Science & Information Technology, reaching 2nd Year (2-1) with a stellar 9.36 CGPA.',
        tags: ['SRKR College', 'B.Tech CS & IT', 'CGPA 9.36'],
        runtime: '2023 – Present',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Mastering C & Problem Solving',
        description: 'Selecting C as strongest programming language, diving deep into pointers, memory allocation, and algorithmic design.',
        tags: ['C Language', 'Strongest Language', 'Algorithms'],
        runtime: 'Daily Coding',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Silver Badge',
        description: 'Earning the C Silver Badge on HackerRank (profile srivyshnavi584) by solving challenging problem sets.',
        tags: ['HackerRank', 'Silver Badge', 'Competitive Coding'],
        runtime: 'HackerRank',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Web Engineering & Projects',
    period: '2024',
    synopsis: 'Building user-facing web applications, crafting intuitive layouts, and contributing to community projects.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Lunar Rov · Space Web Initiative',
        description: 'Developed a responsive website for a local non-profit organization using HTML, CSS, and JavaScript with clear usability.',
        tags: ['Lunar Rov', 'HTML/CSS/JS', 'Responsive UI'],
        runtime: 'Web Project',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Skill Bridge Collaboration',
        description: 'Collaborated on the Skill Bridge repository, focusing on structuring information hierarchy and interface components.',
        tags: ['Skill Bridge', 'GitHub Collaboration', 'UI/UX'],
        runtime: 'Collaboration',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Modern Deployment Workflows',
        description: 'Deploying frontend web platforms using Netlify and Vercel for fast global edge distribution.',
        tags: ['Netlify', 'Vercel', 'Continuous Delivery'],
        runtime: 'Cloud Edge',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Competitions & Certifications',
    period: '2024',
    synopsis: 'Stepping onto national hackathon stages and earning industry credentials.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Smart India Hackathon (SIH)',
        description: 'Participated in the prestigious Smart India Hackathon, brainstorming and formulating technology solutions under competition pressure.',
        tags: ['SIH', 'National Hackathon', 'Teamwork'],
        runtime: 'National Stage',
        palette: violet,
      },
      {
        code: 'S04 E02',
        title: 'Infosys Springboard Certifications',
        description: 'Earned certifications in Python Fundamentals and Generative AI from Infosys Springboard.',
        tags: ['Python', 'Generative AI', 'Infosys Springboard'],
        runtime: 'Credentials',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'Community & Volunteerism',
        description: 'Volunteered for the Aikyam class event, taking charge of on-ground coordination and collaborative leadership.',
        tags: ['Aikyam', 'Volunteering', 'Leadership'],
        runtime: 'Campus Event',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now Streaming',
    synopsis: 'Next chapters in software engineering, advanced data structures, and practical application building.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Arc',
        description: 'Advancing in Software Development, Data Structures & Algorithms, Java, and modern Full-Stack development.',
        tags: ['Software Development', 'DSA', 'Full Stack'],
        runtime: 'In Production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Academic high', title: 'CGPA 9.36', detail: 'SRKR Engineering College • B.Tech CS & IT', palette: amber },
  { label: 'Strongest language', title: 'C Programming', detail: 'Data Structures & Algorithms mastery', palette: crimson },
  { label: 'The Web Original', title: 'Lunar Rov', detail: 'Space-related app for local non-profit', palette: ocean },
  { label: 'HackerRank credential', title: 'C Silver Badge', detail: 'Profile: srivyshnavi584', palette: jade },
  { label: 'National hackathon', title: 'Smart India Hackathon', detail: 'SIH Participant', palette: violet },
  { label: 'GenAI credential', title: 'Generative AI', detail: 'Infosys Springboard certified', palette: crimson },
  { label: 'Python credential', title: 'Python Fundamentals', detail: 'Infosys Springboard certified', palette: ocean },
  { label: 'Collaborative project', title: 'Skill Bridge', detail: 'UI structuring & GitHub collaboration', palette: amber },
  { label: 'Early milestone', title: '1st Rank in Schooling', detail: 'Longstanding academic excellence', palette: jade },
  { label: 'Current mission', title: 'Software Engineering', detail: 'DSA, Web Dev & Practical Applications', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CS & IT',
    lines: ['SRKR Engineering College, Bhimavaram', '2nd Year (2-1) · 2023 – Present'],
    chips: ['CGPA 9.36', 'Schooling 1st Rank'],
  },
  {
    kicker: 'Skills',
    title: 'C is Strongest.',
    lines: ['C, Java, Python', 'HTML, CSS, JavaScript', 'Netlify & Vercel deployment'],
    chips: ['C (Strongest)', 'Java', 'Python', 'JavaScript', 'HTML/CSS'],
  },
  {
    kicker: 'Competitive',
    title: 'HackerRank Silver',
    lines: ['Earned C Silver Badge on HackerRank', 'Daily practice in Data Structures & Algorithms using C'],
    chips: ['Silver Badge', 'DSA in C', 'Problem Solving'],
  },
  {
    kicker: 'Projects',
    title: 'Responsive Originals',
    lines: [
      'Lunar Rov — Responsive space-tech website for local non-profit',
      'Skill Bridge — Structured UI & project repository collaboration',
      'DSA Implementations — Algorithmic problem-solving in C',
    ],
  },
  {
    kicker: 'Hackathons',
    title: 'Smart India Hackathon',
    lines: ['Participated in national level SIH competition', 'Volunteered for campus Aikyam class event'],
  },
  {
    kicker: 'Certified',
    title: 'Infosys Springboard',
    lines: ['Python Fundamentals certified', 'Generative AI certified'],
  },
  {
    kicker: 'Mission',
    title: 'Areas of Interest',
    lines: ['Software Development · Data Structures & Algorithms · Web Development'],
  },
];

export type ProfileId = 'vyshnavi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'vyshnavi',
    name: 'Vyshnavi',
    blurb: 'The complete portfolio, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, C / Web stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & CGPA 9.36', palette: violet },
  journey: {
    nav: 'Journey',
    card: 'My Journey',
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2024`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights from resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: {
    nav: 'Moments',
    card: 'My Achievements',
    meta: `${achievements.length} Moments • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume PDF • View & download', palette: violet },
};
