// import { getRealWindowHeight, getRealWindowWidth } from 'react-native-extra-dimensions-android';
import { Platform, Dimensions, Linking } from 'react-native';
import { ShowPopUpMessage } from 'services';
import lodashIsEmpty from 'lodash/isEmpty';
import React from 'react';
import { RootState, Any } from 'types';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const isLandscape: () => boolean = () => {
  const isDim = Dimensions.get('window');
  return isDim.width > isDim.height;
};

export const errorHandler = <T>(error: T): T => error;
export const getStateHandler = <T>(getState: () => T): RootState => (getState as () => RootState)();

export const navigationRef = React.createRef<Any>();

export const handleUrl = (url: string): void => {
  Linking.canOpenURL(url)
    .then(() => {
      Linking.openURL(url);
    })
    .catch(() => {
      ShowPopUpMessage('An error occurred.', true);
    });
};

export const ScreenWidth = (): number => {
  // const width = isIOS ? Dimensions.get('window').width : getRealWindowWidth();
  // const height = isIOS ? Dimensions.get('window').height : getRealWindowHeight();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  if (isLandscape()) {
    if (width > height) {
      return width;
    } else {
      return height;
    }
  } else {
    if (height > width) {
      return width;
    } else {
      return height;
    }
  }
};

export const ScreenHeight = (): number => {
  // const width = isIOS ? Dimensions.get('window').width : getRealWindowWidth();
  // const height = isIOS ? Dimensions.get('window').height : getRealWindowHeight();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  if (isLandscape()) {
    if (width > height) {
      return height;
    } else {
      return width;
    }
  } else {
    if (height > width) {
      return height;
    } else {
      return width;
    }
  }
};

/**
 * @desc isEmpty and isEntry: Checks to the roots object, array
 *
 * @desc isEmpty(0) -> true
 * @desc isEmpty("") -> true
 * @desc isEmpty({}) -> true
 * @desc isEmpty([]) -> true
 */
export function isEmpty(value: Any): value is null | undefined;
export function isEmpty<T>(value: T): boolean {
  switch (typeof value) {
    case 'number': {
      return value === 0;
    }
    case 'boolean': {
      return !value;
    }
    default: {
      return lodashIsEmpty(value);
    }
  }
}
/**
 * @desc isEntry(0) -> false
 * @desc isEntry("") -> false
 * @desc isEntry(false) -> false
 * @desc isEntry({}) -> false
 * @desc isEntry([]) -> false
 */
export function isEntry(value?: Any): value is string | number | boolean | object;
export function isEntry<T>(value: T): boolean {
  switch (typeof value) {
    case 'number': {
      return value !== 0;
    }
    case 'boolean': {
      return value;
    }
    default: {
      return !lodashIsEmpty(value);
    }
  }
}
