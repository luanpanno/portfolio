import CryptotrackerImg from '@assets/img/projects/cryptotracker.png';
import DevRadarImg from '@assets/img/projects/devradar.png';
import EcoletaImg from '@assets/img/projects/ecoleta.png';
import ElenaJoyImg from '@assets/img/projects/elena-joy.png';
import FashionImg from '@assets/img/projects/fashion.jpg';
import GoogleDocsCloneImg from '@assets/img/projects/google-docs-clone.png';
import InfusionImg from '@assets/img/projects/infusion.jpg';
import MovieSearchImg from '@assets/img/projects/movie-search.jpg';
import PortfolioImg from '@assets/img/projects/portfolio.jpg';
import RangeHotelsImg from '@assets/img/projects/range-hotels.png';
import SpotifyImg from '@assets/img/projects/spotify.png';
import TeslaCloneImg from '@assets/img/projects/tesla-clone.png';
import TodoListImg from '@assets/img/projects/todo-list.png';
import WeatherCheckImg from '@assets/img/projects/weather-check.png';

import { Project } from '../models/domain/Project';

export const projects: Project[] = [
  {
    image: FashionImg,
    name: 'Fashion',
    stack: 'HTML e CSS',
  },
  {
    image: RangeHotelsImg,
    name: 'Range Hotels',
    stack: 'HTML e CSS',
  },
  {
    image: PortfolioImg,
    name: 'Portfolio',
    stack: 'HTML e CSS',
  },
  {
    image: ElenaJoyImg,
    name: 'Elena Joy',
    stack: 'HTML e CSS',
  },
  {
    image: SpotifyImg,
    name: 'Spotify',
    stack: 'HTML, CSS e Bootstrap',
  },
  {
    image: InfusionImg,
    name: 'Infusion',
    stack: 'HTML, CSS',
  },
  {
    image: DevRadarImg,
    name: 'Dev Radar',
    stack: 'Node.js, ReactJS e React Native',
  },
  {
    image: EcoletaImg,
    name: 'Ecoleta',
    stack: 'Node.js, ReactJS e React Native',
  },
  {
    image: TodoListImg,
    name: 'ToDo',
    stack: 'ReactJS',
  },
  {
    image: MovieSearchImg,
    name: 'Movie Search',
    stack: 'ReactJS',
  },
  {
    image: WeatherCheckImg,
    name: 'Weather Check',
    stack: 'ReactJS com TypeScript',
  },
  {
    image: TeslaCloneImg,
    name: 'Tesla Clone',
    stack: 'ReactJS com TypeScript',
  },
  {
    image: GoogleDocsCloneImg,
    name: 'Google Docs Clone',
    stack: 'Node.js, Socket.io, MongoDB, ReactJS and Quill',
  },
  {
    image: CryptotrackerImg,
    name: 'Cryptotracker',
    stack: 'Next.js',
  },
];
