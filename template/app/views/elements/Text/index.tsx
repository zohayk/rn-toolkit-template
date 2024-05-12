import React, { Fragment } from 'react';
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native';
import { ReactChildren } from 'types';
import { theme } from 'styles';
import {
  borderRadiusStyle,
  BorderRadiusProps,
  viewStyle,
  ViewProps,
  positionStyle,
  PositionProps,
  textStyle,
  TextProps as CustomTextProps,
} from '../styles';

export type TextProps = ViewProps &
  PositionProps &
  ReactChildren &
  BorderRadiusProps &
  BaseTextProps &
  CustomTextProps;

export const Text: React.FC<TextProps> = ({
  children,
  style,
  fs = 16,
  color = theme.colors.black,
  regular = true,
  ...props
}) => (
  <BaseText
    {...(props.onPress ? { onPress: props.onPress, suppressHighlighting: true } : {})}
    {...(props.numberOfLines ? { numberOfLines: props.numberOfLines } : {})}
    style={[
      borderRadiusStyle(props),
      viewStyle(props),
      positionStyle(props),
      textStyle({ fs, color, regular, ...props }),
      style,
    ]}
  >
    <Fragment>{children}</Fragment>
  </BaseText>
);
