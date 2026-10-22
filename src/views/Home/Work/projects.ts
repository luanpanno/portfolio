export type Project = {
  id: string;
  imageUrl: string;
  name: string;
  stack: string[];
  link: string;
};

const projectsHost = 'https://luanpanno-projetos.netlify.app/projetos';

export const projects: Project[] = [
  {
    id: 'google-docs-clone',
    imageUrl: '/images/projects/google-docs-clone.webp',
    name: 'projectGoogleDocsClone',
    stack: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'Quill'],
    link: 'https://github.com/luanpanno/google-docs-clone',
  },
  {
    id: 'cryptotracker',
    imageUrl: '/images/projects/cryptotracker.webp',
    name: 'projectCryptotracker',
    stack: ['Next.js'],
    link: 'https://github.com/luanpanno/cryptotracker-next',
  },
  {
    id: 'shopping-cart',
    imageUrl: '/images/projects/shopping-cart.webp',
    name: 'projectShoppingCart',
    stack: ['React', 'TypeScript'],
    link: 'https://shopping-cart-lp.netlify.app/',
  },
  {
    id: 'github-search',
    imageUrl: '/images/projects/github-search.webp',
    name: 'projectGithubSearch',
    stack: ['React', 'TypeScript'],
    link: 'https://github-search-lp.netlify.app/',
  },
  {
    id: 'dev-radar',
    imageUrl: '/images/projects/dev-radar.webp',
    name: 'projectDevRadar',
    stack: ['Node.js', 'React', 'React Native'],
    link: 'https://github.com/luanpanno/rocketseat-omnistack-10',
  },
  {
    id: 'ecoleta',
    imageUrl: '/images/projects/ecoleta.webp',
    name: 'projectEcoleta',
    stack: ['Node.js', 'React', 'React Native'],
    link: 'https://github.com/luanpanno/nlw-rocketseat-1',
  },
  {
    id: 'movie-search',
    imageUrl: '/images/projects/movie-search.webp',
    name: 'projectMovieSearch',
    stack: ['React'],
    link: 'https://github.com/luanpanno/movie-search',
  },
  {
    id: 'spotify',
    imageUrl: '/images/projects/spotify.webp',
    name: 'projectSpotify',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    link: `${projectsHost}/spotify/index.html`,
  },
  {
    id: 'elena-joy',
    imageUrl: '/images/projects/elena-joy.webp',
    name: 'projectElenaJoy',
    stack: ['HTML', 'CSS'],
    link: `${projectsHost}/elena-joy/index.html`,
  },
];

export const isSourceCode = (link: string) =>
  new URL(link).hostname === 'github.com';
