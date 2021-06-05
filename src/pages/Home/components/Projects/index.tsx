import { useTheme } from 'styled-components';

import Title from '@components/Title';
import { Content } from '@containers/Content';

import { projects } from '@utils/projects';

import { Card } from './Card';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  const { colors } = useTheme();

  return (
    <Content style={{ backgroundColor: colors.background }}>
      <Container id="projects">
        <Title>Projetos</Title>

        <ProjectsWrapper>
          {projects?.map((project) => {
            return <Card key={project.name} project={project} />;
          })}
        </ProjectsWrapper>
      </Container>
    </Content>
  );
};

export default Projects;
