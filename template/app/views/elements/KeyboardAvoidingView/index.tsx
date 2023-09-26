import React, { Fragment } from 'react';
import { KeyboardAvoidingView as BseKeyboardAvoidingView } from 'react-native';
import { isIOS } from 'utils';
import { View } from '../Views';
import { ReactChildren } from 'types';

const FLEX_GROW = 1;

export const KeyboardAvoidingView: React.FC<ReactChildren> = ({ children }) => (
  <Fragment>
    {isIOS ? (
      <BseKeyboardAvoidingView
        behavior="padding"
        enabled
        keyboardVerticalOffset={0}
        style={{ flexGrow: FLEX_GROW }}
      >
        <View flex={1}>{children}</View>
      </BseKeyboardAvoidingView>
    ) : (
      <View flex={1}>{children}</View>
    )}
  </Fragment>
);
