import React, { Fragment, FunctionComponent } from 'react';
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
  TouchableOpacityProps &
  ReactChildren &
  BorderRadiusProps &
  AdditionProps;

export const TouchableView: FunctionComponent<TouchableViewProps> = ({
  children,
  onPress,
  activeOpacity,
  style,
  ...props
}) => (
  <TouchableOpacity
    activeOpacity={activeOpacity}
    style={[viewStyle(props), borderRadiusStyle(props), additionStyle(props), style]}
    onPress={onPress}
  >
    <Fragment>{children}</Fragment>
  </TouchableOpacity>
);

TouchableView.defaultProps = {
  width: '100%',
  activeOpacity: 0.7,
};
