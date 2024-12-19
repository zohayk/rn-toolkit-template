import React, { Fragment, useRef } from 'react';
import { View, NativeTouchEvent, UIManager } from 'react-native';
import { PopUpMessage } from 'components';
import { ReactChildren } from 'types';
import { isAndroid, KeyboardDismiss } from 'utils';

if (isAndroid && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FLEX = 1;

export const Common: React.FC<ReactChildren> = ({ children }) => {
  const startEventRef = useRef<NativeTouchEvent>(null);

  const endTouch = (arg: NativeTouchEvent): void => {
    if (startEventRef.current) {
      const xMax = startEventRef.current.pageX + 5;
      const xMin = startEventRef.current.pageX - 5;
      const yMax = startEventRef.current.pageY + 5;
      const yMin = startEventRef.current.pageY - 5;
      if (xMin < arg.pageX && xMax > arg.pageX && yMin < arg.pageY && yMax > arg.pageY) {
        // eslint-disable-next-line no-console
        console.log('Clicked on an empty space');
        KeyboardDismiss();
      }
    }
  };

  return (
    <Fragment>
      <View
        onTouchStart={e => {
          startEventRef.current = e.nativeEvent;
        }}
        onTouchEnd={e => {
          endTouch(e.nativeEvent);
        }}
        style={{ flex: FLEX }}
      >
        {children}
      </View>

      <PopUpMessage />
    </Fragment>
  );
};
