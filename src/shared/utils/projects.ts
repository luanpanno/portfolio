/* eslint-disable max-len */
import CryptotrackerImg from '../../assets/img/projects/cryptotracker.png';
import DevRadarImg from '../../assets/img/projects/devradar.png';
import EcoletaImg from '../../assets/img/projects/ecoleta.png';
import ElenaJoyImg from '../../assets/img/projects/elena-joy.png';
import GoogleDocsCloneImg from '../../assets/img/projects/google-docs-clone.png';
import MovieSearchImg from '../../assets/img/projects/movie-search.jpg';
import PortfolioImg from '../../assets/img/projects/portfolio.jpg';
import SpotifyImg from '../../assets/img/projects/spotify.png';
import TeslaCloneImg from '../../assets/img/projects/tesla-clone.png';
import WeatherCheckImg from '../../assets/img/projects/weather-check.png';
import { Project } from '../models/domain/Project';

export const projects: Project[] = [
  {
    image: ElenaJoyImg,
    name: 'Elena Joy',
    stack: 'HTML e CSS',
    link: 'https://luanpanno-projetos.netlify.app/projetos/elena-joy/index.html',
  },
  {
    image: PortfolioImg,
    name: 'Portfolio',
    stack: 'HTML e CSS',
    link: 'https://luanpanno-projetos.netlify.app/projetos/portfolio/index.html',
  },
  {
    image: SpotifyImg,
    name: 'Spotify',
    stack: 'HTML, CSS e Bootstrap',
    link: 'https://luanpanno-projetos.netlify.app/projetos/spotify/index.html',
  },
  {
    image: DevRadarImg,
    name: 'Dev Radar',
    stack: 'Node.js, React e React Native',
    link: 'https://github.com/luanpanno/rocketseat-omnistack-10',
  },
  {
    image: EcoletaImg,
    name: 'Ecoleta',
    stack: 'Node.js, React e React Native',
    link: 'https://github.com/luanpanno/nlw-rocketseat-1',
  },
  {
    image: MovieSearchImg,
    name: 'Movie Search',
    stack: 'React',
    link: 'https://github.com/luanpanno/movie-search',
  },
  {
    image: WeatherCheckImg,
    name: 'Weather Check',
    stack: 'React com TypeScript',
    link: 'https://github.com/luanpanno/weather-check',
  },
  {
    image: TeslaCloneImg,
    name: 'Tesla Clone',
    stack: 'React com TypeScript',
    link: 'https://github.com/luanpanno/tesla-homepage-clone',
  },
  {
    image: GoogleDocsCloneImg,
    name: 'Google Docs Clone',
    stack: 'Node.js, Socket.io, MongoDB, React e Quill',
    link: 'https://github.com/luanpanno/google-docs-clone',
  },
  {
    image: CryptotrackerImg,
    name: 'Cryptotracker',
    stack: 'Next.js',
    link: 'https://github.com/luanpanno/cryptotracker-next',
  },
  {
    image: CryptotrackerImg,
    name: 'Shopping Cart',
    stack: 'React e Typescript',
    link: 'https://github.com/luanpanno/react-shopping-cart',
  },
  {
    image: CryptotrackerImg,
    name: 'Github Search',
    stack: 'React e Typescript',
    link: 'https://github.com/luanpanno/react-github-search',
  },
];
