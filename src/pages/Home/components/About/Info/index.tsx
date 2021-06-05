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
        <a href="mailto:luanpanno@gmail.com">
          <RiMailLine />
          <span>luanpanno@gmail.com</span>
        </a>
      </div>
      <div>
        <RiMapPin2Line />
        <address>Rio de Janeiro, Brasil</address>
      </div>
    </Container>
  );
};
