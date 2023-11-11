import styled, { keyframes } from 'styled-components'


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;


const beat = keyframes`
  to {
    transform: scale(1.1);
  }
`;

export const HeartContainer = styled.img`
  color: #e00;
  animation: ${beat} 0.9s infinite alternate;
  transform-origin: center;
  
`;