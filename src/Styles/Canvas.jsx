import styled from 'styled-components';

export const Canvas = styled.canvas`
  background: ${({ $bg }) => $bg ?? 'green'};
  width: 100vw;
  height: 100vh;
  filter: blur(6px);
`;