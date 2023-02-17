import { useTranslation } from 'next-i18next';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillFileText,
} from 'react-icons/ai';
import { RiMapPin2Line, RiMailLine } from 'react-icons/ri';

import LinkItem from './LinkItem';
import {
  Container,
  Hello,
  Name,
  Position,
  BasicInfo,
  AboutMe,
  LinksList,
} from './styles';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Hello>
        <span>{t('homeHello')}</span>
      </Hello>

      <Name>Luan Panno</Name>

      <Position>{t('homeJob')}</Position>

      <BasicInfo>
        <li>
          <a href="mailto:luanpanno@gmail.com">
            <RiMailLine /> luanpanno@gmail.com
          </a>
        </li>
        <li>
          <RiMapPin2Line /> {t('homeLocation')}
        </li>
      </BasicInfo>

      <AboutMe>{t('homeDescription')}</AboutMe>

      <LinksList>
        <LinkItem title="Facebook" href="https://www.facebook.com/luanpanno">
          <AiFillFacebook />
        </LinkItem>
        <LinkItem title="Linkedin" href="https://www.linkedin.com/in/luanpanno">
          <AiFillLinkedin />
        </LinkItem>
        <LinkItem title="Twitter" href="https://www.twitter.com/dev_luan">
          <AiFillTwitterSquare />
        </LinkItem>
        <LinkItem title="Github" href="https://www.github.com/luanpanno">
          <AiFillGithub />
        </LinkItem>
        <LinkItem
          title="Curriculum"
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
