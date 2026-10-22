import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Section from '@components/Section';

import { isSourceCode, projects } from './projects';
import { List, Row } from './styles';

const Work = () => {
  const { t } = useTranslation('common');
  const { locale = 'en' } = useRouter();
  const listFormat = new Intl.ListFormat(locale, { type: 'conjunction' });

  return (
    <Section id="work" title={t('titleWork')}>
      <List>
        {projects.map((project) => {
          const name = t(project.name);
          const kind = isSourceCode(project.link)
            ? t('projectKindCode')
            : t('projectKindLive');

          return (
            <li key={project.id}>
              <Row
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.imageUrl}
                  alt=""
                  width={160}
                  height={100}
                  sizes="80px"
                  quality={70}
                />
                <span className="text">
                  <span className="name">{name}</span>
                  <span className="stack">
                    {listFormat.format(project.stack)}
                  </span>
                </span>
                <span className="kind">
                  {kind}
                  <span className="visually-hidden">{t('opensInNewTab')}</span>
                </span>
              </Row>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

export default Work;
