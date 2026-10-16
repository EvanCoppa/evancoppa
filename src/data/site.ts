// Every piece of copy, link and placeholder visual on the page lives here.
// Swap in real text, and replace `scene` placeholders with image paths
// (put files in /public/images and use e.g. image: '/images/photo-1.jpg').

export const site = {
  name: 'Evan Coppa',
  title: 'Evan Coppa | Web Developer',
  description: 'Evan Coppa — web developer. Portfolio and contact.',
  year: 2026,
  email: 'evancoppa@gmail.com',
  resumeUrl: '#',
};

export const menu = {
  left: `Portfolio © ${site.year}`,
  links: [
    { label: 'Work', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
};

/** Three hero lines; the middle one carries the asterisk the next section answers. */
export const hero = ['Evan', 'Web Developer*', `Portfolio ${site.year}`];
/** Mobile breaks the same words over four lines. */
export const heroMobile = ['Evan', 'Web', 'Developer*', String(site.year)];

export const intro =
  "Hey, I'm Evan — a developer who builds fast, good-looking things for the web, " +
  'from quick landing pages to full products. This page is a quick tour of what I do, ' +
  'how I like to work, and why people keep asking me what my job actually is.';

export const question = ['*what does a', 'web developer', 'actually', 'do?'];

export const bubbles = [
  'So you fix printers?',
  'Can you build me the next Facebook?',
  "Isn't that AI's job now?",
  'You just type all day?',
  'Can you make my Wi-Fi faster?',
];

export const answer = [
  'Short version: I turn ideas into websites and apps that people actually enjoy using.',
  'That means sketching the first wireframes, designing the interface, writing the front-end code, wiring up the back-end plumbing, and then sweating the small details — loading states, motion, accessibility — that nobody notices until they are wrong.',
  'To do all of that well, you need a lot of different tools in the box. Here is what is in mine.',
];

export type Scene =
  | 'aurora' | 'glacier' | 'road' | 'falls' | 'lake' | 'stars'
  | 'cliff' | 'dusk' | 'ocean' | 'forest' | 'ember' | 'fog';

export interface Skill {
  title: string;
  short: string;
  text: string;
  tags: string[];
}

export const skills: Skill[] = [
  {
    title: 'Photography',
    short: 'Photo',
    text: 'I shoot landscapes, people and products, and edit everything myself. A good photo can carry a whole page.',
    tags: ['Lightroom', 'Photoshop', 'Capture One'],
  },
  {
    title: 'Video & Motion',
    short: 'Video',
    text: 'From storyboard to export: filming, editing, colour, sound and motion graphics for the web and social.',
    tags: ['Premiere Pro', 'After Effects'],
  },
  {
    title: 'Web Design',
    short: 'Web',
    text: 'Responsive sites built to load fast and feel good — like the browser on the right. Click the 💩 to see what I promise never to ship.',
    tags: ['Astro', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'UI & UX Design',
    short: 'UI/UX',
    text: 'Wireframes, prototypes and design systems: figuring out how something should work before making it pretty.',
    tags: ['Figma', 'Framer', 'Storybook'],
  },
  {
    title: '3D Design',
    short: '3D',
    text: 'Modelling, lighting and real-time 3D for the browser. Hover the hotspots on the laptop to take a closer look.',
    tags: ['Blender', 'Three.js'],
  },
];

/** Photo-column scenes (top → bottom). Five per column. */
export const photosDown: Scene[] = ['aurora', 'glacier', 'road', 'falls', 'aurora'];
export const photosUp: Scene[] = ['lake', 'stars', 'cliff', 'dusk', 'lake'];

export const video = {
  stickers: ['Opening shot', 'B-roll', 'Lower third', 'SFX'],
  layers: ['Colour grade · Titles · Sound design', 'Raw footage · 4K · Log profile'],
};

export const browser = {
  tabs: [
    { favicon: '🧭', label: 'Project One', url: 'https://project-one.dev' },
    { favicon: '🌙', label: 'Project Two', url: 'https://project-two.dev' },
  ],
  hero: { title: 'A fast, friendly website for a local business', cta: 'Read more' },
  second: { logo: 'Nightshift', links: ['Work', 'About', 'Contact'] },
  gag: {
    notification: { lead: 'This website wants to', ask: '🔔 Send you 40 notifications a day', block: 'Block', allow: 'Allow' },
    cookies: { text: 'We use cookies to improve your experience, and also because everyone else does.', accept: 'Accept', acceptRed: 'Accept, but red' },
    newsletter: { title: 'Join our\nnewsletter', text: "You'll hear from us far too often.\nSign up anyway!", input: 'Your email address' },
  },
};

export const ux = {
  label: ['Wireframe', 'Final design'],
  menu: ['Search', 'Logo', 'Menu'],
  wire: { title: 'Headline – Mobile', cta: 'Call-to-action', section: 'Section H2' },
  final: { title: 'Find your next favourite spot', cta: 'Explore', section: 'Latest' },
};

export const breaks = {
  next: { title: ['So, what', 'comes next?'], text: "Let's look at one project from start to finish, so you can see for yourself how all of this comes together on real work." },
  project: { name: 'Atlas', cta: 'See case study', href: '#' },
  pitch: [
    "Long story short, I'm looking for my next project: somewhere I can design, build and ship real things, and keep learning along the way.",
    'Want someone on your team who is curious, reliable, picks things up fast and is a little obsessive about quality?',
    'Here is everything above, condensed onto one page:',
  ],
  resume: { title: ['Want a', 'copy?'], cta: 'Download my resume' },
  outro: [
    "That's it — thanks for scrolling this far!",
    "If any of this sounds like what you need, good news: I'm available for freelance work and open to full-time roles.",
    'Have a website or app that needs building?\nWant a second pair of eyes on a design?\nJust want to talk shop?',
    "Pick a channel below and let's talk.",
  ],
};

export const resume = {
  name: 'Evan Coppa',
  role: 'Web Developer',
  contact: [site.email, 'evancoppa.com'],
  experience: [
    { title: 'Web Developer', meta: ['2024–Now', 'Freelance', 'Remote'], text: 'Design and build marketing sites and web apps for small businesses, from first sketch to launch.' },
    { title: 'Front-end Developer', meta: ['2022–2024', 'Studio', 'Full-time'], text: 'Shipped component libraries, landing pages and campaign microsites for client brands.' },
    { title: 'UI Designer', meta: ['2021–2022', 'Startup', 'Contract'], text: 'Product design, prototyping and a small design system for a mobile app.' },
    { title: 'Designer', meta: ['2020–2021', 'Agency', 'Part-time'], text: 'Visual identity, social content and photography for local clients.' },
  ],
  education: [
    { title: 'Degree in Computer Science', meta: ['2016–2020', 'University'], text: 'Focus on human–computer interaction and web technologies.' },
    { title: 'Certificate in UX Design', meta: ['2021', 'Online'], text: 'Research, prototyping and usability testing.' },
    { title: 'Motion Design Course', meta: ['2022', 'Online'], text: 'Animation principles, After Effects and Lottie.' },
  ],
  skills: ['Astro', 'React', 'TypeScript', 'Tailwind', 'Node', 'Figma', 'Blender', 'Lightroom', 'Premiere'],
  summary: 'Developer who cares about speed, accessibility and the small details that make the web feel good.',
};

export const contact = {
  label: 'Contact me',
  links: [
    { key: 'email', label: 'Email', hover: 'Say hello', href: `mailto:${site.email}`, scene: 'ember' as Scene },
    { key: 'linkedin', label: 'LinkedIn', hover: "Let's connect", href: '#', scene: 'ocean' as Scene },
    { key: 'instagram', label: 'Instagram', hover: 'Follow along', href: '#', scene: 'dusk' as Scene },
    { key: 'github', label: 'GitHub', hover: 'Read the code', href: 'https://github.com/EvanCoppa', scene: 'forest' as Scene },
  ],
  wink: ';-)',
  top: 'Back to the top',
};

/** Case-study card scenes, row by row (portrait, landscape, portrait, landscape …). */
export const caseCards: Scene[] = [
  'fog', 'ember', 'forest', 'cliff',
  'dusk', 'ocean', 'glacier', 'stars',
  'lake', 'road', 'falls', 'aurora',
];
