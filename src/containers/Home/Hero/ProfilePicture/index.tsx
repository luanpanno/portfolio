import Image from 'next/image';

import ProfilePic from '@assets/imgs/profile-pic.jpg';

import { Container } from './styles';

const ProfilePicture = () => (
  <Container>
    <div className="border">
      <div className="wrapper">
        <Image
          src={ProfilePic}
          alt="profile picture"
          height="300"
          width="300"
        />
      </div>
    </div>
  </Container>
);

export default ProfilePicture;
