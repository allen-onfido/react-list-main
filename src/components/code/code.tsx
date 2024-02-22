import { classy } from '@onfido/castor';
import React from 'react';
import * as styles from './code.module.scss';

export const Code = ({
  className,
  ...props
}: JSX.IntrinsicElements['code']) => (
  <code {...props} className={classy(className, styles.code)} />
);
