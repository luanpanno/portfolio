import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(40px, 6vw, 72px);

  @media screen and (max-width: 768px) {
    gap: 32px;
  }
`;
