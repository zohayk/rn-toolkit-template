import React, { Fragment } from 'react';
import { ScrollView as ScrollViewBase, ScrollViewProps } from 'react-native';

const FLEX_GROW = 1;
const WIDTH = '100%';

export const ScrollView: React.FC<ScrollViewProps> = React.memo(({ children, ...props }) => (
  <ScrollViewBase
    centerContent
    contentContainerStyle={{ flexGrow: FLEX_GROW }}
    style={{ width: WIDTH }}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    {...props}
  >
    <Fragment>{children}</Fragment>
  </ScrollViewBase>
));

ScrollView.defaultProps = {
  keyboardShouldPersistTaps: 'handled',
  keyboardDismissMode: 'none',
};
