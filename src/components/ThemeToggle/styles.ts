import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
  margin-bottom: 2px;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
