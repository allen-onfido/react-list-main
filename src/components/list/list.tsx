import { classy } from '@onfido/castor';
import React from 'react';
import * as styles from './list.module.scss';

export const List = ({ className, ...props }: JSX.IntrinsicElements['ul']) => (
  <ul {...props} className={classy(className, styles.list)} />
);
