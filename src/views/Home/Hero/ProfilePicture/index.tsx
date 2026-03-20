import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container } from './styles';

const ProfilePicture = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <div className="border">
        <div className="wrapper">
          <Image
            src="/images/profile-pic.webp"
            alt={t('profileImageAlt')}
            fill
            priority
            fetchPriority="high"
            quality={72}
            sizes="(max-width: 480px) 220px, (max-width: 1000px) 280px, 320px"
          />
        </div>
      </div>
    </Container>
  );
};

export default ProfilePicture;
