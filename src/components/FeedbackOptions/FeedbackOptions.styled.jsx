import styled, {keyframes} from 'styled-components';

const wobble = keyframes`
  16.65% {
      transform: skew(-12deg);
  }
  33.3% {
      transform: skew(10deg);
  }
  49.95% {
      transform: skew(-6deg);
  }
  66.6% {
      transform: skew(4deg);
  }
  83.25% {
      transform: skew(-2deg);
  }
  100% {
      transform: skew(0);
  }
`;


export const StyledButton = styled.button`
  min-width: 70px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;

  border-radius: 5px;
  margin : 10px;

  &:hover {
    animation-name: ${wobble};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 1;


  }

`;