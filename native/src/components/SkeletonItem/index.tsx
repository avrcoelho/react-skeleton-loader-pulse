import React, { useState, useEffect } from "react";
import { Animated } from "react-native";

import { Loader } from "./styles";

interface Props {
  /**
   * Skeleton color
   */
  color?: string;
  /**
   * pulse time
   */
  pulseTime?: number;
  /**
   * width container component
   */
  width?: number | string;
  /**
   * height container component
   */
  height?: number | string;
  /**
   * margin top component
   */
  marginTop?: number | string;
  /**
   * margin bottom component
   */
  marginBottom?: number | string;
  /**
   * margin left component
   */
  marginLeft?: number | string;
  /**
   * margin right component
   */
  marginRight?: number | string;
  /**
   * border radius component
   */
  borderRadius?: number | string;
}

export const SkeletonItem: React.FC<Props> = ({
  color = "#ccc",
  pulseTime = 1,
  width = "100%",
  height = "10px",
  marginBottom = 0,
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  borderRadius = 0,
}) => {
  const [opacity] = useState<Animated.Value>(new Animated.Value(0.1));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: Number(`${pulseTime}000`),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.1,
          duration: Number(`${pulseTime}000`),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  function checkValue(value: string | number) {
    const regex = /^([0-9]{1,})([a-zA-Z]{2}|%)$/;
    const regexNum = /^([0-9]{1,})$/;

    if (regex.test(String(value))) {
      return value;
    } else if (regexNum.test(String(value))) {
      return `${value}px`;
    }

    return value;
  }

  return (
    <Loader
      color={color}
      width={checkValue(width)}
      height={checkValue(height)}
      borderRadius={checkValue(borderRadius)}
      marginBottom={checkValue(marginBottom)}
      marginTop={checkValue(marginTop)}
      marginLeft={checkValue(marginLeft)}
      marginRight={checkValue(marginRight)}
      style={{ opacity }}
    />
  );
};
