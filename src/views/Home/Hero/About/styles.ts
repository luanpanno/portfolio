import styled, { css, keyframes } from 'styled-components';

const blockTitleStyles = css`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: min(620px, 100%);
  animation: ${fadeUp} 0.72s ease both;

  @media screen and (max-width: 1000px) {
    align-items: center;
    max-width: 100%;
    text-align: center;
  }
`;

export const Supplementary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  animation: ${fadeUp} 0.82s ease 0.08s both;

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
  font-weight: 600;
  letter-spacing: 0.1em;
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
    padding: 10px 15px;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 999px;
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    box-shadow: ${(props) => props.theme.colors.shadow};
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  li:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
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
  max-width: 52ch;
  color: ${(props) => props.theme.colors.mutedText};
  font-size: 1.04rem;
  line-height: 1.95;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  li {
    padding: 10px 15px;
    border-radius: 999px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    color: ${(props) => props.theme.colors.title};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    box-shadow: ${(props) => props.theme.colors.shadow};
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  li:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
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
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease;
  }

  li a:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderStrong};
    background-color: ${(props) => props.theme.colors.primarySoft};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  li.primary a {
    background-color: ${(props) => props.theme.colors.primary};
    border-color: transparent;
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  li.primary a:hover {
    background-color: ${(props) =>
      props.theme.mode === 'dark' ? '#ffffff' : props.theme.colors.title};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.primary};
  }

  li.primary .icon {
    color: inherit;
  }

  .label {
    color: inherit;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
`;
