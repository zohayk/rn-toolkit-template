import { EventEmitter } from 'services';

export const ShowPopUpMessage = (message: string, isError?: boolean): void => {
  EventEmitter.emit('PopUpMessage', { message, isError });
};
