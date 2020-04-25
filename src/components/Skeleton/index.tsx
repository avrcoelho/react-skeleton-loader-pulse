import React, { useMemo } from "react";

import { Container, Loader } from "./styles";

interface Item {
  width?: number | string;
  height: number | string;
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  borderRadius?: number;
}

interface Props {
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
   *  width?: {string|number} - Default: 100%
   *  height: {string|number}
   * borderRadius?: {number} - Default: 0
   */
  items: Item[];
}

export const Skeleton: React.FC<Props> = ({
  width = "100%",
  align = "left",
  direction = "column",
  items,
}) => {
  // const checkWidth = useMemo(() => {
  //   const regex = /^([0-9]{1,})(px|%)$/;
  //   const regexNum = /^([0-9]{1,})$/;

  //   if (regex.test(String(width))) {
  //     return width;
  //   } else if (regexNum.test(String(width))) {
  //     return `${width}px`;
  //   }

  //   return width;
  // }, [width]);

  return (
    <Container width={width} align={align} direction={direction}>
      {console.log(items)}
      {items.map((item, index) => (
        <Loader
          key={index}
          width={item.width || "100%"}
          height={item.height}
          borderRadius={item.borderRadius}
          marginBottom={item.marginBottom}
          marginTop={item.marginTop}
          marginLeft={item.marginLeft}
          marginRight={item.marginRight}
        />
      ))}
    </Container>
  );
};
