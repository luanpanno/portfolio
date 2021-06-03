import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import { RiMapPin2Line, RiMailLine } from 'react-icons/ri';

import { Container } from './styles';

export const Info = () => {
  return (
    <Container>
      <div>
        <a
          href="https://www.facebook.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook />
          <span>Luan Panno Cabral</span>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
          <span>Luan Panno</span>
        </a>
      </div>
      <div>
        <a
          href="https://www.github.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub />
          <span>luanpanno</span>
        </a>
      </div>
      <div>
        <RiMailLine />
        <span>luanpanno@gmail.com</span>
      </div>
      <div>
        <RiMapPin2Line />
        <span>Rio de Janeiro, Brasil</span>
      </div>
    </Container>
  );
};
