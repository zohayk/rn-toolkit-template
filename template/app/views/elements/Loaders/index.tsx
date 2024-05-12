import React from 'react';
import { DotIndicator, DotIndicatorProps } from 'react-native-indicators';
import { theme, moderateScale } from 'styles';
import { View } from '../Views';

export const PageLoader: React.FC = () => (
  <View flex={1}>
    <MiniLoader />
  </View>
);

export const MiniLoader: React.FC<DotIndicatorProps> = ({
  color = theme.colors.black,
  count = 3,
  size = moderateScale(6),
  ...props
}) => {
  return <DotIndicator color={color} count={count} size={size} {...props} />;
};
