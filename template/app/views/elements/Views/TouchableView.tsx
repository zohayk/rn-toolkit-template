import React, { Fragment } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ReactChildren } from 'types';
import {
  borderRadiusStyle,
  BorderRadiusProps,
  viewStyle,
  ViewProps,
  additionStyle,
  AdditionProps,
} from '../styles';

type TouchableViewProps = ViewProps &
  Omit<TouchableOpacityProps, 'onPress'> & { onPress?: () => void } & ReactChildren &
  BorderRadiusProps &
  AdditionProps;

export const TouchableView: React.FC<TouchableViewProps> = ({
  children,
  onPress,
  activeOpacity = 0.7,
  disabled,
  width = '100%',
  style,
  ...props
}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={[viewStyle({ width, ...props }), borderRadiusStyle(props), additionStyle(props), style]}
    onPress={onPress}
    disabled={disabled}
  >
    <Fragment>{children}</Fragment>
  </TouchableOpacity>
);
