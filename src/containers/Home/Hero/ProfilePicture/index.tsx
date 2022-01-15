import Image from 'next/image';

import ProfilePic from '@assets/img/profile-pic.jpg';

import { Container, Border } from './styles';

const ProfilePicture = () => (
  <Container>
    <Border>
      <div className="wrapper">
        <Image src={ProfilePic} alt="profile-picture" />
      </div>
    </Border>
  </Container>
);

export default ProfilePicture;
