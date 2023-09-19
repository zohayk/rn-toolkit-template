import React, { FunctionComponent, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { View, ViewProps } from '../Views';
import BaseModal from 'react-native-modal';
import { ReactChildren, Any, RootState } from 'types';
import { ScreenWidth, ScreenHeight, isAndroid } from 'utils';
import { theme } from 'styles';

interface ModalProps extends ReactChildren, ViewProps {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  isSwipe?: boolean;

  animationInTiming?: number;
  animationIn?: Any;
  animationOut?: Any;
}

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isVisible,
  setIsVisible,
  isSwipe,

  animationInTiming,
  animationIn,
  animationOut,
  ...props
}) => {
  const isLandscape = useSelector((state: RootState) => state.app.isLandscape);

  // This fixes an error that occurs due to statusBarTranslucent={true}
  const widthHeightAndroid = useMemo(() => {
    if (isAndroid) {
      return { deviceWidth: ScreenWidth(), deviceHeight: ScreenHeight() };
    }
    return {};
  }, [isLandscape, isAndroid]);

  const swipeConfigs = useMemo((): {} => {
    if (isSwipe) {
      return { swipeDirection: 'down', onSwipeComplete: () => setIsVisible(false) };
    }
    return {};
  }, [isSwipe]);

  return (
    <BaseModal
      {...swipeConfigs}
      {...widthHeightAndroid}
      statusBarTranslucent
      style={styles.modal}
      isVisible={isVisible}
      backdropOpacity={0.3}
      backdropColor={theme.colors.black}
      animationInTiming={animationInTiming || 500}
      animationIn={animationIn || 'fadeInUp'}
      animationOut={animationOut || 'fadeOutDown'}
      coverScreen
    >
      <View flex={1} {...props}>
        <Pressable style={[StyleSheet.absoluteFill]} onPress={() => setIsVisible(false)} />
        {children}
      </View>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    zIndex: 100,
  },
});
