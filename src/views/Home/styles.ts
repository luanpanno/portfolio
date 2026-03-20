import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(36px, 5vw, 64px);

  @media screen and (max-width: 768px) {
    gap: 28px;
  }
`;
