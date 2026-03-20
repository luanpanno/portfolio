import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin: 5px 0;
    text-align: center;
    max-width: 680px;

    h2 {
      color: ${(props) => props.theme.colors.title};
      font-size: clamp(2.4rem, 4vw, 3.4rem);
      font-weight: 500;
      text-transform: none;
    }
  }
`;

export const Border = styled.div`
  height: 2px;
  width: 88px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    transparent,
    ${(props) => props.theme.colors.primary} 20%,
    ${(props) => props.theme.colors.primary} 80%,
    transparent
  );
`;
