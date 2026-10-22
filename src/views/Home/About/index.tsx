import { useTranslation } from 'next-i18next';

import Section from '@components/Section';

import { Details, Text } from './styles';

const stack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'C#', '.NET'];

type Props = {
  yearsOfExperience: number;
};

const About: React.FC<Props> = ({ yearsOfExperience }) => {
  const { t } = useTranslation('common');

  return (
    <Section id="about" title={t('titleAbout')}>
      <Text>{t('homeDescription', { years: yearsOfExperience })}</Text>

      <Details>
        <div>
          <dt>{t('aboutCurrently')}</dt>
          <dd>{t('aboutCurrentlyValue')}</dd>
        </div>
        <div>
          <dt>{t('aboutBasedIn')}</dt>
          <dd>{t('homeLocation')}</dd>
        </div>
        <div>
          <dt>{t('aboutEducation')}</dt>
          <dd>{t('homeDegree')}</dd>
        </div>
        <div>
          <dt>{t('aboutStack')}</dt>
          <dd>{stack.join(', ')}</dd>
        </div>
      </Details>
    </Section>
  );
};

export default About;
