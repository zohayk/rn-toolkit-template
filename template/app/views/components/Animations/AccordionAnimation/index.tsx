import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { View, TouchableView, ViewProps } from 'elements';
import { RotationAnimation } from '../RotationAnimation';
import { ReactChildren } from 'types';

interface AccordionProps extends ViewProps, ReactChildren {
  arrowColor?: string;
  touchPh?: number;
  defaultValue?: boolean;
  headerComponent?: React.ReactElement;
  changeState?: (arg: boolean) => void;
}

export const AccordionAnimation: React.FC<AccordionProps> = ({
  children,
  touchPh = 0,
  defaultValue = false,
  headerComponent,
  changeState,
  ...props
}) => {
  const [open, setShow] = useState(defaultValue);

  const toggleBox = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShow(!open);
    changeState && changeState(!open);
  };

  return (
    <View {...props} overflow="hidden">
      <TouchableView ph={touchPh} onPress={toggleBox} fd="row" jc="space-between" ai="center">
        {headerComponent}
        <RotationAnimation trigger={open}>
          {/*<ArrowBottomIcon color={arrowColor} />*/}
        </RotationAnimation>
      </TouchableView>

      {open && children}
    </View>
  );
};
