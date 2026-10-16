// All placeholder content lives here — swap in real copy, links and images.

export const site = {
  name: 'Evan Coppa',
  title: 'Evan Coppa | Portfolio',
  description: 'Evan Coppa — designer and developer. Available for new projects.',
  email: 'evancoppa@gmail.com',
  cvUrl: '#',
};

export const hero = [
  { text: 'Hello,', align: 'left' },
  { text: "I'm", serif: 'Evan', align: 'right' },
  { text: 'Maker of', align: 'left' },
  { serif: 'web things', align: 'right' },
] as const;

export const bubbles = [
  { text: 'Hi there 👋', side: 'left' },
  { text: 'I design and build websites and digital products.', side: 'right' },
  { text: 'I care about clean layout, fast pages and small details.', side: 'left' },
  { text: 'Currently open to new projects.', side: 'right' },
  { text: 'Keep scrolling — or say hello at the bottom.', side: 'left' },
] as const;

export const skills = ['Design', 'Code', 'Photo', 'Video', 'Strategy'];

export const projectsShipped = 25;

export const browserTabs = [
  {
    id: 'one',
    label: 'Project One',
    subtitle: 'Brand site & landing pages',
    gradient: 'from-ink to-accent',
    menu: ['Home', 'About', 'Work', 'Contact'],
  },
  {
    id: 'two',
    label: 'Project Two',
    subtitle: 'Dashboard & data visualization',
    gradient: 'from-[#1d2b64] to-[#5ab2d6]',
    menu: ['Overview', 'Reports', 'Settings'],
  },
  {
    id: 'three',
    label: 'Project Three',
    subtitle: 'Mobile app prototype',
    gradient: 'from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]',
    menu: ['Onboarding', 'Feed', 'Profile'],
  },
];

export const work = [
  { title: 'Brand Site', role: 'Design & build', gradient: 'from-ink to-accent' },
  { title: 'Analytics Tool', role: 'Product design', gradient: 'from-[#1d2b64] to-[#5ab2d6]' },
  { title: 'Mobile Prototype', role: 'UX & motion', gradient: 'from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]' },
];

// Photo grid tiles. Replace `gradient` with an `image` path once you have photos.
export const gallery = [
  'from-amber-200 to-rose-400',
  'from-sky-200 to-indigo-400',
  'from-emerald-200 to-teal-500',
  'from-fuchsia-200 to-purple-500',
  'from-orange-200 to-red-500',
  'from-lime-200 to-green-500',
  'from-slate-200 to-slate-500',
  'from-yellow-100 to-amber-400',
  'from-pink-200 to-rose-500',
];

export const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: 'https://github.com/EvanCoppa' },
  { label: 'Twitter', href: '#' },
];
