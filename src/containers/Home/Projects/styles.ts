import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px var(--body-horizontal-gap) 100px var(--body-horizontal-gap);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
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
