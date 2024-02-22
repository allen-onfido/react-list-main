import { classy } from '@onfido/castor';
import React from 'react';
import * as styles from './card.module.scss';

export const Card = ({ className, ...props }: JSX.IntrinsicElements['div']) => (
  <div {...props} className={classy(className, styles.card)} />
);
