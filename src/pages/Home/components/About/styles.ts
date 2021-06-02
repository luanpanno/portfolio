import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 25px;
  padding: 100px 150px;
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
        line-height: 22px;
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
