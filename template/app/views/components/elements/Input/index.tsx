import React, { useMemo, Fragment } from 'react';
import { TextInput, ViewStyle, TextStyle } from 'react-native';
import { View, MuffledView } from '../Views';
import { theme, moderateScale } from 'styles';
import { Any } from 'types';
import { Controller, Control } from 'react-hook-form';
import { Text } from '../Text';

interface InputProps {
  control: Control<Any>;
  name: string;

  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad';
  placeholder?: string;
  multiline?: boolean;
}

export const InputController: React.FunctionComponent<InputProps> = ({
  control,
  name,
  keyboardType,
  placeholder,
  multiline,
  ...props
}) => {
  const renderStyle = useMemo(() => {
    const styles: {
      view: ViewStyle;
      input: ViewStyle & TextStyle;
    } = {
      view: {
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: theme.colors.white,
        borderRadius: 10,
        ...theme.shadow,
      },
      input: {
        borderRadius: 10,
        height: moderateScale(50),
        fontSize: moderateScale(18),
        fontFamily: theme.fonts.Regular,
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        paddingVertical: moderateScale(13),
      },
    };

    if (multiline) {
      styles.input.height = '100%';
      styles.view.height = moderateScale(150);
    }

    return styles;
  }, [multiline]);

  return (
    <View {...props}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }, fieldState }) => (
          <Fragment>
            <MuffledView style={renderStyle.view}>
              <TextInput
                keyboardType={keyboardType}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                multiline={multiline}
                underlineColorAndroid="transparent"
                secureTextEntry={false}
                autoCorrect={false}
                autoCapitalize="none"
                textAlignVertical="top"
                onFocus={() => false}
                onBlur={() => false}
                style={renderStyle.input}
                placeholderTextColor={theme.colors.black}
              />
            </MuffledView>
            {fieldState.error?.message && (
              <View pl={20} pt={10}>
                <Text fs={18} color={theme.colors.pomegranate}>
                  {fieldState.error.message}
                </Text>
              </View>
            )}
          </Fragment>
        )}
      />
    </View>
  );
};

InputController.defaultProps = {
  multiline: false,
  placeholder: '',
  keyboardType: 'default',
};
