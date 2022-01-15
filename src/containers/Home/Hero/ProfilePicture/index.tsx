import ProfilePic from '@assets/img/profile-pic.jpg';

import { Container, Border, Image } from './styles';

const ProfilePicture = () => {
  return (
    <Container>
      <Border>
        <Image src={ProfilePic} alt="profile-picture" />
      </Border>
    </Container>
  );
};

export default ProfilePicture;
