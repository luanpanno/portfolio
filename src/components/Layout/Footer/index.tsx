import { useTranslation } from 'react-i18next';
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

import { Container, Icons } from './styles';

const Footer = () => {
  const { t } = useTranslation();

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
      <span>
        {t('footer')} &copy; {new Date().getFullYear()}
      </span>
    </Container>
  );
};

export default Footer;
