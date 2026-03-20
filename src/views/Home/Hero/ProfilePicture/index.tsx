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
            height={300}
            width={300}
            priority
            sizes="(max-width: 1000px) 280px, 390px"
          />
        </div>
      </div>
    </Container>
  );
};

export default ProfilePicture;
