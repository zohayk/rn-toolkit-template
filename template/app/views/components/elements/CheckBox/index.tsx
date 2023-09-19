import React, { useMemo, FunctionComponent } from 'react';
import { TouchableView, ViewProps, View, MuffledView } from '../Views';
import { Controller, Control } from 'react-hook-form';
// import { Image } from '../Image';
import { theme } from 'styles';
import { Any } from 'types';

interface CheckBoxControllerProps {
  control: Control<Any>;
  name: string;
}

export const CheckBox: FunctionComponent<CheckBoxControllerProps> = ({ control, name }) => {
  const renderStyle = useMemo(() => {
    const styles: { view: ViewProps } = {
      view: {
        br: 10,
        bg: theme.colors.white,
        width: 30,
        height: 30,
      },
    };

    return styles;
  }, []);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <MuffledView>
          <TouchableView
            jc="center"
            ai="center"
            {...renderStyle.view}
            style={{ ...theme.shadow }}
            onPress={() => onChange(!value)}
          >
            <View width={15} height={12}>
              {/*{value ? <Image source={require('views/assets/icons/checkIcon.png')} /> : null}*/}
            </View>
          </TouchableView>
        </MuffledView>
      )}
    />
  );
};

CheckBox.defaultProps = {};
