import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  li {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export const Row = styled.a`
  display: grid;
  grid-template-columns: 80px minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  padding: 14px 0;

  img {
    width: 80px;
    height: 50px;
    border-radius: 4px;
    object-fit: cover;
    background-color: ${(props) => props.theme.colors.surface};
    outline: 1px solid ${(props) => props.theme.colors.border};
    outline-offset: -1px;
    transition: opacity 0.2s ease;
  }

  .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .name {
    font-family: var(--font-display);
    font-optical-sizing: auto;
    font-size: 1.0625rem;
    font-weight: 500;
  }

  .stack,
  .kind {
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.875rem;
  }

  .kind {
    transition: color 0.15s ease;
  }

  @media (hover: hover) {
    &:hover .name {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 4px;
    }

    &:hover .kind {
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 64px minmax(0, 1fr) auto;
    gap: 12px;

    img {
      width: 64px;
      height: 40px;
    }
  }
`;
