import Title from '@components/Title';

import { projects } from '@utils/projects';

import { Card } from './Card';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  return (
    <Container id="projects">
      <Title>Projetos</Title>

      <ProjectsWrapper>
        {projects?.map((project) => {
          return <Card project={project} />;
        })}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;
