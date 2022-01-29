import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="grid-1">
        <span>
          {t('footer')} &copy; {new Date().getFullYear()}
        </span>
      </div>
      <div className="grid-2">
        <a
          href="https://www.facebook.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/in/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.github.com/luanpanno"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a href="mailto:luanpanno@gmail.com">luanpanno@gmail.com</a>
      </div>
    </Container>
  );
};

export default Footer;
