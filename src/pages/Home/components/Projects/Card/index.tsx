import { Project } from 'src/shared/models/domain/Project';

import { Container } from './styles';

interface Props {
  project: Project;
}

export const Card: React.FC<Props> = ({ project }) => {
  return (
    <Container href={project.link} target="_blank">
      <div className="img-wrapper">
        <img src={project.image} alt="weather-check" />
      </div>
      <div className="text">
        <h3>{project.name}</h3>
        <span>{project.stack}</span>
      </div>
      {/* <a href="teste">Visitar</a> */}
    </Container>
  );
};
