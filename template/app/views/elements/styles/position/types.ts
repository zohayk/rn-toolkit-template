import { DimensionValue } from 'react-native';

export interface PositionProps {
  top?: DimensionValue; // top
  bottom?: DimensionValue; // bottom
  left?: DimensionValue; // left
  right?: DimensionValue; // right

  position?: 'absolute' | 'relative'; // position
  zi?: number; // zIndex
}

export interface PositionStyleProps {
  top?: DimensionValue;
  bottom?: DimensionValue;
  left?: DimensionValue;
  right?: DimensionValue;

  position?: 'absolute' | 'relative';
  zIndex?: number;
}
