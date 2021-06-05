import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: white;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 16px 0;
  width: 100vw;

  span {
    text-align: center;
    word-wrap: break-word;
    white-space: pre-wrap;

    @media screen and (max-width: 400px) {
      font-size: 0.9rem;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    color: white;
    font-size: 2.4rem;
  }
`;
