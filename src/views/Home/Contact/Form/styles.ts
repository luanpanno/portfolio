import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--content-spacing);
  box-shadow: 0 1px 10px 1px ${(props) => props.theme.colors.light};
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.background};
  transition: box-shadow 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      box-shadow: 0 2px 15px 2px ${(props) => props.theme.colors.light};
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--content-spacing);
    height: 100%;
    padding: 32px 32px 0 32px;

    @media screen and (max-width: 768px) {
      padding: calc(var(--section-padding) * 0.75)
        calc(var(--section-padding) * 0.75) 0;
    }

    @media screen and (max-width: 480px) {
      padding: var(--content-spacing) var(--content-spacing) 0;
    }
  }

  .fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    margin: calc(var(--content-spacing) * 0.5) 0;
  }

  p {
    text-align: center;
    letter-spacing: 0.4px;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.text};

    @media screen and (max-width: 480px) {
      font-size: 0.9rem;
    }
  }

  button {
    width: 100%;
    margin-top: 16px;
    background-color: ${(props) => props.theme.colors.primary};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: calc(var(--content-spacing) * 0.75);
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
      }
    }

    &:disabled {
      background-color: ${(props) => props.theme.colors.light};
      cursor: not-allowed;
      transform: none;
    }

    @media screen and (max-width: 480px) {
      padding: var(--content-spacing);
      font-size: 0.9rem;
    }
  }
`;
