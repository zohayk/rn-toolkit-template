import React from 'react';
import { Image as BaseImage, ImageProps as ImagePropsBase } from 'react-native';
import {
  borderRadiusStyle,
  BorderRadiusProps,
  viewStyle,
  ViewProps,
  imageStyle,
  ImageProps as CustomImageProps,
} from '../styles';

type ImageProps = ViewProps &
  Omit<ImagePropsBase, 'width' | 'height'> &
  BorderRadiusProps &
  CustomImageProps;

export const Image: React.FC<ImageProps> = ({
  style,
  width = '100%',
  height = '100%',
  ...props
}) => (
  <BaseImage
    {...borderRadiusStyle(props)}
    {...imageStyle(props)}
    style={[viewStyle({ width, height, ...props }), style]}
  />
);
