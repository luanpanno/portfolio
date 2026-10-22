import styled from 'styled-components';

export const Text = styled.p`
  max-width: 62ch;
`;

export const Details = styled.dl`
  margin-top: 32px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  div {
    display: grid;
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: 16px;
    padding: 12px 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  dt {
    color: ${(props) => props.theme.colors.muted};
  }

  @media screen and (max-width: 480px) {
    div {
      grid-template-columns: minmax(0, 1fr);
      gap: 2px;
    }
  }
`;
