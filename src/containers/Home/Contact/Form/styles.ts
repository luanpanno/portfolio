import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  width: 500px;
  height: 100%;
  border-radius: 6px;
  /* width: 100%; */

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    padding: 32px 32px 0 32px;

    @media screen and (max-width: 500px) {
      padding: 32px 12px 0 12px;
    }
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    margin: 16px 0;
  }

  @media screen and (max-width: 564px) {
    width: 100%;
  }

  p {
    text-align: center;
    letter-spacing: 0.4px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.text};
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
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;
