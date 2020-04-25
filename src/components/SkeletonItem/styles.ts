import styled, { keyframes } from "styled-components";

interface Props {
  color: string;
  pulseTime: number;
  width: number | string;
  height: number | string;
  borderRadius: number | string;
  marginTop: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  marginRight: number | string;
}

const pulseAnimation = keyframes`
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

export const Loader = styled.div<Props>`
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
