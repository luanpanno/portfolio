import { useTheme } from 'styled-components';

import Content from '@components/Content';
import Title from '@components/Title';

import { projects } from '@helpers/projects';

import Card from './Card';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  const { colors } = useTheme();

  return (
    <Content style={{ backgroundColor: colors.background }}>
      <Container id="projects">
        <Title>Projetos</Title>

        <ProjectsWrapper>
          {projects?.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </ProjectsWrapper>
      </Container>
    </Content>
  );
};

export default Projects;
