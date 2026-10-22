import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid ${(props) => props.theme.colors.border};

  h3 {
    font-size: 1rem;
  }

  .hint {
    margin-top: 4px;
    color: ${(props) => props.theme.colors.muted};
    font-size: 0.9375rem;
  }

  .row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 16px;
  }

  button {
    min-height: 40px;
    padding: 0 18px;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
    font-size: 0.9375rem;
    font-weight: 500;
    transition: opacity 0.15s ease;
  }

  button:hover {
    opacity: 0.85;
  }

  button:disabled {
    cursor: progress;
    opacity: 0.6;
  }

  .status {
    font-size: 0.875rem;
  }

  .status.success {
    color: ${(props) => props.theme.colors.success};
  }

  .status.error {
    color: ${(props) => props.theme.colors.danger};
  }

  @media screen and (max-width: 600px) {
    .row {
      grid-template-columns: minmax(0, 1fr);
    }

    button {
      width: 100%;
    }
  }
`;
