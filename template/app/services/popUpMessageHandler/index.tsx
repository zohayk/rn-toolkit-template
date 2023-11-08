import React from 'react';
import { PopUpMessageClass } from 'components';

export const popUpMessageRef = React.createRef<PopUpMessageClass>();
export const ShowPopUpMessage = (message: string, isError?: boolean): void => {
  popUpMessageRef.current && popUpMessageRef.current.onShow(message, isError);
};
