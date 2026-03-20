import { useTranslation } from 'next-i18next';

import {
  EmailIcon,
  GitHubIcon,
  GraduationIcon,
  LinkedInIcon,
  LocationIcon,
  ResumeIcon,
} from '@components/Icons';

import LinkItem from './LinkItem';
import {
  Intro,
  Supplementary,
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
    <>
      <Intro className="hero-intro">
        <Hello>
          <span>{t('homeHello')}</span>
        </Hello>

        <Name id="hero-heading">Luan Panno</Name>

        <Position>{t('homeJob')}</Position>

        <BasicInfo>
          <li>
            <GraduationIcon /> {t('homeDegree')}
          </li>
          <li>
            <LocationIcon /> {t('homeLocation')}
          </li>
        </BasicInfo>

        <AboutMe>{t('homeDescription')}</AboutMe>
      </Intro>

      <Supplementary className="hero-supplementary">
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
              <EmailIcon />
            </LinkItem>
            <LinkItem
              title={t('socialMediaLinkedin')}
              ariaLabel={t('socialMediaLinkedinLinkLabel')}
              label={t('socialMediaLinkedin')}
              href="https://www.linkedin.com/in/luanpanno"
            >
              <LinkedInIcon />
            </LinkItem>
            <LinkItem
              title={t('socialMediaGithub')}
              ariaLabel={t('socialMediaGithubLinkLabel')}
              label={t('socialMediaGithub')}
              href="https://www.github.com/luanpanno"
            >
              <GitHubIcon />
            </LinkItem>
            <LinkItem
              title={t('socialMediaCurriculum')}
              ariaLabel={t('socialMediaCurriculumLinkLabel')}
              label={t('socialMediaCurriculum')}
              // eslint-disable-next-line max-len
              href="https://docs.google.com/document/d/1tHqI4b59Vd-MK_ayUIlvYxXfJVbmzWAnXDkun5ox2LE/edit?usp=sharing"
            >
              <ResumeIcon />
            </LinkItem>
          </LinksList>
        </div>
      </Supplementary>
    </>
  );
};

export default About;
