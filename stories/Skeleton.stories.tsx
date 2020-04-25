import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { SkeletonLayout, SkeletonItem } from "../src";

storiesOf("Skeleton", module)
  .addDecorator(withKnobs)
  .add("Item", () => <SkeletonItem />)
  .add("Layout", () => (
    <SkeletonLayout
      align="center"
      items={[
        {
          height: 100,
          width: 100,
          borderRadius: "50%",
          marginBottom: 15,
        },
        {
          height: 25,
          width: 250,
          marginBottom: 10,
        },
        {
          height: 10,
          width: 270,
        },
        {
          height: 10,
          width: 300,
        },
        {
          height: 10,
          width: 280,
        },
      ]}
    />
  ));
