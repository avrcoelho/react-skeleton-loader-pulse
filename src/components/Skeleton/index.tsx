import React, { useMemo } from 'react';

import { Container } from './styles'

interface Layout {
  width?: number | string;
  height: number | string;
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
  direction?: 'column' | 'row';
  
  /**
   * align items of layout
   */
  align?: 'center' | 'left' | 'right';

  /**
   * Array of Layout:
   *  width?: {string|number} - Default: 100%
   *  height: {string|number}
   * borderRadius?: {number} - Default: 0
   */
  layout: Layout[];
}

export const Skeleton: React.FC<Props> = ({
  width = '100%',
  align = 'left',
  direction = 'column',
  layout,
}) => {
  const checkWidth = useMemo(() => {
    const regex = /^([0-9]{1,})(px|%)$/
    const regexNum = /^([0-9]{1,})$/

    if (regex.test(String(width))) {
      return width;
    } else if (regexNum.test(String(width))) {
      return `${width}px`
    }

    return width;
  }, [width])

  return <Container width={checkWidth} align={align} direction={direction} />
};
