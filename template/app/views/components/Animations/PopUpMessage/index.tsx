import React from 'react';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Animated } from 'react-native';
import { Text, TouchableView } from 'elements';
import { moderateScale, theme } from 'styles';
import config from 'config';

interface PopUpMessageClassProps {
  insets: { top: number };
}

let timeout: ReturnType<typeof setTimeout>;
const startTimeout = (onClose: () => void): void => {
  timeout = setTimeout(() => {
    onClose();
  }, config.POPUP_TIME);
};

const TOP = 300;

export class PopUpMessageClass extends React.PureComponent<PopUpMessageClassProps> {
  positionY = React.createRef().current as Animated.Value;
  state = {
    message: '',
    isError: false,
  };

  constructor(props: PopUpMessageClassProps) {
    super(props);

    this.positionY = new Animated.Value(-TOP);
  }

  onShow = (message?: string, isError?: boolean): void => {
    this.setState({ message, isError });

    this.onClose();
    Animated.spring(this.positionY, {
      toValue: TOP + this.props.insets.top,
      friction: 7,
      tension: 80,
      useNativeDriver: true,
    }).start();

    clearTimeout(timeout);
    startTimeout(this.onClose);
  };

  onClose = (): void => {
    this.positionY.stopAnimation();
    this.positionY.setValue(-TOP);
  };

  render(): React.ReactNode {
    const { onClose, positionY } = this;
    const { isError, message } = this.state;

    return (
      <Animated.View
        style={[
          styles.commonToastStyle,
          {
            backgroundColor: isError ? theme.colors.coralRed : theme.colors.pomegranate,
            top: -TOP,
            transform: [{ translateY: positionY }],
          },
        ]}
      >
        <TouchableView overflow="hidden" ph={24} pv={16} activeOpacity={0.9} onPress={onClose}>
          <Text fs={14} ta="center" color={theme.colors.white}>
            {message}
          </Text>
        </TouchableView>
      </Animated.View>
    );
  }
}

export const PopUpMessage = withSafeAreaInsets(PopUpMessageClass);

const styles = StyleSheet.create({
  commonToastStyle: {
    borderRadius: moderateScale(16),
    marginHorizontal: moderateScale(12),
    right: 0,
    left: 0,
    zIndex: 20,
    position: 'absolute',
  },
});
