import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 760px;
  padding: 34px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.surfaceElevated} 0%,
    ${(props) => props.theme.colors.surface} 100%
  );
  box-shadow: ${(props) => props.theme.colors.shadow};

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  p {
    max-width: 40rem;
    color: ${(props) => props.theme.colors.mutedText};
    line-height: 1.8;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    min-width: 180px;
    padding: 14px 22px;
    border-radius: 999px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
    font-size: 0.98rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.colors.shadow};
  }

  button:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  button:disabled {
    background-color: ${(props) => props.theme.colors.surfaceAccent};
    color: ${(props) => props.theme.colors.lightText};
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }

  @media screen and (max-width: 480px) {
    padding: 22px;
    border-radius: 24px;

    button {
      width: 100%;
      align-self: stretch;
    }
  }
`;
