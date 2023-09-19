import { BorderRadiusProps, BorderRadiusStyleProps } from './types';
import { moderateScale } from 'styles';

export const borderRadiusStyle = (props: BorderRadiusProps): BorderRadiusStyleProps => {
  const style: BorderRadiusStyleProps = {};

  if (props.br !== undefined) {
    style.borderRadius = moderateScale(props.br);
  }
  if (props.bblr !== undefined) {
    style.borderBottomLeftRadius = moderateScale(props.bblr);
  }
  if (props.bbrr !== undefined) {
    style.borderBottomRightRadius = moderateScale(props.bbrr);
  }
  if (props.btlr !== undefined) {
    style.borderTopLeftRadius = moderateScale(props.btlr);
  }
  if (props.btrr !== undefined) {
    style.borderTopRightRadius = moderateScale(props.btrr);
  }

  return style;
};
