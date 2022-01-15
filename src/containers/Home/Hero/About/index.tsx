/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { RiMapPin2Line, RiMailLine } from 'react-icons/ri';

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
  const { t } = useTranslation();

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
        <div>
          <a
            href="https://www.facebook.com/luanpanno"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/luanpanno"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://www.twitter.com/dev_luan"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare />
          </a>
        </div>
        <div>
          <a
            href="https://www.github.com/luanpanno"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </LinksList>
    </Container>
  );
};

export default About;
