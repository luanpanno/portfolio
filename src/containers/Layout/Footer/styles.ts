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
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: white;
    /* font-size: 1.8rem; */
    font-size: 2.4rem;
  }
`;
