import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
} from 'react-icons/fa';

import Pfp from '@assets/img/profile-pic.jpg';
import Title from '@components/Title';

import { Container, Icon } from './styles';

const About = () => {
  return (
    <Container>
      <img src={Pfp} alt="foto-perfil" />
      <div className="about">
        <div className="text">
          <Title>Sobre mim</Title>
          <p>
            Me chamo Luan Panno, sou desenvolvedor Front-End e atualmente
            trabalho na Metatron. Sou apaixonado por tecnologia e descobri na
            programação uma oportunidade para concretizar ideias, juntando o que
            eu mais gosto: tecnologia e design. Comecei a estudar programação em
            dezembro de 2017, e na metade de 2018 eu iniciei os estudos em
            Front-End. Comecei o curso de Ciência da Computação em 2019, porém
            tranquei minha matrícula no início de 2020 por conta da pandemia, e
            decidi focar totalmente na área de Front-End (e de vez em quando,
            arranhando em Back-End).
          </p>
        </div>

        <div className="skills">
          <Title>Skills</Title>
          <div className="icons">
            <Icon color="#f16528">
              <span>HTML5</span>
              <FaHtml5 />
            </Icon>
            <Icon color="#2a65f1">
              <span>CSS3</span>
              <FaCss3Alt />
            </Icon>
            <Icon color="#f7df1d">
              <span>JavaScript</span>
              <FaJsSquare />
            </Icon>
            <Icon color="#80bd00">
              <span>Node.js</span>
              <FaNode />
            </Icon>
            <Icon color="#66d9f8">
              <span>React</span>
              <FaReact />
            </Icon>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
