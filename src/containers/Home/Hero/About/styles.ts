import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  max-width: 50%;
`;

export const Hello = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 150px;
  border-radius: 50px 50px 50px 0;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  padding: 20px 8px;

  span {
    color: white;
  }
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 2.4rem;
`;

export const Position = styled.p`
  font-size: 1.2rem;
`;

export const BasicInfo = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 4px 0;
  row-gap: 12px;

  li,
  a {
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
`;

export const AboutMe = styled.p`
  letter-spacing: 0.4px;
  line-height: 28px;
  color: #bebebe;
  max-width: 500px;
  height: 100px;
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  font-size: 1.8rem;
  margin: 8px 0;
`;
