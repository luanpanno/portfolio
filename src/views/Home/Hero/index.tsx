import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { links } from '@utils/links';

import { Container, Identity, Lead, Links } from './styles';

const Hero = () => {
  const { t } = useTranslation('common');

  return (
    <Container aria-labelledby="hero-heading">
      <Identity>
        <Image
          src="/images/profile-pic.webp"
          alt={t('profileImageAlt')}
          width={56}
          height={56}
          priority
          quality={75}
        />
        <div>
          <h1 id="hero-heading">Luan Panno</h1>
          <p>{t('homeJob')}</p>
        </div>
      </Identity>

      <Lead>{t('homeLead')}</Lead>

      <Links aria-label={t('linksLabel')}>
        <li>
          <a href={`mailto:${links.email}`}>{t('linkEmail')}</a>
        </li>
        <li>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="visually-hidden">{t('opensInNewTab')}</span>
          </a>
        </li>
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            GitHub
            <span className="visually-hidden">{t('opensInNewTab')}</span>
          </a>
        </li>
        <li>
          <a href={links.resume} target="_blank" rel="noopener noreferrer">
            {t('linkResume')}
            <span className="visually-hidden">{t('opensInNewTab')}</span>
          </a>
        </li>
      </Links>
    </Container>
  );
};

export default Hero;
