import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  max-width: 50%;

  @media screen and (max-width: 1000px) {
    row-gap: 18px;
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    max-width: 100%;
  }
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

  @media screen and (max-width: 1000px) {
    align-self: center;
  }
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
  line-height: 22px;
  color: #888;
  max-width: 500px;
`;

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 350px;
  font-size: 1.8rem;
  margin: 8px 0;

  @media screen and (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
`;
