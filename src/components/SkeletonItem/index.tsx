import React, { useCallback } from "react";

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
  const checkValue = useCallback((value: string | number) => {
    const regex = /^([0-9]{1,})([a-zA-Z]{2}|%)$/;
    const regexNum = /(\d+(?:\.\d+)?)/;

    if (regex.test(String(value))) {
      return value;
    } else if (regexNum.test(String(value))) {
      return `${value}px`;
    }

    return value;
  }, []);

  return (
    <Loader
      color={color}
      pulseTime={pulseTime}
      width={checkValue(width)}
      height={checkValue(height)}
      borderRadius={checkValue(borderRadius)}
      marginBottom={checkValue(marginBottom)}
      marginTop={checkValue(marginTop)}
      marginLeft={checkValue(marginLeft)}
      marginRight={checkValue(marginRight)}
    />
  );
};
