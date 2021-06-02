import Title from '@components/Title';

import { projects } from '@utils/projects';

import { Card } from './Card';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  return (
    <Container>
      <Title>Projetos</Title>

      <ProjectsWrapper>
        {projects?.map((project) => {
          return <Card image={project?.image} text={project?.text} />;
        })}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
