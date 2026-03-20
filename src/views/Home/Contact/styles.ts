import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  padding: var(--section-padding);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 36px;
  background: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: ${(props) => props.theme.colors.shadow};

  @media screen and (max-width: 480px) {
    padding: 24px;
    border-radius: 28px;
  }
`;

export const Intro = styled.p`
  max-width: 660px;
  text-align: center;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.mutedText};
`;
