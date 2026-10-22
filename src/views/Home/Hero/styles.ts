import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Identity = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    background-color: ${(props) => props.theme.colors.surface};
  }

  h1 {
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
  }

  p {
    color: ${(props) => props.theme.colors.muted};
  }
`;

export const Lead = styled.p`
  max-width: 24ch;
  font-size: clamp(2rem, 1.3rem + 3vw, 3rem);
  font-weight: 500;
  line-height: 1.08;
  letter-spacing: -0.035em;
  text-wrap: balance;
`;

export const Links = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
  list-style: none;

  a {
    display: inline-block;
    padding: 4px 0;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.borderStrong};
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
    transition: text-decoration-color 0.15s ease;
  }

  a:hover {
    text-decoration-color: currentColor;
  }
`;
