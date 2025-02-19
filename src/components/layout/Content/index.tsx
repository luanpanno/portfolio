import { useTranslation } from 'next-i18next';
import { HTMLAttributes } from 'react';

import Separator from '@components/Separator';

import { Container, Wrapper } from './styles';

type Props = HTMLAttributes<HTMLDivElement>;

const Content: React.FC<Props> = ({ children, ...props }) => {
  const { t } = useTranslation('common');
  return (
    <Container {...props} role="region" aria-label={t('contentSection')}>
      <Wrapper>
        <Separator />
        {children}
      </Wrapper>
    </Container>
  );
};

export default Content;
