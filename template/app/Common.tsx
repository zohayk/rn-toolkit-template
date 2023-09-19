import React, { Fragment, useRef } from 'react';
import { View, NativeTouchEvent } from 'react-native';
import { PopUpMessage } from 'components';
import { ReactChildren } from 'types';
import { popUpMessageRef } from 'services';
import { KeyboardDismiss } from 'utils';

const FLEX = 1;

export const Common: React.FunctionComponent<ReactChildren> = ({ children }) => {
  const startEventRef = useRef<NativeTouchEvent>();

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

      <PopUpMessage ref={popUpMessageRef} />
    </Fragment>
  );
};
