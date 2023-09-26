import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { LayoutAnimation } from 'react-native';
import { Text, TouchableView, View, MuffledView } from 'elements';
import { theme } from 'styles';

let timeout: ReturnType<typeof setTimeout>;
const startTimeout = (onClose: () => void): void => {
  timeout = setTimeout(() => {
    onClose();
  }, 1500);
};
let timeoutShow: ReturnType<typeof setTimeout>;
const showTimeout = (onShow: () => void): void => {
  timeoutShow = setTimeout(() => {
    onShow();
  }, 100);
};

export class PopUpMessage extends React.PureComponent {
  state = {
    show: false,
  };
  message = '';
  isError = false;

  onShow = (message?: string, isError?: boolean): void => {
    this.message = message || '';
    this.isError = !!isError;
    this.forceUpdate();

    clearTimeout(timeoutShow);
    showTimeout(() => {
      this.setState({ show: true });
      LayoutAnimation.spring();
    });

    clearTimeout(timeout);
    startTimeout(this.onClose);
  };

  onClose = (): void => {
    LayoutAnimation.spring();
    this.setState({ show: false });
    this.message = '';
    this.isError = false;
  };

  render(): React.ReactNode {
    const { onClose, state, isError, message } = this;

    return (
      <SafeAreaInsetsContext.Consumer>
        {(insets: { top: number } | null) => (
          <MuffledView
            zi={100}
            position="absolute"
            top={state.show ? insets?.top : -100}
            overflow="hidden"
          >
            <TouchableView ph={20} onPress={onClose}>
              <View
                bg={isError ? theme.colors.coralRed : theme.colors.malachite}
                height={45}
                fd="row"
                jc="space-between"
                ai="center"
              >
                <Text bold fs={18}>
                  {message}
                </Text>
              </View>
            </TouchableView>
          </MuffledView>
        )}
      </SafeAreaInsetsContext.Consumer>
    );
  }
}
