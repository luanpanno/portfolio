import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    /* gap: 3.5px; */
    margin: 5px 0;

    h2 {
      color: #333;
      font-size: 1.4rem;
      text-transform: uppercase;
    }
  }
`;

export const Border = styled.div`
  height: 5px;
  width: 10%;
  /* width: 10px; */
  margin-left: 5px;
  /* margin-left: 10px; */
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};
`;
