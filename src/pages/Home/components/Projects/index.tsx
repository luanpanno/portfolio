import Title from '@components/Title';
import { Content } from '@containers/Content';

import { projects } from '@utils/projects';

import { Card } from './Card';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  return (
    <Content>
      <Container id="projects">
        <Title>Projetos</Title>

        <ProjectsWrapper>
          {projects?.map((project) => {
            return <Card project={project} />;
          })}
        </ProjectsWrapper>
      </Container>
    </Content>
  );
};

export default Projects;
