import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 100px var(--body-horizontal-gap);
  background-color: white;

  img {
    max-height: 300px;
    border-radius: 100%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;
  }

  @media screen and (max-width: 1367px) {
    flex-direction: column;
    gap: 32px;
    padding: 50px var(--body-horizontal-gap);

    img {
      max-height: 200px;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  gap: 8px;

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    p {
      color: ${(props) => props.theme.colors.text};
      line-height: 22px;
    }
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  .icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 75px;
  }
`;
