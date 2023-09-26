import { AnimatableNumericValue, DimensionValue } from 'react-native';

export interface ViewProps {
  pv?: DimensionValue; // paddingVertical
  ph?: DimensionValue; // paddingHorizontal
  pl?: DimensionValue; // paddingLeft
  pr?: DimensionValue; // paddingRight
  pt?: DimensionValue; // paddingTop
  pb?: DimensionValue; // paddingBottom

  mv?: DimensionValue; // marginVertical
  mh?: DimensionValue; // marginHorizontal
  ml?: DimensionValue; // marginLeft
  mr?: DimensionValue; // marginRight
  mt?: DimensionValue; // marginTop
  mb?: DimensionValue; // marginBottom

  bc?: string; // borderColor
  bw?: number; // borderWidth
  bg?: string; // backgroundColor

  width?: DimensionValue; // width
  maxWidth?: DimensionValue; // maxWidth
  minWidth?: DimensionValue; // minWidth
  height?: DimensionValue; // height
  maxHeight?: DimensionValue; // maxHeight
  minHeight?: DimensionValue; // minHeight

  rgap?: number;
  gap?: number;
  cgap?: number;
  flex?: number;
  flexGrow?: number;

  fw?: 'wrap' | 'nowrap'; // flexWrap
  fd?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; // flexDirection
  jc?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'; // justifyContent
  ai?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'; // alignItems
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign

  opacity?: AnimatableNumericValue; // opacity
}

export interface ViewStyleProps {
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  paddingLeft?: DimensionValue;
  paddingRight?: DimensionValue;
  paddingTop?: DimensionValue;
  paddingBottom?: DimensionValue;

  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginLeft?: DimensionValue;
  marginRight?: DimensionValue;
  marginTop?: DimensionValue;
  marginBottom?: DimensionValue;

  borderColor?: string;
  borderWidth?: number;
  backgroundColor?: string;

  width?: DimensionValue;
  maxWidth?: DimensionValue;
  minWidth?: DimensionValue;
  height?: DimensionValue;
  maxHeight?: DimensionValue;
  minHeight?: DimensionValue;

  rowGap?: number;
  gap?: number;
  columnGap?: number;
  flex?: number;
  flexGrow?: number;

  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';

  opacity?: AnimatableNumericValue;
}
