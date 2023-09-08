import React, { FunctionComponent, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { renderStyleView, ViewProps } from '../../elements';
import { ReactChildren } from 'types';

interface RotationAnimationProps extends ViewProps, ReactChildren {
  trigger: boolean;
}

export const RotationAnimation: FunctionComponent<RotationAnimationProps> = ({
  children,
  trigger,
  ...props
}) => {
  const animationController = useRef(new Animated.Value(0)).current;

  const onToggle = (): void => {
    const config = {
      duration: 300,
      toValue: trigger ? 1 : 0,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
  };

  useEffect(() => {
    onToggle();
  }, [trigger]);

  const contentTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-180deg'],
  });

  return (
    <Animated.View
      style={[renderStyleView(props).view, { transform: [{ rotateZ: contentTransform }] }]}
    >
      {children}
    </Animated.View>
  );
};
