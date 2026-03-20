import { useTranslation } from 'next-i18next';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import { RiGraduationCapLine, RiMapPin2Line, RiMailLine } from 'react-icons/ri';

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
  'UI/UX',
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
          <RiGraduationCapLine /> {t('homeDegree')}
        </li>
        <li>
          <RiMapPin2Line /> {t('homeLocation')}
        </li>
      </BasicInfo>

      <AboutMe>{t('homeDescription')}</AboutMe>

      <div className="skills-block">
        <span className="skills-title">{t('homeSkillsTitle')}</span>
        <SkillsList>
          {coreSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </SkillsList>
      </div>

      <div className="skills-block">
        <span className="skills-title">{t('homeLinksTitle')}</span>
        <LinksList>
          <LinkItem
            title={t('socialMediaEmail')}
            ariaLabel={t('socialMediaEmailLinkLabel')}
            label={t('socialMediaEmail')}
            href="mailto:luanpanno@gmail.com"
            openInNewTab={false}
          >
            <RiMailLine />
          </LinkItem>
          <LinkItem
            title={t('socialMediaLinkedin')}
            ariaLabel={t('socialMediaLinkedinLinkLabel')}
            label={t('socialMediaLinkedin')}
            href="https://www.linkedin.com/in/luanpanno"
          >
            <AiFillLinkedin />
          </LinkItem>
          <LinkItem
            title={t('socialMediaGithub')}
            ariaLabel={t('socialMediaGithubLinkLabel')}
            label={t('socialMediaGithub')}
            href="https://www.github.com/luanpanno"
          >
            <AiFillGithub />
          </LinkItem>
          <LinkItem
            title={t('socialMediaCurriculum')}
            ariaLabel={t('socialMediaCurriculumLinkLabel')}
            label={t('socialMediaCurriculum')}
            // eslint-disable-next-line max-len
            href="https://docs.google.com/document/d/1tHqI4b59Vd-MK_ayUIlvYxXfJVbmzWAnXDkun5ox2LE/edit?usp=sharing"
          >
            <AiFillFileText />
          </LinkItem>
        </LinksList>
      </div>
    </Container>
  );
};

export default About;
