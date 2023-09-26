import React from 'react';
import { GeneralView, Text, View } from 'elements';
import { useSafeArea } from 'utils';

export const LoginScreen: React.FC = () => {
  const { bottom } = useSafeArea();

  return (
    <GeneralView pb={bottom}>
      <View flex={1}>
        <Text ta="center" fs={25} lh={30}>
          Welcome
        </Text>
      </View>
    </GeneralView>
  );
};
