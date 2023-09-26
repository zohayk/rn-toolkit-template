import { PositionProps, PositionStyleProps } from './types';
import { moderateScale } from 'styles';

export const positionStyle = (props: PositionProps): PositionStyleProps => {
  const style: PositionStyleProps = {};

  if (typeof props.top === 'number') {
    style.top = moderateScale(props.top);
  }
  if (typeof props.bottom === 'number') {
    style.bottom = moderateScale(props.bottom);
  }
  if (typeof props.left === 'number') {
    style.left = moderateScale(props.left);
  }
  if (typeof props.right === 'number') {
    style.right = moderateScale(props.right);
  }
  props.position && (style.position = props.position);
  if (typeof props.zi === 'number') {
    style.zIndex = props.zi;
  }

  return style;
};
