import styled from 'styled-components';

interface IconProps {
  color: string;
}

export const Container = styled.section`
  display: flex;
  gap: 25px;
  padding: 50px 150px;
  background-color: white;

  img {
    width: 350px;
    border-radius: 20px;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 50px;

    .text {
      display: flex;
      flex-direction: column;
      gap: 15px;

      p {
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.text};
        letter-spacing: 0.25px;
      }
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .icons {
      display: flex;
      align-items: center;
      gap: 75px;
    }
  }
`;

export const Icon = styled.div<IconProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  svg {
    font-size: 2.5rem;
    fill: ${(props) => props.color};
  }
`;
