import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: var(--label-column) minmax(0, 1fr);
  column-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 20px;
  }
`;

export const Heading = styled.h2`
  color: ${(props) => props.theme.colors.muted};
  font-size: 0.9375rem;
  line-height: 1.6;
`;

export const Body = styled.div`
  min-width: 0;
`;
