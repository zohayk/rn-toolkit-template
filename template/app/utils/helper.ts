import { Platform, Dimensions, Keyboard } from 'react-native';
import { getRealWindowHeight, getRealWindowWidth } from 'react-native-extra-dimensions-android';
import { RootState } from 'types';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const KeyboardDismiss: () => void = () => Keyboard.dismiss();

export const isLandscape: () => boolean = () => {
  const isDim = Dimensions.get('window');
  return isDim.width > isDim.height;
};

export const ScreenWidth = (): number => {
  const width = isIOS ? Dimensions.get('window').width : getRealWindowWidth();
  const height = isIOS ? Dimensions.get('window').height : getRealWindowHeight();
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
  const width = isIOS ? Dimensions.get('window').width : getRealWindowWidth();
  const height = isIOS ? Dimensions.get('window').height : getRealWindowHeight();
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

export const errorHandler = <T>(error: T): T => error;
export const getStateHandler = <T>(getState: () => T): RootState => (getState as () => RootState)();
