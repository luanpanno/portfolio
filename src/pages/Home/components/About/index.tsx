import { FaHtml5, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript } from 'react-icons/si';

import Pfp from '@assets/img/profile-pic.jpg';
import Title from '@components/Title';
import { Content } from '@containers/Content';

import { Icon } from './Icon';
import { Info } from './Info';
import { Container, AboutContainer, Skills } from './styles';

const About = () => {
  return (
    <Content>
      <Container id="about">
        <img src={Pfp} alt="foto-perfil" />
        <div>
          <AboutContainer>
            <div className="text">
              <Title>Sobre mim</Title>
              <p>
                Me chamo Luan Panno, sou desenvolvedor Front-End e atualmente
                trabalho na Metatron. Sou apaixonado por tecnologia e descobri
                na programação uma oportunidade para concretizar ideias,
                juntando o que eu mais gosto: tecnologia e design. Comecei a
                estudar programação em dezembro de 2017, e na metade de 2018 eu
                iniciei os estudos em Front-End. Comecei o curso de Ciência da
                Computação em 2019, porém tranquei minha matrícula no início de
                2020 por conta da pandemia, e decidi focar totalmente na área de
                Front-End (e de vez em quando, arranhando em Back-End).
              </p>
              <Info />
            </div>
          </AboutContainer>
          <Skills>
            <Title>Skills</Title>
            <div className="icons">
              <Icon color="#f16528" text="HTML5" icon={<FaHtml5 />} />
              <Icon color="#2a65f1" text="CSS3" icon={<FaCss3Alt />} />
              <Icon color="#f7df1d" text="JavaScript" icon={<SiJavascript />} />
              <Icon color="#2f74c0" text="TypeScript" icon={<SiTypescript />} />
              <Icon color="#80bd00" text="Node.js" icon={<FaNode />} />
              <Icon color="#66d9f8" text="ReactJS" icon={<FaReact />} />
            </div>
          </Skills>
        </div>
      </Container>
    </Content>
  );
};

export default About;
