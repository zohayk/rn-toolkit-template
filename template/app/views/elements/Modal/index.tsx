import React, { useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { ViewProps, View } from '../Views';
import BaseModal from 'react-native-modal';
import { ScreenWidth, ScreenHeight, isAndroid } from 'utils';
import { theme } from 'styles';

interface ModalProps extends ViewProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  isSwipe?: boolean;
  animationIn?: 'fadeIn' | 'slideInUp';
  animationOut?: 'fadeOut' | 'slideOutDown';
}

export const Modal: React.FC<ModalProps> = ({
  children,
  isVisible,
  setIsVisible,
  isSwipe,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  ...props
}) => {
  /**
   * @const widthHeightAndroid variable fixes an error that occurs due to statusBarTranslucent={true}
   */
  const widthHeightAndroid = useMemo(() => {
    if (isAndroid) {
      return { deviceWidth: ScreenWidth(), deviceHeight: ScreenHeight() };
    }
    return {};
  }, [isAndroid]);

  const swipeConfigs = useMemo((): {} => {
    if (isSwipe) {
      return {
        swipeDirection: 'down',
        onSwipeComplete: () => setIsVisible(false),
        propagateSwipe: true,
      };
    }
    return {};
  }, [isSwipe]);

  const renderStyle = useMemo(() => {
    return { zIndex: 100, margin: 0 };
  }, []);

  return (
    <BaseModal
      {...swipeConfigs}
      {...widthHeightAndroid}
      statusBarTranslucent
      style={renderStyle}
      isVisible={isVisible}
      backdropOpacity={0.4}
      backdropColor={theme.colors.black}
      animationOutTiming={500}
      animationInTiming={500}
      animationIn={animationIn}
      animationOut={animationOut}
      coverScreen
    >
      <View flex={1} {...props}>
        <Pressable style={[StyleSheet.absoluteFill]} onPress={() => setIsVisible(false)} />
        {children}
      </View>
    </BaseModal>
  );
};
