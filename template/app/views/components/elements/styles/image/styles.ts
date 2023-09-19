import { ImageProps, ImageStyleProps } from './types';

export const imageStyle = (props: ImageProps): ImageStyleProps => {
  const style: ImageStyleProps = {
    source: props.source,
  };

  props.tc && (style.tintColor = props.tc);
  props.rm && (style.tintColor = props.rm);

  return style;
};
