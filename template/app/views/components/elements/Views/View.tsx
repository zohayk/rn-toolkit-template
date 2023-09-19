import React, { Fragment, FunctionComponent } from 'react';
import { View as BaseView, ViewProps as BaseViewProps } from 'react-native';
import { ReactChildren } from 'types';
import {
  borderRadiusStyle,
  BorderRadiusProps,
  viewStyle,
  ViewProps as CustomViewProps,
  positionStyle,
  PositionProps,
  additionStyle,
  AdditionProps,
} from '../styles';

export type ViewProps = CustomViewProps &
  PositionProps &
  ReactChildren &
  BorderRadiusProps &
  AdditionProps &
  BaseViewProps;

export const View: FunctionComponent<ViewProps> = ({ children, style, ...props }) => (
  <BaseView
    style={[
      borderRadiusStyle(props),
      viewStyle(props),
      positionStyle(props),
      additionStyle(props),
      style,
    ]}
  >
    <Fragment>{children}</Fragment>
  </BaseView>
);

export const MuffledView: FunctionComponent<ViewProps> = ({ ...props }) => (
  <View {...props} onTouchStart={e => e.stopPropagation()} />
);

View.defaultProps = {
  width: '100%',
};
