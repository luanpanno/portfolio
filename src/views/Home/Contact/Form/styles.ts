import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 760px;
  padding: 34px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.background};
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
    color: ${(props) => props.theme.colors.text};
    line-height: 1.8;
  }

  .status {
    padding: 14px 16px;
    border-radius: 18px;
    border: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.surfaceElevated};
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .status.success {
    border-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.green};
  }

  .status.error {
    border-color: ${(props) => props.theme.colors.red};
    color: ${(props) => props.theme.colors.red};
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    min-width: 180px;
    gap: 10px;
    padding: 12px 16px;
    border: 1px solid transparent;
    border-radius: 999px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease,
      color 0.2s ease;
  }

  button:hover {
    transform: translateY(-2px);
    background-color: ${(props) =>
      props.theme.mode === 'dark' ? '#ffffff' : props.theme.colors.title};
    color: ${(props) => (props.theme.mode === 'dark' ? '#0d1419' : '#ffffff')};
    box-shadow: ${(props) => props.theme.colors.shadowStrong};
  }

  button:disabled {
    background-color: ${(props) => props.theme.colors.surfaceAccent};
    color: ${(props) => props.theme.colors.lightText};
    border-color: ${(props) => props.theme.colors.border};
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
