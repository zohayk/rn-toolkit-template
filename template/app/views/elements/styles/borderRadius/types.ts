export interface BorderRadiusProps {
  br?: number; // borderRadius
  borderStyle?: 'dashed' | 'dotted' | 'solid'; // borderStyle
  bblr?: number; // borderBottomLeftRadius
  bbrr?: number; // borderBottomRightRadius
  btlr?: number; // borderTopLeftRadius
  btrr?: number; // borderTopRightRadius
}

export interface BorderRadiusStyleProps {
  borderRadius?: number;
  borderStyle?: 'dashed' | 'dotted' | 'solid';
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}
