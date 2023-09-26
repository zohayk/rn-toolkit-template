import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated';
import { theme } from 'styles';

interface RangeSliderProps {
  sliderWidth: number;
  onValueChange: (value: number) => void;
  defaultValue?: 20 | 40 | 60 | 80 | 100;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
  sliderWidth,
  onValueChange,
  defaultValue,
}) => {
  const MARKERS = [
    { index: 0, publicValue: 20, active: useSharedValue(0) },
    { index: 25, publicValue: 40, active: useSharedValue(0) },
    { index: 50, publicValue: 60, active: useSharedValue(0) },
    { index: 75, publicValue: 80, active: useSharedValue(0) },
    { index: 100, publicValue: 100, active: useSharedValue(0) },
  ];
  const MARKERS_POSITION = MARKERS.map(M => {
    if (M.publicValue <= (defaultValue || 0)) {
      M.active.value = 1;
    }
    return (sliderWidth / 100) * M.index;
  });
  const DEFAULT_POSITION =
    MARKERS_POSITION[MARKERS.findIndex(M => M.publicValue === defaultValue)] || 0;

  const position = useSharedValue(DEFAULT_POSITION);
  const position2 = useSharedValue(sliderWidth);

  const paintActiveMarker = (index: number): void => {
    MARKERS.forEach((M, I) => {
      if (I <= index) {
        M.active.value = 1;
      } else {
        M.active.value = 0;
      }
    });
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx: { startX: number }) => {
      ctx.startX = position.value;
    },
    onActive: (e, ctx) => {
      const mediumPosition = MARKERS_POSITION[1] / 2;
      const thumbPosition = ctx.startX + e.translationX;

      if (ctx.startX + e.translationX < 0) {
        position.value = 0;
      }
      if (ctx.startX + e.translationX > position2.value) {
        position.value = position2.value;
      }
      if (ctx.startX + e.translationX > 0 && ctx.startX + e.translationX < position2.value) {
        MARKERS_POSITION.forEach((markPos, index) => {
          if (index !== MARKERS_POSITION.length - 1) {
            if (
              thumbPosition > markPos + mediumPosition &&
              thumbPosition < MARKERS_POSITION[index + 1]
            ) {
              runOnJS(paintActiveMarker)(index + 1);
            }
            if (thumbPosition > markPos && thumbPosition < markPos + mediumPosition) {
              runOnJS(paintActiveMarker)(index);
            }
          }
        });
        position.value = ctx.startX + e.translationX;
      }
    },
    onEnd: (e, ctx) => {
      const mediumPosition = MARKERS_POSITION[1] / 2;
      const thumbPosition = ctx.startX + e.translationX;

      if (MARKERS_POSITION[0] > thumbPosition) {
        runOnJS(onValueChange)(MARKERS[0].publicValue);
      }
      if (MARKERS_POSITION[4] < thumbPosition) {
        runOnJS(onValueChange)(MARKERS[4].publicValue);
      }
      if (MARKERS_POSITION[0] < thumbPosition && thumbPosition < MARKERS_POSITION[4]) {
        MARKERS_POSITION.forEach((markPos, index) => {
          if (index !== MARKERS_POSITION.length - 1) {
            if (
              thumbPosition > markPos + mediumPosition &&
              thumbPosition < MARKERS_POSITION[index + 1]
            ) {
              position.value = MARKERS_POSITION[index + 1];
              runOnJS(onValueChange)(MARKERS[index + 1].publicValue);
            }
            if (thumbPosition > markPos && thumbPosition < markPos + mediumPosition) {
              position.value = MARKERS_POSITION[index];
              runOnJS(onValueChange)(MARKERS[index].publicValue);
            }
          }
        });
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
    width: position2.value - position.value,
  }));

  const MARKERS_STYLE = [
    useAnimatedStyle(() => ({
      backgroundColor: MARKERS[0].active.value === 0 ? theme.colors.alto : theme.colors.pomegranate,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: MARKERS[1].active.value === 0 ? theme.colors.alto : theme.colors.pomegranate,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: MARKERS[2].active.value === 0 ? theme.colors.alto : theme.colors.pomegranate,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: MARKERS[3].active.value === 0 ? theme.colors.alto : theme.colors.pomegranate,
    })),
    useAnimatedStyle(() => ({
      backgroundColor: MARKERS[4].active.value === 0 ? theme.colors.alto : theme.colors.pomegranate,
    })),
  ];

  return (
    <View style={[styles.sliderContainer, { width: sliderWidth }]}>
      <View style={[styles.sliderBack, { width: sliderWidth }]} />
      <Animated.View style={[sliderStyle, styles.sliderFront]} />

      {MARKERS.map((M, index) => (
        <Animated.View
          key={M.index}
          style={[MARKERS_STYLE[index], styles.mark, { left: (sliderWidth / 100) * M.index - 7.5 }]}
        >
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              position.value = MARKERS_POSITION[index];
              onValueChange(MARKERS[index].publicValue);
              paintActiveMarker(index);
            }}
          />
        </Animated.View>
      ))}

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle, styles.thumb]} />
      </PanGestureHandler>
    </View>
  );
};

RangeSlider.defaultProps = {
  defaultValue: 20,
};

const styles = StyleSheet.create({
  sliderContainer: {
    height: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  sliderBack: {
    height: 2,
    backgroundColor: theme.colors.pomegranate,
    borderRadius: 20,
    position: 'absolute',
  },
  sliderFront: {
    height: 2,
    backgroundColor: theme.colors.alto,
    borderRadius: 20,
    position: 'absolute',
  },
  thumb: {
    zIndex: 3,
    left: -12.3,
    width: 25,
    height: 25,
    position: 'absolute',
    backgroundColor: theme.colors.pomegranate,
    borderRadius: 25,
  },
  mark: {
    zIndex: 0,
    width: 15,
    height: 15,
    position: 'absolute',
    borderRadius: 15,
  },
  touchableOpacity: {
    width: '100%',
    height: '100%',
  },
});
