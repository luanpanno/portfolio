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
      aria-labelledby={`project-${project.name
        .toLowerCase()
        .replace(/\s+/g, '-')}`}
    >
      <div className="img-wrapper">
        <Image
          src={project.imageUrl}
          alt={t('projectImageAlt', { projectName: t(project.name) })}
          width={1920}
          height={165}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJiEyPjE6MTY4PzoyPjhDREZKPDpBRlVIS1BSV1VXYWFlZkdjXXFtcW7/2wBDARUXFx4aHR4eHW5tQzNDbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>
      <div className="text">
        <h3 id={`project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
          {t(project.name)}
        </h3>
        <span role="text" aria-label={`Built with ${t(project.stack)}`}>
          {t(project.stack)}
        </span>
      </div>
    </Container>
  );
};

export default Card;
