// import React, { useMemo, Fragment, useState, useEffect, useCallback } from 'react';
// import { TextInput, ViewStyle } from 'react-native';
// import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
// import { View } from '../Views';
// import { theme, moderateScale } from 'styles';
// import { Text } from '../Text';
// import { renderInputStyle, RenderStyleType } from './styles';
// import config from 'config';
// import { Controller, useWatch } from 'react-hook-form';
// import { ControlType } from 'types';

// interface AnimatedInputProps {
//   control: ControlType;
//   name: string;

//   forwardedRef?: React.Ref<TextInput>;
//   keyboardType?:
//     | 'default'
//     | 'number-pad'
//     | 'decimal-pad'
//     | 'numeric'
//     | 'email-address'
//     | 'phone-pad';
//   placeholder: string;
// }

// type StylesType = RenderStyleType & { animatedView: ViewStyle };

// const MAX_TOP = moderateScale(config.INPUT_HEIGHT / 2.8);
// const MIN_TOP = moderateScale(-9);

// export const AnimatedInput: React.FC<AnimatedInputProps> = ({
//   control,
//   name,
//   forwardedRef,
//   keyboardType,
//   placeholder,
//   ...props
// }) => {
//   const fieldValue = useWatch({ control })[name] || '';
//   const [isFocused, setIsFocused] = useState(false);
//   const top = useSharedValue(fieldValue.length === 0 ? MAX_TOP : MIN_TOP);

//   useEffect(() => {
//     if (!isFocused && fieldValue.length === 0) {
//       onEndAnimation();
//     }
//     if (!isFocused && fieldValue.length > 0) {
//       onStartAnimation();
//     }
//   }, [isFocused, fieldValue]);

//   const onStartAnimation = useCallback(() => {
//     top.value = withTiming(-9, { duration: 300 });
//   }, []);
//   const onEndAnimation = useCallback(() => {
//     top.value = withTiming(MAX_TOP, { duration: 300 });
//   }, []);

//   const renderStyle = useMemo(() => {
//     const styles = renderInputStyle() as StylesType;
//     styles.animatedView = {
//       backgroundColor: theme.colors.white,
//       borderRadius: moderateScale(5),
//       width: 'auto',
//       position: 'absolute',
//       left: moderateScale(10),
//       paddingRight: moderateScale(10),
//       paddingLeft: moderateScale(10),
//     };

//     return styles;
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => ({
//     top: top.value,
//   }));

//   return (
//     <View {...props}>
//       <Controller
//         control={control}
//         name={name}
//         render={({ field: { value, onChange }, fieldState }) => (
//           <Fragment>
//             <View
//               style={[renderStyle.view, fieldState.error?.message ? renderStyle.viewError : {}]}
//             >
//               <Animated.View style={[renderStyle.animatedView, animatedStyle]}>
//                 <Text color={theme.colors.manatee}>{placeholder}</Text>
//               </Animated.View>
//               <TextInput
//                 ref={forwardedRef}
//                 keyboardType={keyboardType}
//                 value={value}
//                 onChangeText={onChange}
//                 underlineColorAndroid="transparent"
//                 secureTextEntry={false}
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 textAlignVertical="center"
//                 onFocus={() => {
//                   onStartAnimation();
//                   setIsFocused(true);
//                 }}
//                 onBlur={e => {
//                   if (e.nativeEvent.text?.length === 0) {
//                     onEndAnimation();
//                   }
//                   setIsFocused(false);
//                 }}
//                 style={renderStyle.input}
//                 placeholderTextColor={theme.colors.black}
//               />
//             </View>
//             {fieldState.error?.message && (
//               <View pr={16} ai="flex-end">
//                 <Text fs={12} color={theme.colors.sunsetOrange}>
//                   {fieldState.error.message}
//                 </Text>
//               </View>
//             )}
//           </Fragment>
//         )}
//       />
//     </View>
//   );
// };

// AnimatedInput.defaultProps = {
//   placeholder: '',
//   keyboardType: 'default',
// };
