import styled from 'styled-components';

export const Item = styled.li`
  a {
    color: ${(props) => props.theme.colors.text};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 500;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors.surfaceAccent};
      color: ${(props) => props.theme.colors.title};
      transform: translateY(-1px);
    }

    @media screen and (max-width: 832px) {
      width: 100%;
      justify-content: flex-start;
      padding: 14px 16px;
      border: 1px solid transparent;
      background-color: ${(props) => props.theme.colors.surfaceAccent};

      &:hover {
        transform: none;
        border-color: ${(props) => props.theme.colors.borderStrong};
      }
    }
  }
`;
