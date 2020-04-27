import styled from "styled-components/native";
import { Animated } from "react-native";

interface Props {
  color: string;
  width: number | string;
  height: number | string;
  borderRadius: number | string;
  marginTop: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  marginRight: number | string;
}

export const Loader = styled(Animated.View)<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
