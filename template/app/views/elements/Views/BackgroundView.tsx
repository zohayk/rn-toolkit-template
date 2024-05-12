import React, { Fragment } from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { ReactChildren } from 'types';
import {
  borderRadiusStyle,
  BorderRadiusProps,
  viewStyle,
  ViewProps,
  imageStyle,
  ImageProps as CustomImageProps,
  additionStyle,
  AdditionProps,
} from '../styles';

type BackgroundViewProps = ViewProps &
  Omit<ImageBackgroundProps, 'width' | 'height'> &
  ReactChildren &
  BorderRadiusProps &
  AdditionProps &
  CustomImageProps;

export const BackgroundView: React.FC<BackgroundViewProps> = ({
  children,
  style,
  width = '100%',
  ...props
}) => (
  <ImageBackground
    {...borderRadiusStyle(props)}
    {...imageStyle(props)}
    style={[viewStyle({ width, ...props }), additionStyle(props), style]}
  >
    <Fragment>{children}</Fragment>
  </ImageBackground>
);
