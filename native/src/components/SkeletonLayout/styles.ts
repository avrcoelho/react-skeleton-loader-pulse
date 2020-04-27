import styled from "styled-components/native";
import { Animated } from "react-native";

interface PropsContainer {
  color: string;
  width: number | string;
  direction: "column" | "row";
  align: "center" | "left" | "right";
}

interface PropsLoader {
  width: number | string;
  height: number | string;
  borderRadius: number | string;
  marginTop: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  marginRight: number | string;
}

export const Container = styled.View<PropsContainer>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
`;

export const Loader = styled(Animated.View)<PropsLoader>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
