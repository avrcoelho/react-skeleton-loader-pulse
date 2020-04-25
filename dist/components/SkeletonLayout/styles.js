import styled, { keyframes } from "styled-components";
const pulseAnimation = keyframes `
    0% {
        background-color: rgba(165, 165, 165);
        opacity: 0.1;
    }

    50% {
        background-color: rgba(165, 165, 165);
        opacity: 0.3;
    }

    100% {
        background-color: rgba(165, 165, 165);
        opacity: 0.1;
    }
`;
export const Container = styled.div `
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
`;
export const Loader = styled.div `
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  animation: ${pulseAnimation};
  animation-duration: ${(props) => `${props.pulseTime}s`};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
//# sourceMappingURL=styles.js.map