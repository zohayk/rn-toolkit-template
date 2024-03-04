import React from 'react';
import { FlatList as GestureBaseFlatList } from 'react-native-gesture-handler';
import { FlatList as BaseFlatList, StyleSheet, FlatListProps, Keyboard } from 'react-native';
import { Any } from 'types';

interface BaseFlatListProps extends FlatListProps<Any> {
  forwardRef?: React.Ref<BaseFlatList>;
}

export const FlatList: React.FC<BaseFlatListProps> = ({ forwardRef, ...props }) => (
  <BaseFlatList
    ref={forwardRef}
    style={styles.flatList}
    onScrollBeginDrag={() => {
      props.keyboardDismissMode === 'on-drag' && Keyboard.dismiss();
    }}
    {...props}
  />
);

export const GestureFlatList: React.FC<BaseFlatListProps> = ({ ...props }) => (
  <GestureBaseFlatList
    style={styles.flatList}
    onScrollBeginDrag={() => {
      props.keyboardDismissMode === 'on-drag' && Keyboard.dismiss();
    }}
    {...props}
  />
);

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
});

const defaultProps = {
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  keyboardShouldPersistTaps: 'handled',
  keyboardDismissMode: 'none',
} as const;

FlatList.defaultProps = defaultProps;
GestureFlatList.defaultProps = defaultProps;
