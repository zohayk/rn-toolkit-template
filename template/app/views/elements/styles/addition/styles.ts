import { AdditionProps, AdditionStyleProps } from './types';

export const additionStyle = (props: AdditionProps): AdditionStyleProps => {
  const style: AdditionStyleProps = {};

  props.overflow && (style.overflow = props.overflow);

  return style;
};
