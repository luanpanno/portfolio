import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 100%;
  margin: 38px 0 32px 0;
  border-radius: 6px;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    padding: 32px 32px 0 32px;
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    margin: 16px 0;
  }

  p {
    margin-bottom: 16px;
    align-self: center;
  }

  input {
    padding: 16px;
    font-size: 0.9rem;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    transition: all 200ms;

    &:focus {
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    }
  }

  textarea {
    border: 1px solid #eaeaea;
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 16px;
    height: 100%;
    min-height: 120px;
    resize: none;

    &:focus {
      box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
    }
  }

  button {
    width: 100%;
    margin-top: 16px;
    background-color: ${(props) => props.theme.colors.primary};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 16px;
    color: white;
    transition: all 200ms;

    &:hover {
      opacity: 0.8;
    }
  }
`;
