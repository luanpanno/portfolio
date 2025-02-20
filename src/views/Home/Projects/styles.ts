import styled from 'styled-components';

export const Container = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--section-padding) var(--body-horizontal-gap);
  gap: var(--content-spacing);
  width: 100%;
  max-width: var(--body-max-width);
  background-color: ${(props) => props.theme.colors.background};
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--content-spacing);
  width: 100%;
  justify-items: center;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
