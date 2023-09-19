import { ViewProps, ViewStyleProps } from './types';
import { moderateScale } from 'styles';

export const viewStyle = (props: ViewProps): ViewStyleProps => {
  const style: ViewStyleProps = {};

  if (props.pv !== undefined) {
    typeof props.pv === 'string' && (style.paddingVertical = props.pv);
    typeof props.pv === 'number' && (style.paddingVertical = moderateScale(props.pv));
  }
  if (props.ph !== undefined) {
    typeof props.ph === 'string' && (style.paddingHorizontal = props.ph);
    typeof props.ph === 'number' && (style.paddingHorizontal = moderateScale(props.ph));
  }
  if (props.pb !== undefined) {
    typeof props.pb === 'string' && (style.paddingBottom = props.pb);
    typeof props.pb === 'number' && (style.paddingBottom = moderateScale(props.pb));
  }
  if (props.pt !== undefined) {
    typeof props.pt === 'string' && (style.paddingTop = props.pt);
    typeof props.pt === 'number' && (style.paddingTop = moderateScale(props.pt));
  }
  if (props.pl !== undefined) {
    typeof props.pl === 'string' && (style.paddingLeft = props.pl);
    typeof props.pl === 'number' && (style.paddingLeft = moderateScale(props.pl));
  }
  if (props.pr !== undefined) {
    typeof props.pr === 'string' && (style.paddingRight = props.pr);
    typeof props.pr === 'number' && (style.paddingRight = moderateScale(props.pr));
  }

  if (props.mv !== undefined) {
    typeof props.mv === 'string' && (style.marginVertical = props.mv);
    typeof props.mv === 'number' && (style.marginVertical = moderateScale(props.mv));
  }
  if (props.mh !== undefined) {
    typeof props.mh === 'string' && (style.marginHorizontal = props.mh);
    typeof props.mh === 'number' && (style.marginHorizontal = moderateScale(props.mh));
  }
  if (props.mb !== undefined) {
    typeof props.mb === 'string' && (style.marginBottom = props.mb);
    typeof props.mb === 'number' && (style.marginBottom = moderateScale(props.mb));
  }
  if (props.mt !== undefined) {
    typeof props.mt === 'string' && (style.marginTop = props.mt);
    typeof props.mt === 'number' && (style.marginTop = moderateScale(props.mt));
  }
  if (props.ml !== undefined) {
    typeof props.ml === 'string' && (style.marginLeft = props.ml);
    typeof props.ml === 'number' && (style.marginLeft = moderateScale(props.ml));
  }
  if (props.mr !== undefined) {
    typeof props.mr === 'string' && (style.marginRight = props.mr);
    typeof props.mr === 'number' && (style.marginRight = moderateScale(props.mr));
  }

  props.bc && (style.borderColor = props.bc);
  if (props.bw !== undefined) {
    style.borderWidth = moderateScale(props.bw);
  }
  props.bg && (style.backgroundColor = props.bg);

  if (props.width) {
    typeof props.width === 'string' && (style.width = props.width);
    typeof props.width === 'number' && (style.width = moderateScale(props.width));
  }
  if (props.maxWidth) {
    typeof props.maxWidth === 'string' && (style.maxWidth = props.maxWidth);
    typeof props.maxWidth === 'number' && (style.maxWidth = moderateScale(props.maxWidth));
  }
  if (props.minWidth) {
    typeof props.minWidth === 'string' && (style.minWidth = props.minWidth);
    typeof props.minWidth === 'number' && (style.minWidth = moderateScale(props.minWidth));
  }
  if (props.height) {
    typeof props.height === 'string' && (style.height = props.height);
    typeof props.height === 'number' && (style.height = moderateScale(props.height));
  }
  if (props.maxHeight) {
    typeof props.maxHeight === 'string' && (style.maxHeight = props.maxHeight);
    typeof props.maxHeight === 'number' && (style.maxHeight = moderateScale(props.maxHeight));
  }
  if (props.minHeight) {
    typeof props.minHeight === 'string' && (style.minHeight = props.minHeight);
    typeof props.minHeight === 'number' && (style.minHeight = moderateScale(props.minHeight));
  }

  if (props.rgap !== undefined) {
    style.rowGap = props.rgap;
  }
  if (props.gap !== undefined) {
    style.gap = props.gap;
  }
  if (props.cgap !== undefined) {
    style.columnGap = props.cgap;
  }
  if (props.flex !== undefined) {
    style.flex = props.flex;
  }
  if (props.flexGrow !== undefined) {
    style.flexGrow = props.flexGrow;
  }

  props.fw && (style.flexWrap = props.fw);
  props.fd && (style.flexDirection = props.fd);
  props.jc && (style.justifyContent = props.jc);
  props.ai && (style.alignItems = props.ai);
  props.ta && (style.textAlign = props.ta);

  if (props.opacity !== undefined) {
    props.opacity && (style.opacity = props.opacity);
  }

  return style;
};
