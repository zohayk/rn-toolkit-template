import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Text, TouchableView, View } from 'elements';
import { EventEmitter } from 'services';
import { moderateScale } from 'styles';
import { useSafeArea } from 'utils';
import config from 'config';

let timeout: ReturnType<typeof setTimeout>;
const startTimeout = (onClose: () => void): void => {
  timeout = setTimeout(() => {
    onClose();
  }, config.POPUP_TIME);
};

const TOP = 300;

/**
 * @desc This component is a duplicate of the SecondaryPopUpMessage component, no need to combine them.
 */
export const PopUpMessage: React.FC = React.memo(() => {
  const { top } = useSafeArea();
  const [data, setData] = useState({ message: '', isError: false });
  const positionY = useRef<Animated.Value>(new Animated.Value(-TOP));

  useEffect(() => {
    EventEmitter.once('PopUpMessage', onShow);
  }, [top]);

  const onShow = ({ message, isError = false }: { message: string; isError?: boolean }): void => {
    setData({ message, isError });

    onClose();
    Animated.spring(positionY.current, {
      toValue: TOP + top,
      friction: 7,
      tension: 80,
      useNativeDriver: true,
    }).start();

    clearTimeout(timeout);
    startTimeout(onClose);
  };

  const onClose = (): void => {
    positionY.current.stopAnimation();
    positionY.current.setValue(-TOP);
  };

  return (
    <Animated.View
      style={[
        styles.commonToastStyle,
        { top: -TOP, transform: [{ translateY: positionY.current }] },
      ]}
    >
      <TouchableView
        fd="row"
        overflow="hidden"
        ai="center"
        ph={24}
        pv={16}
        activeOpacity={0.9}
        onPress={onClose}
      >
        <View ml={12} flex={1} maxHeight={100}>
          <Text fs={14}>{data.message}</Text>
        </View>
      </TouchableView>
    </Animated.View>
  );
});

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
