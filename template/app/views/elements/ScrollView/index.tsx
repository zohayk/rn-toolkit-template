import React, { Fragment } from 'react';
import { ScrollView as GestureBaseScrollView } from 'react-native-gesture-handler';
import { ScrollView as BaseScrollView, ScrollViewProps } from 'react-native';

const FLEX_GROW = 1;
const WIDTH = '100%';

export const ScrollView: React.FC<ScrollViewProps> = React.memo(({ children, ...props }) => (
  <BaseScrollView
    contentContainerStyle={{ flexGrow: FLEX_GROW }}
    style={{ width: WIDTH }}
    {...props}
  >
    <Fragment>{children}</Fragment>
  </BaseScrollView>
));

export const GestureScrollView: React.FC<ScrollViewProps> = React.memo(({ children, ...props }) => (
  <GestureBaseScrollView
    contentContainerStyle={{ flexGrow: FLEX_GROW }}
    style={{ width: WIDTH }}
    {...props}
  >
    <Fragment>{children}</Fragment>
  </GestureBaseScrollView>
));

const defaultProps: ScrollViewProps = {
  centerContent: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  keyboardDismissMode: 'none',
};

ScrollView.defaultProps = defaultProps;
GestureScrollView.defaultProps = defaultProps;
