export interface TextProps {
  color?: string; // color

  regular?: boolean;
  medium?: boolean;
  bold?: boolean;

  fs?: number; // fontSize
  lh?: number; // lineHeight
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'; // fontWeight
  fontFamily?: string; // fontFamily

  td?: 'none' | 'underline' | 'line-through' | 'underline line-through'; // textDecorationLine
  ta?: 'auto' | 'left' | 'right' | 'center' | 'justify'; // textAlign
}

export interface TextStyleProps {
  color?: string;

  fontSize?: number;
  lineHeight?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  fontFamily?: string;

  textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}
