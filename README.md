# React Skeleton Pulse Loader Component

## Install

```shell
npm install react-skeleton-pulse-loader
```

ou

```shell
yarn add react-skeleton-pulse-loader
```

## Usage

### SkeletonItem

```js
import React from "react";
import { SkeletonItem } from "react-skeleton-pulse-loader";

export default function Component() {
  return <SkeletonItem />;
}
```

### Props

| property     | propType                      | required | default | description                |
| ------------ | ----------------------------- | -------- | ------- | -------------------------- |
| color        | string \| undefined           | \-       | \#ccc   | Skeleton color             |
| pulseTime    | number \| undefined           | \-       | 1       | pulse time                 |
| width        | string \| number \| undefined | \-       | 100px   | width container component  |
| height       | string \| number \| undefined | \-       | 10px    | height container component |
| marginTop    | string \| number \| undefined | \-       | 0       | margin top component       |
| marginBottom | string \| number \| undefined | \-       | 0       | margin bottom component    |
| marginLeft   | string \| number \| undefined | \-       | 0       | margin left component      |
| marginRight  | string \| number \| undefined | \-       | 0       | margin right component     |
| borderRadius | string \| number \| undefined | \-       | 0       | border radius component    |

### SkeletonLayout

```js
import React from "react";
import { SkeletonLayout } from "react-skeleton-pulse-loader";

export default function Component() {
  return (
    <SkeletonLayout
      align="center"
      items={[
        {
          borderRadius: "50%",
          height: 100,
          marginBottom: 15,
          width: 100,
        },
        {
          height: 25,
          marginBottom: 10,
          width: 250,
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
  );
}
```

### Props

| property  | propType                                   | required | default | description               |
| --------- | ------------------------------------------ | -------- | ------- | ------------------------- |
| color     | string \| undefined                        | \-       | \#ccc   | Skeleton color            |
| pulseTime | number \| undefined                        | \-       | 1       | pulse time                |
| width     | string \| number \| undefined              | \-       | 100%    | width container component |
| direction | "column" \| "row" \| undefined             | \-       | column  | flex\-direction of layout |
| align     | "center" \| "left" \| "right" \| undefined | \-       | left    | align items of layout     |
| items     | Item\[\]                                   | yes      | \-      | Layout: Array of objects  |
|           |                                            |          |         |                           |
