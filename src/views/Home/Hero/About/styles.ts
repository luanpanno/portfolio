import styled, { css } from 'styled-components';

const blockTitleStyles = css`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: min(620px, 100%);

  @media screen and (max-width: 1000px) {
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;

export const Supplementary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  .skills-block {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .skills-title {
    ${blockTitleStyles}
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;

export const Hello = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.primarySoft};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Name = styled.h1`
  font-size: clamp(3.5rem, 8vw, 5.8rem);
  font-weight: 500;
  line-height: 0.92;
`;

export const Position = styled.p`
  color: ${(props) => props.theme.colors.mutedText};
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BasicInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 2px 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 999px;
    background-color: ${(props) => props.theme.colors.surfaceAccent};
    color: ${(props) => props.theme.colors.title};
    font-size: 0.95rem;
    font-weight: 500;
  }

  li a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: inherit;
  }

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary};
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const AboutMe = styled.p`
  max-width: 58ch;
  color: ${(props) => props.theme.colors.mutedText};
  font-size: 1.05rem;
  line-height: 1.85;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;

  li {
    padding: 11px 16px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    box-shadow: ${(props) => props.theme.colors.shadow};
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-top: 4px;

  li a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    font-size: 0.95rem;
    font-weight: 600;
    box-shadow: ${(props) => props.theme.colors.shadow};
  }

  li a:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
  }

  .label {
    color: inherit;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
