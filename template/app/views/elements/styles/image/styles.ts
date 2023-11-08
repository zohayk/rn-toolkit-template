import { ImageProps, ImageStyleProps } from './types';

export const imageStyle = (props: ImageProps): ImageStyleProps => {
  const style: ImageStyleProps = {
    source: props.source,
  };

  props.tintColor && (style.tintColor = props.tintColor);
  props.resizeMode && (style.resizeMode = props.resizeMode);

  return style;
};
