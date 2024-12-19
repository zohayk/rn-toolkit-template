import React from 'react';
// import { FlatList as GestureBaseFlatList } from 'react-native-gesture-handler';
import {
  FlatList as BaseFlatList,
  StyleSheet,
  FlatListProps,
  Keyboard,
  Insets,
} from 'react-native';
import { Any } from 'types';

interface BaseFlatListProps extends FlatListProps<Any> {
  forwardRef?: React.Ref<BaseFlatList>;
  hitSlop?: Insets; // react-native-gesture-handler FlatList
}

export const FlatList: React.FC<BaseFlatListProps> = ({
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  keyboardShouldPersistTaps = 'handled',
  keyboardDismissMode = 'none',
  forwardRef,
  ...props
}) => (
  <BaseFlatList
    ref={forwardRef}
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    keyboardShouldPersistTaps={keyboardShouldPersistTaps}
    keyboardDismissMode={keyboardDismissMode}
    style={styles.flatList}
    onScrollBeginDrag={() => {
      keyboardDismissMode === 'on-drag' && Keyboard.dismiss();
    }}
    {...props}
  />
);

// export const GestureFlatList: React.FC<BaseFlatListProps> = ({
//   showsHorizontalScrollIndicator = false,
//   showsVerticalScrollIndicator = false,
//   keyboardShouldPersistTaps = 'handled',
//   keyboardDismissMode = 'none',
//   ...props
// }) => (
//   <GestureBaseFlatList
//     showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
//     showsVerticalScrollIndicator={showsVerticalScrollIndicator}
//     keyboardShouldPersistTaps={keyboardShouldPersistTaps}
//     keyboardDismissMode={keyboardDismissMode}
//     style={styles.flatList}
//     onScrollBeginDrag={() => {
//       keyboardDismissMode === 'on-drag' && Keyboard.dismiss();
//     }}
//     {...props}
//   />
// );

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
});
