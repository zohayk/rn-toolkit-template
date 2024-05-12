import React, { Fragment } from 'react';
import { ScrollView as GestureBaseScrollView } from 'react-native-gesture-handler';
import {
  ScrollView as BaseScrollView,
  ScrollViewProps as BaseScrollViewProps,
  Insets,
} from 'react-native';

interface ScrollViewProps extends BaseScrollViewProps {
  hitSlop?: Insets; // for react-native-gesture-handler ScrollView
}

const FLEX_GROW = 1;
const WIDTH = '100%';

export const ScrollView: React.FC<ScrollViewProps> = React.memo(
  ({
    children,
    centerContent = true,
    showsHorizontalScrollIndicator = false,
    showsVerticalScrollIndicator = false,
    keyboardShouldPersistTaps = 'handled',
    keyboardDismissMode = 'none',
    ...props
  }) => (
    <BaseScrollView
      centerContent={centerContent}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      keyboardDismissMode={keyboardDismissMode}
      contentContainerStyle={{ flexGrow: FLEX_GROW }}
      style={{ width: WIDTH }}
      {...props}
    >
      <Fragment>{children}</Fragment>
    </BaseScrollView>
  ),
);

export const GestureScrollView: React.FC<ScrollViewProps> = React.memo(
  ({
    children,
    centerContent = true,
    showsHorizontalScrollIndicator = false,
    showsVerticalScrollIndicator = false,
    keyboardShouldPersistTaps = 'handled',
    keyboardDismissMode = 'none',
    ...props
  }) => (
    <GestureBaseScrollView
      centerContent={centerContent}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      keyboardDismissMode={keyboardDismissMode}
      contentContainerStyle={{ flexGrow: FLEX_GROW }}
      style={{ width: WIDTH }}
      {...props}
    >
      <Fragment>{children}</Fragment>
    </GestureBaseScrollView>
  ),
);
