import { useTranslation } from 'next-i18next';
import { useTheme } from 'styled-components';

import Content from '@components/layout/Content';
import Title from '@components/Title';

import Card from './Card';
import { projects } from './projects';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  const { t } = useTranslation('common');
  const { colors } = useTheme();

  return (
    <Content style={{ backgroundColor: colors.background }}>
      <Container id="projects">
        <Title>{t('titleProjects')}</Title>

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
