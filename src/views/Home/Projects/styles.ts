import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: var(--section-padding);
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 36px;
  background: ${(props) => props.theme.colors.surface};
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: ${(props) => props.theme.colors.shadow};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: auto -5% -10% auto;
    width: 220px;
    height: 220px;
    border-radius: 999px;
    background: ${(props) => props.theme.colors.primarySoft};
    filter: blur(20px);
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
    border-radius: 28px;
  }
`;

export const Intro = styled.p`
  max-width: 760px;
  text-align: center;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.mutedText};
  font-size: 1rem;
`;

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 28px);
  width: 100%;
  align-items: stretch;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
