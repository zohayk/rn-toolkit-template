import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableView, View } from '../Views';
// import { Image } from '../Image';
import { moderateScale } from 'styles';
import { ReactChildren } from 'types';

interface CheckBoxProps extends ReactChildren {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export const CheckBox: FunctionComponent<CheckBoxProps> = ({ onValueChange, value, children }) => (
  <View width="auto">
    {value ? (
      <TouchableView onPress={() => onValueChange(!value)} style={styles.checkView}>
        {/*<Image*/}
        {/*  width={moderateScale(16)}*/}
        {/*  height={moderateScale(12)}*/}
        {/*  source={require('views/assets/icons/checked.png')}*/}
        {/*/>*/}
      </TouchableView>
    ) : (
      <TouchableView onPress={() => onValueChange(!value)} style={styles.view}>
        {children}
      </TouchableView>
    )}
  </View>
);

const styles = StyleSheet.create({
  view: {
    borderWidth: moderateScale(1),
    // borderColor: theme.colors.shamrock,
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(8),
  },
  checkView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(8),
    // backgroundColor: theme.colors.shamrock,
  },
});
