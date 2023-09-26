import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ReactChildren } from 'types';

const FLEX_GROW = 1;

export const GestureHandlerRoot: React.FC<ReactChildren> = ({ children }) => (
  <GestureHandlerRootView style={{ flexGrow: FLEX_GROW }}>{children}</GestureHandlerRootView>
);
