import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 999px;
  background-color: ${(props) => props.theme.colors.surfaceAccent};

  a {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 999px;
    filter: grayscale(1);
    transition:
      transform 0.2s ease,
      filter 0.2s ease,
      background-color 0.2s ease,
      box-shadow 0.2s ease;

    &:hover,
    &.active {
      filter: grayscale(0);
      background-color: ${(props) => props.theme.colors.surfaceElevated};
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      transform: translateY(-1px);
    }

    .flag {
      width: 24px;
      height: 18px;
      border-radius: 3px;
      overflow: hidden;
    }
  }
`;
