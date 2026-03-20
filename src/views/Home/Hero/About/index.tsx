import { useTranslation } from 'next-i18next';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import { RiMapPin2Line, RiMailLine } from 'react-icons/ri';

import LinkItem from './LinkItem';
import {
  Container,
  Hello,
  Name,
  Position,
  BasicInfo,
  AboutMe,
  SkillsList,
  LinksList,
} from './styles';

const coreSkills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Redux',
  'SASS',
  'Testing',
  'UI',
  'UX',
  'C#',
  '.NET',
];

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Hello>
        <span>{t('homeHello')}</span>
      </Hello>

      <Name id="hero-heading">Luan Panno</Name>

      <Position>{t('homeJob')}</Position>

      <BasicInfo>
        <li>
          <a href="mailto:luanpanno@gmail.com" aria-label={t('emailAddress')}>
            <RiMailLine /> luanpanno@gmail.com
          </a>
        </li>
        <li>
          <RiMapPin2Line /> {t('homeLocation')}
        </li>
      </BasicInfo>

      <AboutMe>{t('homeDescription')}</AboutMe>
      <SkillsList>
        {coreSkills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </SkillsList>

      <LinksList>
        <LinkItem
          title={t('socialMediaLinkedin')}
          ariaLabel={t('socialMediaLinkedinLinkLabel')}
          href="https://www.linkedin.com/in/luanpanno"
        >
          <AiFillLinkedin />
        </LinkItem>
        <LinkItem
          title={t('socialMediaGithub')}
          ariaLabel={t('socialMediaGithubLinkLabel')}
          href="https://www.github.com/luanpanno"
        >
          <AiFillGithub />
        </LinkItem>
        <LinkItem
          title={t('socialMediaCurriculum')}
          ariaLabel={t('socialMediaCurriculumLinkLabel')}
          // eslint-disable-next-line max-len
          href="https://docs.google.com/document/d/1tHqI4b59Vd-MK_ayUIlvYxXfJVbmzWAnXDkun5ox2LE/edit?usp=sharing"
        >
          <AiFillFileText />
        </LinkItem>
      </LinksList>
    </Container>
  );
};

export default About;
