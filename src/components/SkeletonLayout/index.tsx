import React, { useCallback } from "react";

import { Container, Loader } from "./styles";

interface Item {
  width?: number | string;
  height: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  borderRadius?: number | string;
}

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
   * flex-direction of layout
   */
  direction?: "column" | "row";

  /**
   * align items of layout
   */
  align?: "center" | "left" | "right";

  /**
   * Array of Items:
   *  height: {string|number} - Required
   *  width: {string|number} - Default: 100% - Optional
   *  borderRadius: {number} - Default: 0 - Optional
   *  marginTop: {number|string} - Default: 3px - Optional
   *  marginBottom: {number|string} - Default: 3px - Optional
   *  marginLeft: {number|string} - Default: 0 - Optional
   *  marginRight: {number|string} - Default: 0 - Optional
   */
  items: Item[];
}

export const SkeletonLayout: React.FC<Props> = ({
  color = "#ccc",
  pulseTime = 1,
  width = "100%",
  align = "left",
  direction = "column",
  items,
}) => {
  const checkValue = useCallback((value: string | number) => {
    const regex = /^([0-9]{1,})([a-zA-Z]{2}|%)$/;
    const regexNum = /^([0-9]{1,})$/;

    if (regex.test(String(value))) {
      return value;
    } else if (regexNum.test(String(value))) {
      return `${value}px`;
    }

    return value;
  }, []);

  return (
    <Container
      color={color}
      width={checkValue(width)}
      align={align}
      direction={direction}
    >
      {items.map((item, index) => (
        <Loader
          key={index}
          pulseTime={pulseTime}
          width={item.width ? checkValue(item.width) : "100%"}
          height={checkValue(item.height)}
          borderRadius={item.borderRadius ? checkValue(item.borderRadius) : 0}
          marginBottom={
            item.marginBottom ? checkValue(item.marginBottom) : "3px"
          }
          marginTop={item.marginTop ? checkValue(item.marginTop) : "3px"}
          marginLeft={item.marginLeft ? checkValue(item.marginLeft) : 0}
          marginRight={item.marginRight ? checkValue(item.marginRight) : 0}
        />
      ))}
    </Container>
  );
};
