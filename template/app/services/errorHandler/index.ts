/* eslint-disable no-console */
import { Any } from 'types';
import { ShowPopUpMessage } from '../popUpMessageHandler';

export const processRequestError = (payload: { error: Any; actionPrefix?: string }): void => {
  const { error, actionPrefix } = payload;
  let errorMessage = '';

  console.log('Action prefix: ', actionPrefix);
  console.log('Action error: ', error);

  if (error.response) {
    switch (error.response.status) {
      case 400: {
        // data.error.message: 'message'
        const resData = error.response.data || { errorCode: 'Error' };
        errorMessage = JSON.stringify(resData);
        break;
      }
      case 401:
        // yield put(resetStore());
        break;
      case 403:
      case 425:
        errorMessage = 'Something went wrong';
        break;
      default:
        // For errors 500, 502
        errorMessage = 'Server error';
        break;
    }
  } else if (error.request) {
    if (error.request.status === 0) {
      errorMessage = 'Network error';
    }
  } else {
    errorMessage = 'Something went wrong';
  }

  ShowPopUpMessage(errorMessage, true);
};
