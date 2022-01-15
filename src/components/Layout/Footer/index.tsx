import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
// import { TiSocialLinkedinCircular } from 'react-icons/ti';

import { Container, Icons } from './styles';

const Footer = () => {
  return (
    <Container>
      <Icons>
        <a
          href="https://www.facebook.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.github.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>
      </Icons>
      <span>Desenvolvido por Luan Panno &copy; {new Date().getFullYear()}</span>
    </Container>
  );
};

export default Footer;
