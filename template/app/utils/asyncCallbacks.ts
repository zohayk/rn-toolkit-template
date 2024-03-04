import { Keyboard } from 'react-native';
import config from '../config';
import { navigationRef } from './helper';

// let timeout: ReturnType<typeof setTimeout>;
const startTimeout = (callback: () => void, time: number): void => {
  // timeout = setTimeout(() => {
  setTimeout(() => {
    callback();
  }, time);
};

export const KeyboardDismiss = (): void => {
  if (Keyboard.isVisible()) {
    Keyboard.dismiss();
  }
};
/**
 * @param rout
 * @param params
 * @desc For asynchronous navigate to another screen.
 * For example: The keyboard is open and need to go to another screen.
 * Same function asyncCloseKeyboard but works with navigate.
 */
export const asyncNavigate: <T>(rout: string, params?: T) => void = (rout, params) => {
  if (Keyboard.isVisible()) {
    // clearTimeout(timeout);
    Keyboard.dismiss();
    startTimeout(() => navigationRef.current?.navigate(rout, params), config.HIDDEN_KEYBOARD_TIME);
  } else {
    navigationRef.current?.navigate(rout, params);
  }
};
/**
 * @param callback
 * @param time
 * @desc For asynchronous keyboard closing.
 * For example: Before performing any actions, need to close the keyboard.
 */
export const asyncCloseKeyboard = (callback: () => void, time?: number): void => {
  if (Keyboard.isVisible()) {
    // clearTimeout(timeout);
    Keyboard.dismiss();
    startTimeout(callback, time || config.HIDDEN_KEYBOARD_TIME);
  } else {
    callback();
  }
};
/**
 * @param callback
 * @param time
 * @desc For asynchronous keyboard opening.
 * For example: Go to the screen and first need to open the keyboard.
 */
export const asyncOpenKeyboard = (callback: () => void, time?: number): void => {
  // clearTimeout(timeout);
  startTimeout(callback, time || config.OPEN_KEYBOARD_TIME);
};
/**
 * @param callback
 * @param time
 * @desc For asynchronous actions.
 * For example: Need to close the modal and then delete the modal data.
 */
export const asyncCallback = (callback: () => void, time?: number): void => {
  // clearTimeout(timeout);
  if (Keyboard.isVisible()) {
    Keyboard.dismiss();
    startTimeout(callback, time || config.ASYNC_CALLBACK_TIME);
  } else {
    startTimeout(callback, time || config.ASYNC_CALLBACK_TIME);
  }
};

export const delay = (time?: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time || config.ASYNC_CALLBACK_TIME);
  });
};
