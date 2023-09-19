import React, { FunctionComponent } from 'react';
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

export const Image: FunctionComponent<ImageProps> = ({ style, ...props }) => (
  <BaseImage
    {...borderRadiusStyle(props)}
    {...imageStyle(props)}
    style={[viewStyle(props), style]}
  />
);

Image.defaultProps = {
  width: '100%',
  height: '100%',
};
