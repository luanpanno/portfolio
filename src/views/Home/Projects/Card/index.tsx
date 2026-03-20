/* eslint-disable max-len */
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Project } from '../projects';
import { Container } from './styles';

type Props = {
  project: Project;
};

const Card: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation('common');

  return (
    <Container
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('projectLinkAria', { projectName: t(project.name) })}
      aria-labelledby={`project-${project.name
        .toLowerCase()
        .replace(/\s+/g, '-')}`}
    >
      <div className="img-wrapper">
        <Image
          src={project.imageUrl}
          alt={t('projectImageAlt', { projectName: t(project.name) })}
          fill
          loading="lazy"
          sizes="(max-width: 480px) calc(100vw - 56px), (max-width: 1100px) calc((100vw - 180px) / 2), 320px"
          quality={70}
        />
      </div>
      <div className="text">
        <h3 id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {t(project.name)}
        </h3>
        <span
          role="text"
          aria-label={t('builtWith', { stack: t(project.stack) })}
        >
          {t(project.stack)}
        </span>
      </div>
    </Container>
  );
};

export default Card;
