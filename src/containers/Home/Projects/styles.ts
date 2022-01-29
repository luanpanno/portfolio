import styled from 'styled-components';

export const Container = styled.section`
  padding: 25px var(--body-horizontal-gap) 50px var(--body-horizontal-gap);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;

  @media screen and (max-width: 1400px) {
    padding: 0 var(--body-horizontal-gap) 50px var(--body-horizontal-gap);
  }
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media screen and (max-width: 1367px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;
