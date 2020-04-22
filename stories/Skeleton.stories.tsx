import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs'

import { Skeleton } from '../src';

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Skeleton layout={[{
    height: 10
  }]} />)