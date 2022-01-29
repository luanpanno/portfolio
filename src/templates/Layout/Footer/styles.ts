import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: space-between;
  justify-content: space-evenly;
  gap: 4px;
  background-color: ${(props) => props.theme.colors.dark};
  padding: 16px 0;
  width: 100vw;
  padding: 64px 0;

  span,
  a {
    color: #dadada;
  }

  .grid-2 {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  @media screen and (max-width: 832px) {
    flex-direction: column;
    row-gap: 32px;
    align-items: flex-start;
    padding: 32px;

    & > div:nth-child(1) {
      align-self: center;
    }
  }
`;
