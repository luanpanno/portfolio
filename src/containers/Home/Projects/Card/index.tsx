import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Project } from '@models/Project';

import { Container } from './styles';

type Props = {
  project: Project;
};

const Card: React.FC<Props> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <Container href={project.link} target="_blank">
      <div className="img-wrapper">
        <Image
          src={project.image}
          alt="weather-check"
          height="350"
          width="650"
        />
      </div>
      <div className="text">
        <h3>{project.name}</h3>
        <span>{t(project.stack)}</span>
      </div>
    </Container>
  );
};

export default Card;
