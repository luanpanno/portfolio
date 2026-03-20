import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 var(--body-horizontal-gap);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${(props) => props.theme.colors.borderStrong} 18%,
      ${(props) => props.theme.colors.borderStrong} 82%,
      transparent
    );
  }
`;
