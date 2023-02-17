import styled from 'styled-components';

export const Container = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px var(--body-horizontal-gap) 64px var(--body-horizontal-gap);
  row-gap: 32px;
  width: 100%;
  max-width: var(--body-max-width);
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  width: 100%;

  @media screen and (max-width: 1367px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;
