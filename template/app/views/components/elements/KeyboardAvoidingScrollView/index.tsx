import React, { Fragment, FunctionComponent } from 'react';
import { KeyboardAvoidingView, Keyboard, RefreshControlProps } from 'react-native';
import { ReactChildren } from 'types';
import { isIOS } from 'utils';
import { ScrollView } from '../ScrollView';

interface Props extends ReactChildren {
  refreshControl?: React.ReactElement<RefreshControlProps>;
  dismissMode?: 'none' | 'interactive' | 'on-drag';
}

const FLEX = 1;

export const KeyboardAvoidingScrollView: FunctionComponent<Props> = ({
  children,
  dismissMode,
  refreshControl,
}) => {
  return (
    <Fragment>
      {isIOS ? (
        <KeyboardAvoidingView
          style={{ flexGrow: FLEX, flex: FLEX }}
          keyboardVerticalOffset={0}
          enabled
          behavior="padding"
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: FLEX }}
            refreshControl={refreshControl}
            keyboardDismissMode={dismissMode}
          >
            {children}
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <ScrollView
          refreshControl={refreshControl}
          onScrollBeginDrag={() => {
            dismissMode === 'on-drag' && Keyboard.dismiss();
          }}
          contentContainerStyle={{ flexGrow: FLEX }}
        >
          {children}
        </ScrollView>
      )}
    </Fragment>
  );
};

KeyboardAvoidingScrollView.defaultProps = {
  dismissMode: 'none',
};
