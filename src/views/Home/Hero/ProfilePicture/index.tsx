import Image from 'next/image';

import { Container } from './styles';

const ProfilePicture = () => (
  <Container>
    <div className="border">
      <div className="wrapper">
        <Image
          src="/images/profile-pic.webp"
          alt="profile picture"
          height="300"
          width="300"
          priority
        />
      </div>
    </div>
  </Container>
);

export default ProfilePicture;
