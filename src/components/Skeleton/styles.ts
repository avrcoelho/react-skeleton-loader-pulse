import styled, { keyframes } from "styled-components";

interface PropsContainer {
  width: number | string;
  direction: "column" | "row";
  align: "center" | "left" | "right";
}

interface PropsLoader {
  width?: number | string;
  height: number | string;
  borderRadius?: number;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
}

const pulseAnimation = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1)
    }

    50% {
        background-color: rgba(165, 165, 165, 0.3)
    }

    100% {
        background-color: rgba(165, 165, 165, 0.1)
    }
`;

export const Container = styled.div<PropsContainer>`
  width: 600px;
  height: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
`;

export const Loader = styled.div<PropsLoader>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "8px"};
  border-radius: ${(props) => props.borderRadius || 0};
  margin-top: ${(props) => props.borderRadius || "3px"};
  margin-bottom: ${(props) => props.borderRadius || "3px"};
  margin-left: ${(props) => props.borderRadius || 0};
  margin-right: ${(props) => props.borderRadius || 0};
  animation: ${pulseAnimation} 1s infinite ease-in-out;
`;
