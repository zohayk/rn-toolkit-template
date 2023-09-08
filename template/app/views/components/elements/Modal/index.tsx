import React, { FunctionComponent, useMemo } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { View } from '../Views';
import BaseModal from 'react-native-modal';
import { ReactChildren } from 'types';

interface ModalProps extends ReactChildren {
  isVisible: boolean;
  setIsVisible: (arg: boolean) => void;
  isTop?: boolean;
  isSwipeable?: boolean;
  isBottom?: boolean;
}

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  isVisible,
  setIsVisible,
  isTop,
  isBottom,
  isSwipeable,
}) => {
  const justifyContent = useMemo(() => {
    if (isBottom) {
      return 'flex-end';
    }
    if (isTop) {
      return 'flex-start';
    }
    return 'center';
  }, [isBottom, isTop]);

  return (
    <BaseModal
      {...(isSwipeable
        ? { swipeDirection: 'down', onSwipeComplete: () => setIsVisible(false) }
        : {})}
      statusBarTranslucent
      style={styles.modal}
      isVisible={isVisible}
      backdropOpacity={0.3}
      // backdropColor={theme.colors.black}
      backdropColor="transparent"
      animationInTiming={500}
      // animationIn="slideInUp"
      // animationOut="slideOutDown"
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      coverScreen
    >
      <View flex={1} ai="center" jc={justifyContent}>
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

Modal.defaultProps = {
  isTop: false,
  isBottom: false,
};
