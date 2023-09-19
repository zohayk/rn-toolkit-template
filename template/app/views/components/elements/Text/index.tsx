import React, { Fragment, FunctionComponent } from 'react';
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

export const Text: FunctionComponent<TextProps> = ({ children, style, ...props }) => (
  <BaseText
    style={[
      borderRadiusStyle(props),
      viewStyle(props),
      positionStyle(props),
      textStyle(props),
      style,
    ]}
  >
    <Fragment>{children}</Fragment>
  </BaseText>
);

Text.defaultProps = {
  fs: 16,
  regular: true,
  color: theme.colors.black,
};
