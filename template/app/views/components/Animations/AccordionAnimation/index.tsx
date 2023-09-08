import React, { FunctionComponent, useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { View, Text, TouchableView, ViewProps } from '../../elements';
import { RotationAnimation } from '../RotationAnimation';
import { ReactChildren } from 'types';

interface AccordionProps extends ViewProps, ReactChildren {
  title: string;
  touchPh?: number;
  defaultValue?: boolean;
}

export const AccordionAnimation: FunctionComponent<AccordionProps> = ({
  children,
  title,
  touchPh,
  defaultValue = false,
  ...props
}) => {
  const [open, setShow] = useState(defaultValue);

  const toggleBox = (): void => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShow(!open);
  };

  return (
    <View {...props} overflow="hidden">
      <TouchableView ph={touchPh || 0} onPress={toggleBox} fd="row" jc="space-between" ai="center">
        <Text bold fs={18}>
          {title}
        </Text>
        <RotationAnimation trigger={open}>
          <View height={20} width={20} bg="black" />
        </RotationAnimation>
      </TouchableView>

      {open && children}
    </View>
  );
};
