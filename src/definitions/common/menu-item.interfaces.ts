import { HTMLAttributeAnchorTarget } from 'react';

export interface IMenuItem {
  title: string;
  path: string;
  target?: HTMLAttributeAnchorTarget;
}
