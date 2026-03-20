import { useTranslation } from 'next-i18next';

import Content from '@components/layout/Content';
import Title from '@components/Title';

import Card from './Card';
import { projects } from './projects';
import { Container, ProjectsWrapper } from './styles';

const Projects = () => {
  const { t } = useTranslation('common');

  return (
    <Content>
      <Container id="projects" aria-labelledby="projects-heading">
        <Title id="projects-heading">{t('titleProjects')}</Title>

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
