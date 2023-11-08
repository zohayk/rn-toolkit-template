import { TextProps, TextStyleProps } from './types';
import { theme } from 'styles';

export const textStyle = (props: TextProps): TextStyleProps => {
  const style: TextStyleProps = {};

  style.fontFamily = theme.fonts.Regular; // Regular default
  style.fontWeight = '400';

  if (props.medium) {
    style.fontFamily = theme.fonts.Medium; // Medium
    style.fontWeight = '500';
  }
  if (props.bold) {
    style.fontFamily = theme.fonts.Bold; // Bold
    style.fontWeight = '700';
  }

  if (props.fontWeight !== undefined) {
    style.fontWeight = props.fontWeight;
  }
  if (props.fs !== undefined) {
    style.fontSize = props.fs;
  }
  if (props.lh !== undefined) {
    style.lineHeight = props.lh;
  }

  props.color && (style.color = props.color);
  props.ta && (style.textAlign = props.ta);
  props.td && (style.textDecorationLine = props.td);

  return style;
};
