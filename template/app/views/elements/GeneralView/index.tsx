import React, { useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenHeight, useSafeArea } from 'utils';
import { View, ViewProps } from '../Views';

export const GeneralView: React.FC<ViewProps> = ({ children, ...props }) => {
  const { top } = useSafeArea();

  const renderStyle = useMemo(() => {
    return {
      flex: 1,
      backgroundColor: 'transparent',
    };
  }, [ScreenHeight]);

  return (
    <SafeAreaView edges={[]} style={renderStyle}>
      <View pt={top} {...props} position="relative" flex={1}>
        {children}
      </View>
    </SafeAreaView>
  );
};
